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
namespace App\Cryosoft;

use Illuminate\Contracts\Auth\Factory as Auth;
use App\Models\StudyEquipment;
use App\Models\Study;
use App\Models\MinMax;
use App\Cryosoft\ValueListService;
use App\Cryosoft\UnitsConverterService;
use App\Models\CalculationParameter;
use App\Models\CalculationParametersDef;

class CalculateService
{
	/**
   * @var Illuminate\Contracts\Auth\Factory
   */
  protected $auth;

  /**
   * @var App\Cryosoft\ValueListService
   */
  protected $value;

 	/**
   * @var App\Cryosoft\UnitsConverterService
   */
  protected $convert;

  /**
   * @var App\Models\CalculationParametersDef
   */
  protected $calParametersDef;

	public function __construct(\Laravel\Lumen\Application $app) 
	{
    $this->app = $app;
    $this->auth = $app['Illuminate\\Contracts\\Auth\\Factory'];
    $this->value = $app['App\\Cryosoft\\ValueListService'];
    $this->convert = $app['App\\Cryosoft\\UnitsConverterService'];
		$this->calParametersDef = $this->getCalculationParametersDef();
	}

	public function getCalculationMode($idStudy)
	{
		$calMode = 0;
		$study = Study::select('CALCULATION_MODE')->where('ID_STUDY', $idStudy)->get();

		if ($study != null) $calMode = $study->CALCULATION_MODE;

		return $calMode;
	}

	public function disableFields($idStudy)
	{
    $disabledField = "";

    $study = Study::where('ID_STUDY', $idStudy)->get();

    if ($study != null) {
        $studyOwnerUserID = $study->ID_USER;
        $userProfileID = $this->auth->user()->USERPRIO;
        $userID = $this->auth->user()->ID_USER;

        if (($userProfileID > $this->value->PROFIL_EXPERT) || ($studyOwnerUserID != $userID)) $disabledField = "disabled";
    }

		return $disabledField;
  }

  public function disableCalculate($idStudy) 
  {
    $disabledField = "";

    $study = Study::where('ID_STUDY', $idStudy)->get();

    if ($study != null) {
        $studyOwnerUserID = $study->ID_USER;
        $userProfileID = $this->auth->user()->USERPRIO;
        $userID = $this->auth->user()->ID_USER;

        if ($studyOwnerUserID != $userID) $disabledField = "disabled";
    }

		return $disabledField;
  }

  public function getOptimErrorT()
  {
  	$mmErrorT = 0.0;
  	$minMax = $this->getMinMax(1132);
    $mmErrorT =  $this->convert->unitConvert($this->value->TEMPERATURE, $minMax->DEFAULT_VALUE);
  	return $mmErrorT;
  }

  public function getOptimErrorH()
  {
  	$mmErrorH = 0.0;
  	$minMax = $this->getMinMax(1131);
    $mmErrorH =  $this->convert->unitConvert($this->value->TEMPERATURE, $minMax->DEFAULT_VALUE);
  	return $mmErrorH;
  }

  public function getNbOptim()
  {
  	$mmNbOptim = 0.0;
  	$minMax = $this->getMinMax(1130);
    $mmNbOptim =  $this->convert->unitConvert($this->value->TEMPERATURE, $minMax->DEFAULT_VALUE);
  	return $mmNbOptim;
  }

  public function getMinMax($limitItem)
  {
    return MinMax::where('LIMIT_ITEM', $limitItem)->get();
  }

 	public function getTimeStep($idStudy) 
  {
  	$timeStep = -1.0;
    $bOneTimeStep = true;

    $studyEquipments  = $this->getCalculableStudyEquipments($idStudy);

    foreach ($studyEquipments as $sEquipment) {
			$calParamester = CalculationParameters::where('ID_CALC_PARAMS', $sEquipment->ID_CALC_PARAMS)->get();
			if ($timeStep != $calParamester->TIME_STEP) {
				if ($timeStep == -1.0) {
            $timeStep = $calParamester->TIME_STEP;
        } else {
            $bOneTimeStep = false;
        }
			}			
    }

  	if ($bOneTimeStep) {
        return $this->convert->unitConvert($this->value->TIME, $timeStep, 3);
    }

    return "N.A.";
  }

  public function getPrecision($idStudy)
  {
  	$precision = -1.0;
    $bOnePrecision = true;

  	$studyEquipments = $this->getCalculableStudyEquipments($idStudy);

		foreach ($studyEquipments as $sEquipment) {
			$calParamester = CalculationParameters::where('ID_CALC_PARAMS', $sEquipment->ID_CALC_PARAMS)->get();

			if ($precision != $calParamester->PRECISION_REQUEST {
				if ($precision == -1.0) {
	          $precision = $calParamester->PRECISION_REQUEST;
	      } else {
	          $bOnePrecision = false;
	      }
			}
		}

  	if ($bOnePrecision) {
        return $this->convert->unitConvert($this->value->TIME, $precision, 3);
    }

    return "N.A.";
  }

  public function getStorageStep()
  {
  	$lfStep = 0.0;

  	if ($this->calParametersDef != null) {
  		$lfStep = $this->calParametersDef->STORAGE_STEP_DEF * $this->calParametersDef->TIME_STEP_DEF;
  	}

  	return $this->convert->unitConvert($this->value->TIME, $lfStep, 1);
  }

  public function getCalculableStudyEquipments($idStudy) 
  {
  	$studyEquipments = StudyEquipment::where(
  		[['ID_STUDY', '=', $idStudy], ['RUN_CALCULATE', '=', 1], ['BRAIN_TYPE', '=', 0]])->get();																		
 		return $studyEquipments;
  }

  public function getCalculationParametersDef()
  {
  	$calParametersDef = CalculationParametersDef::find($this->auth->user()->ID_USER);

  	return $calParametersDef;
  }

  public function getVradioOn() 
  {
    $etat = "";

    if ($this->calParametersDef->VERT_SCAN_DEF) {
        $etat = "checked";
    }
    return $etat;
  }

  public function getVradioOff()
  {
    $etat = "";

    if (!$this->calParametersDef->VERT_SCAN_DEF) {
        $etat = "checked";
    }
    return $etat;
  }

  public function getHradioOn() 
  {
    $etat = "";
    if ($this->calParametersDef->HORIZ_SCAN_DEF) {
        $etat = "checked";
    }
    return $etat;
  }

  public function getHradioOff() 
  {
    $etat = "";
    if (!$this->calParametersDef->HORIZ_SCAN_DEF) {
        $etat = "checked";
    }
    return $etat;
  }

  public function getMaxIter() 
  {
    return $this->convert->convertCalculator($this->calParametersDef->MAX_IT_NB_DEF, 1.0, 0.0, 0);
  }

  public function getRelaxCoef() 
  {	
    return $this->convert->convertCalculator($this->calParametersDef->RELAX_COEFF_DEF, 1.0, 0.0);
  }

  public function getTempPtSurf() 
  {
    return $this->convert->unitConvert($this->value->TEMPERATURE, $this->calParametersDef->STOP_TOP_SURF_DEF, 2);
  }

  public function getTempPtIn() 
  {
    return $this->convert->unitConvert($this->value->TEMPERATURE, $this->calParametersDef->STOP_INT_DEF, 2);
  }

  public function getTempPtBot() 
  {
    return $this->convert->unitConvert($this->value->TEMPERATURE, $this->calParametersDef->STOP_BOTTOM_SURF_DEF, 2);
  }

  public function getTempPtAvg() 
  {
    return $this->convert->unitConvert($this->value->TEMPERATURE, $this->calParametersDef->STOP_AVG_DEF, 2);
  }
}