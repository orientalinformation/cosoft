<?php
/****************************************************************************
 **
 ** Copyright (C) 2017 Oriental Tran.
 ** Contact: dongtp@dfm-engineering.com
 ** Company: DFM-Engineering Vietnam
 **
 ** This file is part of the cryosoft project.
 **
 **All rights reserved.
 ****************************************************************************/
namespace App\Http\Controllers\Api1;

use App\Cryosoft\CalculateService;
use App\Cryosoft\ValueListService;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Auth\Factory as Auth;
use Illuminate\Http\Request;

class Calculator extends Controller {
	/**
	 * @var Illuminate\Http\Request
	 */
	protected $request;

	/**
	 * @var Illuminate\Contracts\Auth\Factory
	 */
	protected $auth;

	/**
	 * @var App\Cryosoft\CalculateService
	 */
	protected $cal;

	/**
	 * @var App\Cryosoft\ValueListService
	 */
	protected $value;

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct(Request $request, Auth $auth, CalculateService $cal, ValueListService $value) 
	{
		$this->request = $request;
		$this->auth = $auth;
		$this->cal = $cal;
		$this->value = $value;
	}

	public function getOptimumCalculator() 
	{
		$input = $this->request->all();
		$idStudy = $input['idStudy'];

		$calMode = $this->cal->getCalculationMode($idStudy);
		$sdisableFields = $this->cal->disableFields($idStudy);
		$sdisableCalculate = $this->cal->disableCalculate($idStudy);

		$sdisableOptim = $sdisableNbOptim = $sdisableStorage = "";
		$sclassNbOptim = $sclassStorage = "";
		$sdisableTimeStep = $sdisablePrecision = "";
		$scheckOptim = $scheckStorage = 0;

		if ($sdisableFields == "") {
			$sdisableOptim = $sdisableFields;

			if ($calMode == $this->value->STUDY_OPTIMUM_MODE) {
				$sdisableNbOptim = $sdisableStorage = "disabled";
				$sclassNbOptim = $sclassStorage = "sous-titredisabled";
				$scheckOptim = 1;
				$scheckStorage = 0;

				if ($this->cal->getTimeStep($idStudy) == $this->value->VALUE_N_A) {
					$sdisableTimeStep = "disabled";
				} else {
					$sdisableTimeStep = "";
				}

				if ($this->cal->getPrecision($idStudy) == $this->value->VALUE_N_A) {
					$sdisablePrecision = "disabled";
				} else {
					$sdisablePrecision = "";
				}
			} else if ($calMode == $this->value->STUDY_SELECTED_MODE) {
				$sdisableNbOptim = $sdisableStorage = "";
				$sclassNbOptim = $sclassStorage = "sous-titre";
				$scheckOptim = 1;
				$scheckStorage = 0;
				$sdisableTimeStep = $sdisablePrecision = "";
			} else {
				$sdisableNbOptim = $sdisableStorage = "disabled";
				$sclassNbOptim = $sclassStorage = "sous-titredisabled";
				$scheckOptim = $scheckStorage = 0;
				$sdisableTimeStep = $sdisablePrecision = "";
			}

		} else {
			$sdisableOptim = $sdisableNbOptim = $sdisableStorage = "disabled";
			$sdisableTimeStep = $sdisablePrecision = "disabled";
			$sclassNbOptim = $sclassStorage = "sous-titredisabled";
			$scheckOptim = $scheckStorage = 0;
		}

		$epsilonTemp = $this->cal->getOptimErrorT();
		$epsilonEnth = $this->cal->getOptimErrorH();
		$nbOptimIter = $this->cal->getNbOptim();
		$timeStep = $this->cal->getTimeStep($idStudy);
		$precision = $this->cal->getPrecision($idStudy);
		$storagestep = $this->cal->getStorageStep();
		$hRadioOn = $this->cal->getHradioOn();
		$hRadioOff = $this->cal->getHradioOff();
		$maxIter = $this->cal->getMaxIter();
		$relaxCoef = $this->cal->getRelaxCoef();
		$vRadioOn = $this->cal->getVradioOn();
		$vRadioOff = $this->cal->getVradioOff();
		$tempPtSurf = $this->cal->getTempPtSurf();
		$tempPtIn = $this->cal->getTempPtIn();
		$tempPtBot = $this->cal->getTempPtBot();
		$tempPtAvg = $this->cal->getTempPtAvg();

		$select1 = array();
		$select2 = array();
		$select3 = array();
		$select4 = array();
		$select5 = array();
		$select6 = array();
		$select7 = array();
		$select8 = array();
		$select9 = array();
		$selecta = [
			'selected' => 0.1,
			'value' => 0.2,
			'label' => 0.3,
		];
		$selectb = [
			'selected' => 0.1,
			'value' => 0.2,
			'label' => 0.3,
		];

		array_push($select1, $selecta, $selectb);
		array_push($select2, $selecta, $selectb);
		array_push($select3, $selecta, $selectb);
		array_push($select4, $selecta, $selectb);
		array_push($select5, $selecta, $selectb);
		array_push($select6, $selecta, $selectb);
		array_push($select7, $selecta, $selectb);
		array_push($select8, $selecta, $selectb);
		array_push($select9, $selecta, $selectb);

		$array = [
			'sdisableFields' => $sdisableFields,
			'sdisableCalculate' => $sdisableCalculate,
			'scheckOptim' => $scheckOptim,
			'sdisableOptim' => $sdisableOptim,
			'sdisableNbOptim' => $sdisableNbOptim,
			'epsilonTemp' => $epsilonTemp,
			'epsilonEnth' => $epsilonEnth,
			'nbOptimIter' => $nbOptimIter,
			'sdisableTimeStep' => $sdisableTimeStep,
			'sdisablePrecision' => $sdisablePrecision,
			'sdisableStorage' => $sdisableStorage,
			'timeStep' => $timeStep,
			'precision' => $precision,
			'scheckStorage' => $scheckStorage,
			'storagestep' => $storagestep,
			'hRadioOn' => $hRadioOn,
			'hRadioOff' => $hRadioOff,
			'maxIter' => $maxIter,
			'relaxCoef' => $relaxCoef,
			'vRadioOn' => $vRadioOn,
			'vRadioOff' => $vRadioOff,
			'tempPtSurf' => $tempPtSurf,
			'tempPtIn' => $tempPtIn,
			'tempPtBot' => $tempPtBot,
			'tempPtAvg' => $tempPtAvg,
			'select1' => $select1,
			'select2' => $select2,
			'select3' => $select3,
			'select4' => $select4,
			'select5' => $select5,
			'select6' => $select6,
			'select7' => $select7,
			'select8' => $select8,
			'select9' => $select9,
		];

		return $array;
	}
}