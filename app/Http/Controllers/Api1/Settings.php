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
use App\Cryosoft\UnitsService;
use App\Cryosoft\MinMaxService;
use App\Models\MinMax;


class Settings extends Controller
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
	 * @var App\Cryosoft\UnitsService
	 */
    protected $units;
    
        /**
	 * @var App\Cryosoft\MinMaxService
	 */
	protected $minmax;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request, Auth $auth, UnitsService $units, MinMaxService $minmax)
    {
        $this->request = $request;
        $this->auth = $auth;
        $this->units = $units;
        $this->minmax = $minmax;
    }

    public function getMyMeshParamDef()
    {
        $meshParamDef = \App\Models\MeshParamDef::find($this->auth->user()->ID_USER);
        $meshParamDef->MESH_1_SIZE = $this->units->meshes($meshParamDef->MESH_1_SIZE, 1);
        $meshParamDef->MESH_2_SIZE = $this->units->meshes($meshParamDef->MESH_2_SIZE, 1);
        $meshParamDef->MESH_3_SIZE = $this->units->meshes($meshParamDef->MESH_3_SIZE, 1);

        return $meshParamDef;
    }

    public function saveMyMeshParamDef()
    {
        $input = $this->request->all();
        $dimension1 = floatval($input['dim1']);
        $dimension2 = floatval($input['dim2']);
        $dimension3 = floatval($input['dim3']);

        $checkValue1 = $this->minmax->checkMinMaxValue($dimension1, 1);
        $checkValue2 = $this->minmax->checkMinMaxValue($dimension2, 1);
        $checkValue3 = $this->minmax->checkMinMaxValue($dimension3, 1);

        if ( !$checkValue1 || !$checkValue1 ) {
            $mm = $this->minmax->getMinMaxMesh(1);
            return  [
                "Message" => "Value out of range in Dimension 1 (" . doubleval($mm->LIMIT_MIN) . " : " . doubleval($mm->LIMIT_MAX) . ")"
            ];
        }
        if ( !$checkValue2 || !$checkValue2 ) {
            $mm = $this->minmax->getMinMaxMesh(1);
            return  [
                "Message" => "Value out of range in Dimension 2 (" . doubleval($mm->LIMIT_MIN) . " : " . doubleval($mm->LIMIT_MAX) . ")"
            ];
        }
        if ( !$checkValue3 || !$checkValue3 ) {
            $mm = $this->minmax->getMinMaxMesh(1);
            return  [
                "Message" => "Value out of range in Dimension 3 (" . doubleval($mm->LIMIT_MIN) . " : " . doubleval($mm->LIMIT_MAX) . ")"
            ];
        }

        $meshParamDef = \App\Models\MeshParamDef::find($this->auth->user()->ID_USER);

        if ($meshParamDef != null) {
            if (isset($input['dim1'])) $meshParamDef->MESH_1_SIZE = $this->units->meshes($dimension1, 0);
            if (isset($input['dim2'])) $meshParamDef->MESH_2_SIZE = $this->units->meshes($dimension2, 0);
            if (isset($input['dim3'])) $meshParamDef->MESH_3_SIZE = $this->units->meshes($dimension3, 0);
            $meshParamDef->save();
        }

        return 1;
    }

    public function getMyTempRecordPtsDef()
    {
        $tempRecordPtsDef = \App\Models\TempRecordPtsDef::find($this->auth->user()->ID_USER);
        return $tempRecordPtsDef;
    }

    public function saveMyTempRecordPtsDef()
    {
        $input = $this->request->all();

        $axis1TopSurf = intval($input['axis1TopSurf']);
        $axis2TopSurf = intval($input['axis2TopSurf']);
        $axis3TopSurf = intval($input['axis3TopSurf']);

        $axis1IntPt = intval($input['axis1IntPt']);
        $axis2IntPt = intval($input['axis2IntPt']);
        $axis3IntPt = intval($input['axis3IntPt']);

        $axis1BotSurf = intval($input['axis1BotSurf']);
        $axis2BotSurf = intval($input['axis2BotSurf']);
        $axis3BotSurf = intval($input['axis3BotSurf']);

        $axis1PL23 = intval($input['axis1PL23']);
        $axis2PL13 = intval($input['axis2PL13']);
        $axis3PL12 = intval($input['axis3PL12']);

        $axis2Axe1 = intval($input['axis2Axe1']);
        $axis3Axe1 = intval($input['axis3Axe1']);

        $axis1Axe2 = intval($input['axis1Axe2']);
        $axis3Axe2 = intval($input['axis3Axe2']);

        $axis1Axe3 = intval($input['axis1Axe3']);
        $axis2Axe3 = intval($input['axis2Axe3']);

        $tempRecordPtsDef = \App\Models\TempRecordPtsDef::find($this->auth->user()->ID_USER);

        if ($tempRecordPtsDef != null) {

            if (isset($input['axis1TopSurf'])) $tempRecordPtsDef->AXIS1_PT_TOP_SURF_DEF = $axis1TopSurf;
            if (isset($input['axis2TopSurf'])) $tempRecordPtsDef->AXIS2_PT_TOP_SURF_DEF = $axis2TopSurf;
            if (isset($input['axis3TopSurf'])) $tempRecordPtsDef->AXIS3_PT_TOP_SURF_DEF = $axis3TopSurf;

            if (isset($input['axis1IntPt'])) $tempRecordPtsDef->AXIS1_PT_INT_PT_DEF = $axis1IntPt;
            if (isset($input['axis2IntPt'])) $tempRecordPtsDef->AXIS2_PT_INT_PT_DEF = $axis2IntPt;
            if (isset($input['axis3IntPt'])) $tempRecordPtsDef->AXIS3_PT_INT_PT_DEF = $axis3IntPt;

            if (isset($input['axis1BotSurf'])) $tempRecordPtsDef->AXIS1_PT_BOT_SURF_DEF = $axis1BotSurf;
            if (isset($input['axis2BotSurf'])) $tempRecordPtsDef->AXIS2_PT_BOT_SURF_DEF = $axis2BotSurf;
            if (isset($input['axis3BotSurf'])) $tempRecordPtsDef->AXIS3_PT_BOT_SURF_DEF = $axis3BotSurf;

            if (isset($input['axis1PL23'])) $tempRecordPtsDef->AXIS1_PL_2_3_DEF = $axis1PL23;
            if (isset($input['axis2PL13'])) $tempRecordPtsDef->AXIS2_PL_1_3_DEF = $axis2PL13;
            if (isset($input['axis3PL12'])) $tempRecordPtsDef->AXIS3_PL_1_2_DEF = $axis3PL12;

            if (isset($input['axis2Axe1'])) $tempRecordPtsDef->AXIS2_AX_1_DEF = $axis2Axe1;
            if (isset($input['axis3Axe1'])) $tempRecordPtsDef->AXIS3_AX_1_DEF = $axis3Axe1;

            if (isset($input['axis1Axe2'])) $tempRecordPtsDef->AXIS1_AX_2_DEF = $axis1Axe2;
            if (isset($input['axis3Axe2'])) $tempRecordPtsDef->AXIS3_AX_2_DEF = $axis3Axe2;

            if (isset($input['axis1Axe3'])) $tempRecordPtsDef->AXIS1_AX_3_DEF = $axis1Axe3;
            if (isset($input['axis2Axe3'])) $tempRecordPtsDef->AXIS2_AX_3_DEF = $axis2Axe3;

            $tempRecordPtsDef->save();
        }
    }

    public function getMyCalculationParametersDef()
    {
        $calculationparametersdef = \App\Models\CalculationParametersDef::find($this->auth->user()->ID_USER);
        $calculationparametersdef->STOP_TOP_SURF_DEF = $this->units->prodTemperature($calculationparametersdef->STOP_TOP_SURF_DEF, 1);
        $calculationparametersdef->STOP_INT_DEF = $this->units->prodTemperature($calculationparametersdef->STOP_INT_DEF, 1);
        $calculationparametersdef->STOP_BOTTOM_SURF_DEF = $this->units->prodTemperature($calculationparametersdef->STOP_BOTTOM_SURF_DEF, 1);
        $calculationparametersdef->STOP_AVG_DEF = $this->units->prodTemperature($calculationparametersdef->STOP_AVG_DEF, 1);
        $calculationparametersdef->TIME_STEP_DEF = $this->units->time($calculationparametersdef->TIME_STEP_DEF, 1);

        return $calculationparametersdef;
    }

    public function saveMyCalculationParametersDef()
    {
        $input = $this->request->all();
        $ishorizScanDef = intval($input['ishorizScanDef']);

        $maxIter = intval($input['maxIter']);
        $relaxCoef = intval($input['relaxCoef']);
        $precision = intval($input['precision']);

        $isVertScanDef = intval($input['isVertScanDef']);

        $stopTopSurfDef = intval($input['stopTopSurfDef']);
        $stopIntDef = intval($input['stopIntDef']);
        $stopBottomSurfDef = intval($input['stopBottomSurfDef']);
        $stopAvgDef = intval($input['stopAvgDef']);

        $isStudyAlphaTopFixedDef = intval($input['isStudyAlphaTopFixedDef']);
        $isStudyAlphaBottomFixedDef = intval($input['isStudyAlphaBottomFixedDef']);
        $isStudyAlphaLeftFixedDef = intval($input['isStudyAlphaLeftFixedDef']);
        $isStudyAlphaRightFixedDef = intval($input['isStudyAlphaRightFixedDef']);
        $isStudyAlphaFrontFixedDef = intval($input['isStudyAlphaFrontFixedDef']);
        $isStudyAlphaRearFixedDef = intval($input['isStudyAlphaRearFixedDef']);

        $studyAlphaTopDef = floatval($input['studyAlphaTopDef']);
        $studyAlphaBottomDef = floatval($input['studyAlphaBottomDef']);
        $studyAlphaLeftDef = floatval($input['studyAlphaLeftDef']);
        $studyAlphaRightDef = floatval($input['studyAlphaRightDef']);
        $studyAlphaFrontDef = floatval($input['studyAlphaFrontDef']);
        $studyAlphaRearDef = floatval($input['studyAlphaRearDef']);

        $storageStepDef = intval($input['storageStepDef']);
        $precisionLogStepDef = floatval($input['precisionLogStepDef']);
        $timeStepDef = intval($input['timeStepDef']);



        $checkMaxIter = $this->minmax->checkMinMaxValue($maxIter, 1010);
        if ( !$checkMaxIter || !$checkMaxIter ) {
            $mm = $this->minmax->getMinMaxProdTemperature(1010);
            return  [
                "Message" => "Value out of range in Max of iterations (" . doubleval($mm->LIMIT_MIN) . " : " . doubleval($mm->LIMIT_MAX) . ")"
            ];
        }
        $checkRelaxCoef = $this->minmax->checkMinMaxValue($relaxCoef, 1012);
        if ( !$checkRelaxCoef || !$checkRelaxCoef ) {
            $mm = $this->minmax->getMinMaxProdTemperature(1012);
            return  [
                "Message" => "Value out of range in Coef. of relaxation (" . doubleval($mm->LIMIT_MIN) . " : " . doubleval($mm->LIMIT_MAX) . ")"
            ];
        }
        $checkPrecision = $this->minmax->checkMinMaxValue($precision, 1019);
        if ( !$checkPrecision || !$checkPrecision ) {
            $mm = $this->minmax->getMinMaxProdTemperature(1019);
            return  [
                "Message" => "Value out of range in Precision of numerical modelling (" . doubleval($mm->LIMIT_MIN) . " : " . doubleval($mm->LIMIT_MAX) . ")"
            ];
        }

        $checkTopSurfDef = $this->minmax->checkMinMaxValue($stopTopSurfDef, 1014);
        $checkIntDef = $this->minmax->checkMinMaxValue($stopIntDef, 1015);
        $checkBottomSurfDef = $this->minmax->checkMinMaxValue($stopBottomSurfDef, 1016);
        $checkAvgDef = $this->minmax->checkMinMaxValue($stopAvgDef, 1017);
        $checkTimeStepDef = $this->minmax->checkMinMaxValue($timeStepDef, 1013);



        $calculationparametersdef = \App\Models\CalculationParametersDef::find($this->auth->user()->ID_USER);

        if ($calculationparametersdef != null) {
            if (isset($input['ishorizScanDef'])) $calculationparametersdef->HORIZ_SCAN_DEF = $ishorizScanDef;
            if (isset($input['maxIter'])) $calculationparametersdef->MAX_IT_NB_DEF = $maxIter;

            if (isset($input['relaxCoef'])) $calculationparametersdef->RELAX_COEFF_DEF = $relaxCoef;
            if (isset($input['precision'])) $calculationparametersdef->PRECISION_REQUEST_DEF = $precision;
            if (isset($input['isVertScanDef'])) $calculationparametersdef->VERT_SCAN_DEF = $isVertScanDef;

            if (isset($input['stopTopSurfDef'])) $calculationparametersdef->STOP_TOP_SURF_DEF = $this->units->prodTemperature($stopTopSurfDef, 0);
            if (isset($input['stopIntDef'])) $calculationparametersdef->STOP_INT_DEF = $this->units->prodTemperature($stopIntDef, 0);
            if (isset($input['stopBottomSurfDef'])) $calculationparametersdef->STOP_BOTTOM_SURF_DEF = $this->units->prodTemperature($stopBottomSurfDef, 0);
            if (isset($input['stopAvgDef'])) $calculationparametersdef->STOP_AVG_DEF = $this->units->prodTemperature($stopAvgDef, 0);

            if (isset($input['isStudyAlphaTopFixedDef'])) $calculationparametersdef->STUDY_ALPHA_TOP_FIXED_DEF = $isStudyAlphaTopFixedDef;
            if (isset($input['isStudyAlphaBottomFixedDef'])) $calculationparametersdef->STUDY_ALPHA_BOTTOM_FIXED_DEF = $isStudyAlphaBottomFixedDef;
            if (isset($input['isStudyAlphaLeftFixedDef'])) $calculationparametersdef->STUDY_ALPHA_LEFT_FIXED_DEF = $isStudyAlphaLeftFixedDef;
            if (isset($input['isStudyAlphaRightFixedDef'])) $calculationparametersdef->STUDY_ALPHA_RIGHT_FIXED_DEF = $isStudyAlphaRightFixedDef;
            if (isset($input['isStudyAlphaFrontFixedDef'])) $calculationparametersdef->STUDY_ALPHA_FRONT_FIXED_DEF = $isStudyAlphaFrontFixedDef;
            if (isset($input['isStudyAlphaRearFixedDef'])) $calculationparametersdef->STUDY_ALPHA_REAR_FIXED_DEF = $isStudyAlphaRearFixedDef;

            if (isset($input['studyAlphaTopDef'])) $calculationparametersdef->STUDY_ALPHA_TOP_DEF = $studyAlphaTopDef;
            if (isset($input['studyAlphaBottomDef'])) $calculationparametersdef->STUDY_ALPHA_BOTTOM_DEF = $studyAlphaBottomDef;
            if (isset($input['studyAlphaLeftDef'])) $calculationparametersdef->STUDY_ALPHA_LEFT_DEF = $studyAlphaLeftDef;
            if (isset($input['studyAlphaRightDef'])) $calculationparametersdef->STUDY_ALPHA_RIGHT_DEF = $studyAlphaRightDef;
            if (isset($input['studyAlphaFrontDef'])) $calculationparametersdef->STUDY_ALPHA_FRONT_DEF = $studyAlphaFrontDef;
            if (isset($input['studyAlphaRearDef'])) $calculationparametersdef->STUDY_ALPHA_REAR_DEF = $studyAlphaRearDef;

            if (isset($input['storageStepDef'])) $calculationparametersdef->STORAGE_STEP_DEF = $storageStepDef;
            if (isset($input['precisionLogStepDef'])) $calculationparametersdef->PRECISION_LOG_STEP_DEF = $precisionLogStepDef;

            if (isset($input['timeStepDef'])) $calculationparametersdef->TIME_STEP_DEF = $this->units->time($timeStepDef->TIME_STEP_DEF, 0);

            $calculationparametersdef->save();
        }
    }
}