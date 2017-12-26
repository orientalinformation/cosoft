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
use App\Cryosoft\EquipmentsService;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Auth\Factory as Auth;
use Illuminate\Http\Request;
use App\Models\StudyEquipment;
use App\Kernel\KernelService;


class Calculator extends Controller 
{
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
     * @var App\Kernel\KernelService
     */
    protected $kernel;

   	/**
     * @var App\Cryosoft\EquipmentsService
     */
    protected $equipment;

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct(Request $request, Auth $auth, CalculateService $cal, ValueListService $value, KernelService $kernel, EquipmentsService $equipment) 
	{
		$this->request = $request;
		$this->auth = $auth;
		$this->cal = $cal;
		$this->value = $value;
		$this->kernel = $kernel;
		$this->equipment = $equipment;
	}

	public function getOptimumCalculator() 
	{
		$input = $this->request->all();
		$idStudy = $input['idStudy'];
		$idStudyEquipment = null;

		if (isset($input['idStudyEquipment'])) {
			$idStudyEquipment = $input['idStudyEquipment'];
		}

		$calMode = $this->cal->getCalculationMode($idStudy);
		$sdisableFields = $this->cal->disableFields($idStudy);
		$sdisableCalculate = $this->cal->disableCalculate($idStudy);

		$sdisableOptim = $sdisableNbOptim = $sdisableStorage = "";
		$sclassNbOptim = $sclassStorage = "";
		$sdisableTimeStep = $sdisablePrecision = "";
		$scheckOptim = $scheckStorage = 0;
		$isBrainCalculator = 0;

		if ($idStudyEquipment != null) {
			$isBrainCalculator = 1;
		}

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

		$select1 = $this->cal->getOption($idStudy, "X", "TOP");
		$select2 = $this->cal->getOption($idStudy, "Y", "TOP");
        $select3 = $this->cal->getOption($idStudy, "Z", "TOP");
        $select4 = $this->cal->getOption($idStudy, "X", "INT");
        $select5 = $this->cal->getOption($idStudy, "Y", "INT");
        $select6 = $this->cal->getOption($idStudy, "Z", "INT");
        $select7 = $this->cal->getOption($idStudy, "X", "BOT");
        $select8 = $this->cal->getOption($idStudy, "Y", "BOT");
        $select9 = $this->cal->getOption($idStudy, "Z", "BOT");

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
			'isBrainCalculator' => $isBrainCalculator,
		];

		return $array;
	}

	public function startCalculate()
	{
		$input = $this->request->all();

		$idStudy = null;
		$idStudyEquipment = null;

		if (isset($input['idStudy'])) {
			$idStudy = $input['idStudy'];
		}

		if (isset($input['idStudyEquipment'])) {
			$idStudyEquipment = $input['idStudyEquipment'];
		}

		$calMode = $this->cal->getCalculationMode($idStudy);
	}

	public function startStudyCalculation($idStudy)
	{
		$conf = $this->kernel->getConfig($this->auth->user()->ID_USER, $idStudy, -1);
		$this->kernel->getKernelObject('StudyCleaner')->SCStudyClean($conf, 50);

		$studyEquipments = StudyEquipment::where('ID_STUDY', $idStudy)->get();

		

		$results = [];
		
		if (count($studyEquipments) > 0) {
			for ($i = 0; $i < count($studyEquipments); $i++) { 
				$idStudyEquipment = $studyEquipments[$i]->ID_STUDY_EQUIPMENTS;
				$capability = $studyEquipments[$i]->CAPABILITIES;

				$conf = $this->kernel->getConfig($this->auth->user()->ID_USER, $idStudy, $idStudyEquipment);
				$this->kernel->getKernelObject('DimMatCalculator')->DMCCalculation($conf, 1);

				if ($this->equipment->getCapability($capability, 16)) {
					array_push($results, $this->startConsumptionEconomic($idStudy, $idStudyEquipment));
				}
			}
		}
		return $results;
	}

	// public function startDimMat($idStudy, $IdEquipment)
	// {
	// 	$error = 0;
	// 	$conf = $this->kernel->getConfig($this->auth->user()->ID_USER, $idStudy, $IdEquipment);
	// 	$this->kernel->getKernelObject('DimMatCalculator')->DMCCalculation($conf, 10);
	// }

	public function startConsumptionEconomic($idStudy, $idStudyEquipment)
	{
		$conf = $this->kernel->getConfig($this->auth->user()->ID_USER, $idStudy, $idStudyEquipment);
		return $this->kernel->getKernelObject('ConsumptionCalculator')->COCConsumptionCalculation($conf);
	}
}