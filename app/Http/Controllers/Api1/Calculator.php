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

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Factory as Auth;
use App\Cryosoft\CalculateService;

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
	* Create a new controller instance.
	*
	* @return void
	*/
	public function __construct(Request $request, Auth $auth, CalculateService $cal)
	{
		$this->request = $request;
		$this->auth = $auth;
		$this->cal = $cal;
	}

	public function getOptimumCalculator()
	{
		$input = $this->request->all();
		$idStudy = $input['idStudy'];

		$sdisableFields = 0;
		$sdisableCalculate = 1;
		$scheckOptim = 0.1;
		$sdisableOptim = 0.2;
		$sdisableNbOptim = 0.2;
		$epsilonTemp = 0.1;
		$epsilonEnth = 0.1;
		$nbOptimIter = 0.2;
		$sdisableTimeStep = 0.1;
		$sdisablePrecision = 0.1;
		$sdisableStorage = 0.2;
		$timeStep = 0.2;
		$precision = 0.2;
		$scheckStorage = 0.1;
		$storagestep = 0.2;
		$hRadioOn = 0;
		$hRadioOff = 1;
		$maxIter = 0.1;
		$relaxCoef = 0.1;
		$vRadioOn = 0.2;
		$vRadioOff = 0.2;
		$tempPtSurf = 0.1;
		$tempPtIn = 0.2;
		$tempPtBot = 0.1;
		$tempPtAvg = 0.1;

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
			'label' => 0.3
		];
		$selectb = [
			'selected' => 0.1, 
			'value' => 0.2,
			'label' => 0.3
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
			'storagestep' =>  $storagestep,
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
			'select9' => $select9
		];

		return $array;
	}
}