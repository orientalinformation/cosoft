<?php

namespace App\Http\Controllers\Api1;

use DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Factory as Auth;
use App\Cryosoft\UnitsConverterService;
use App\Cryosoft\ValueListService;
use App\Models\Report;
use App\Models\StudyEquipment;
use App\Models\ProductElmt;
use App\Models\MeshPosition;


class Reports extends Controller
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
     * @var App\Cryosoft\UnitsConverterService
     */
    protected $convert;

    /**
     * @var App\Cryosoft\ValueListService
     */
    protected $value;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request, Auth $auth, UnitsConverterService $convert, ValueListService $value)
    {
        $this->request = $request;
        $this->auth = $auth;
        $this->convert = $convert;
        $this->value = $value;
    }

    public function getReport($id)
    {
        $report = Report::where('ID_STUDY', $id)->first();
        $report->consumptionSymbol = $this->convert->consumptionSymbolUser(2, 1);
        $report->isSizingValuesChosen = ($report->SIZING_VALUES & 1);
        $report->isSizingValuesMax = ($report->SIZING_VALUES & 16);
        $studyEquip = StudyEquipment::where('ID_STUDY', $id)->where('BRAIN_TYPE', 4)->get();

        if (count($studyEquip) > 0) {
            $report->isThereCompleteNumericalResults = true;
        } else {
            $report->isThereCompleteNumericalResults = false;
        }

        $productElmt = ProductElmt::where('ID_STUDY', $id)->first();
        $report->productElmt = $productElmt;
        $report->temperatureSymbol = $this->convert->temperatureSymbolUser();
        $report->CONTOUR2D_TEMP_STEP = doubleval($report->CONTOUR2D_TEMP_STEP);
        $report->CONTOUR2D_TEMP_MIN = doubleval($this->convert->prodTemperature($report->CONTOUR2D_TEMP_MIN));
        $report->CONTOUR2D_TEMP_MAX = doubleval($this->convert->prodTemperature($report->CONTOUR2D_TEMP_MAX));
        $borne = $this->getReportTemperatureBorne($id); 
        $report->refContRep2DTempMinRef = $this->convert->prodTemperature($borne[0]->MIN_TEMP);
        $report->refContRep2DTempMaxRef = $this->convert->prodTemperature($borne[0]->MAX_TEMP);
        $pasTemp = $this->calculatePasTemp($report->refContRep2DTempMinRef, $report->refContRep2DTempMaxRef, true);

        $report->refContRep2DTempMinRef = doubleval($pasTemp['dTmin']);
        $report->refContRep2DTempMaxRef = doubleval($pasTemp['dTMax']);
        $report->refContRep2DTempStepRef = doubleval($pasTemp['dpas']);


        return $report;
    }

    public function getReportTemperatureBorne($id)
    {
        return DB::select("SELECT MIN( TRD.TEMP ) AS MIN_TEMP, MAX( TRD.TEMP ) AS MAX_TEMP FROM TEMP_RECORD_DATA AS TRD 
        JOIN (SELECT REC_POS.ID_REC_POS FROM RECORD_POSITION AS REC_POS JOIN (SELECT REC_POS1.ID_STUDY_EQUIPMENTS, 
        MAX(REC_POS1.RECORD_TIME) AS RECORD_TIME FROM RECORD_POSITION AS REC_POS1 
        JOIN STUDY_EQUIPMENTS AS STD_EQP ON REC_POS1.ID_STUDY_EQUIPMENTS = STD_EQP.ID_STUDY_EQUIPMENTS 
        WHERE STD_EQP.ID_STUDY = " . $id . " GROUP BY REC_POS1.ID_STUDY_EQUIPMENTS) AS REC_POS2 
        ON REC_POS.ID_STUDY_EQUIPMENTS = REC_POS2.ID_STUDY_EQUIPMENTS AND REC_POS.RECORD_TIME = REC_POS2.RECORD_TIME) AS REC_POS3 ON TRD.ID_REC_POS = REC_POS3.ID_REC_POS");
    }

    public function calculatePasTemp($lfTmin, $lfTMax, $auto)
    {
        $dpas = 0;
        $dnbpas = 0;
        $dTmin = intval(floor($lfTmin));
        $dTMax = intval(ceil($lfTMax));

        if ($auto) {
            $dpas = intval(floor(abs($dTMax - $dTmin) / 14) - 1);
        }
        do {
            $dpas++;
            if ($dpas != 0) {

                while ($dTmin % $dpas != 0) {
                    $dTmin--;
                }
                while ($dTMax % $dpas != 0) {
                    $dTMax++;
                }
                $dnbpas = abs($dTMax - $dTmin) / $dpas;    
            }
        } while ($dnbpas > 16);

        return [
            'dTmin' => $dTmin,
            'dTMax' => $dTMax,
            'dpas' => $dpas
        ];
    }

    public function initListPoints($id, $axe)
    {
        return MeshPosition::join('product_elmt', 'mesh_position.ID_PRODUCT_ELMT', '=', 'product_elmt.ID_PRODUCT_ELMT')
        ->join('product', 'product_elmt.ID_PROD' , '=', 'product.ID_PROD')
        ->where('product.ID_STUDY', $id)->where('MESH_AXIS', $axe)->distinct()->orderBy('MESH_AXIS_POS', 'ASC')->get();
    }

    public function getMeshAxisPos($id) 
    {
        $list1 = $this->initListPoints($id, 1);
        $list2 = $this->initListPoints($id, 2);
        $list3 = $this->initListPoints($id, 3);
        
        foreach ($list1 as $key) {
            $key->meshAxisPosValue = floatval($this->convert->meshes($key->MESH_AXIS_POS, $this->value->MESH_CUT));
        }
        foreach ($list2 as $key) {
            $key->meshAxisPosValue = floatval($this->convert->meshes($key->MESH_AXIS_POS, $this->value->MESH_CUT));
        }
        foreach ($list3 as $key) {
            $key->meshAxisPosValue = floatval($this->convert->meshes($key->MESH_AXIS_POS, $this->value->MESH_CUT));
        }

        return [
            'axis1' => $list1,
            'axis2' => $list2,
            'axis3' => $list3
        ];
    }

    public function saveReport($id)
    {
        $input = $this->request->all();

        if (isset($input['DEST_NAME'])) $DEST_NAME = $input['DEST_NAME'];
        
        if (isset($input['DEST_SURNAME'])) $DEST_SURNAME = $input['DEST_SURNAME'];

        if (isset($input['DEST_FUNCTION'])) $DEST_FUNCTION = $input['DEST_FUNCTION'];

        if (isset($input['DEST_COORD'])) $DEST_COORD = $input['DEST_COORD'];

        if (isset($input['WRITER_NAME'])) $WRITER_NAME = $input['WRITER_NAME'];
        
        if (isset($input['WRITER_SURNAME'])) $WRITER_SURNAME = $input['WRITER_SURNAME'];

        if (isset($input['WRITER_FUNCTION'])) $WRITER_FUNCTION = $input['WRITER_FUNCTION'];

        if (isset($input['WRITER_COORD'])) $WRITER_COORD = $input['WRITER_COORD'];

        if (isset($input['CUSTOMER_LOGO'])) $CUSTOMER_LOGO = $input['CUSTOMER_LOGO'];

        if (isset($input['PHOTO_PATH'])) $PHOTO_PATH = $input['PHOTO_PATH'];

        if (isset($input['REPORT_COMMENT'])) $REPORT_COMMENT = $input['REPORT_COMMENT'];

        if (isset($input['PROD_LIST'])) $PROD_LIST = $input['PROD_LIST'];

        if (isset($input['PROD_3D'])) $PROD_3D = $input['PROD_3D'];

        if (isset($input['EQUIP_LIST'])) $EQUIP_LIST = $input['EQUIP_LIST'];

        if (isset($input['REP_CUSTOMER'])) $REP_CUSTOMER = $input['REP_CUSTOMER'];

        if (isset($input['PACKING'])) $PACKING = $input['PACKING'];

        if (isset($input['PIPELINE'])) $PIPELINE = $input['PIPELINE'];

        if (isset($input['ASSES_CONSUMP'])) $ASSES_CONSUMP = $input['ASSES_CONSUMP'];

        if (isset($input['CONS_SPECIFIC'])) $CONS_SPECIFIC = $input['CONS_SPECIFIC'];

        if (isset($input['CONS_OVERALL'])) $CONS_OVERALL = $input['CONS_OVERALL'];

        if (isset($input['CONS_TOTAL'])) $CONS_TOTAL = $input['CONS_TOTAL'];

        if (isset($input['CONS_HOUR'])) $CONS_HOUR = $input['CONS_HOUR'];

        if (isset($input['CONS_DAY'])) $CONS_DAY = $input['CONS_DAY'];

        if (isset($input['CONS_WEEK'])) $CONS_WEEK = $input['CONS_WEEK'];

        if (isset($input['CONS_MONTH'])) $CONS_MONTH = $input['CONS_MONTH'];

        if (isset($input['CONS_YEAR'])) $CONS_YEAR = $input['CONS_YEAR'];

        if (isset($input['CONS_EQUIP'])) $CONS_EQUIP = $input['CONS_EQUIP'];

        if (isset($input['CONS_PIPE'])) $CONS_PIPE = $input['CONS_PIPE'];

        if (isset($input['CONS_TANK'])) $CONS_TANK = $input['CONS_TANK'];

        if (isset($input['REP_CONS_PIE'])) $REP_CONS_PIE = $input['REP_CONS_PIE'];

        if (isset($input['SIZING_VALUES'])) $SIZING_VALUES = $input['SIZING_VALUES'];

        if (isset($input['SIZING_GRAPHE'])) $SIZING_GRAPHE = $input['SIZING_GRAPHE'];

        if (isset($input['SIZING_TR'])) $SIZING_TR = $input['SIZING_TR'];

        if (isset($input['ENTHALPY_G'])) $ENTHALPY_G = $input['ENTHALPY_G'];

        if (isset($input['ENTHALPY_V'])) $ENTHALPY_V = $input['ENTHALPY_V'];

        if (isset($input['ENTHALPY_SAMPLE'])) $ENTHALPY_SAMPLE = $input['ENTHALPY_SAMPLE'];

        if (isset($input['ISOCHRONE_G'])) $ISOCHRONE_G = $input['ISOCHRONE_G'];

        if (isset($input['ISOCHRONE_V'])) $ISOCHRONE_V = $input['ISOCHRONE_V'];

        if (isset($input['ISOCHRONE_SAMPLE'])) $ISOCHRONE_SAMPLE = $input['ISOCHRONE_SAMPLE'];

        if (isset($input['ISOVALUE_G'])) $ISOVALUE_G = $input['ISOVALUE_G'];

        if (isset($input['ISOVALUE_V'])) $ISOVALUE_V = $input['ISOVALUE_V'];

        if (isset($input['ISOVALUE_SAMPLE'])) $ISOVALUE_SAMPLE = $input['ISOVALUE_SAMPLE'];

        if (isset($input['CONTOUR2D_G'])) $CONTOUR2D_G = $input['CONTOUR2D_G'];

        if (isset($input['CONTOUR2D_TEMP_STEP'])) $CONTOUR2D_TEMP_STEP = $input['CONTOUR2D_TEMP_STEP'];

        if (isset($input['CONTOUR2D_TEMP_MIN'])) $CONTOUR2D_TEMP_MIN = $input['CONTOUR2D_TEMP_MIN'];

        if (isset($input['CONTOUR2D_TEMP_MAX'])) $CONTOUR2D_TEMP_MAX = $input['CONTOUR2D_TEMP_MAX'];

        if (isset($input['POINT1_X'])) $POINT1_X = $input['POINT1_X'];

        if (isset($input['POINT1_Y'])) $POINT1_Y = $input['POINT1_Y'];

        if (isset($input['POINT1_Z'])) $POINT1_Z = $input['POINT1_Z'];

        if (isset($input['POINT2_X'])) $POINT2_X = $input['POINT2_X'];

        if (isset($input['POINT2_Y'])) $POINT2_Y = $input['POINT2_Y'];

        if (isset($input['POINT2_Z'])) $POINT2_Z = $input['POINT2_Z'];

        if (isset($input['POINT3_X'])) $POINT3_X = $input['POINT3_X'];

        if (isset($input['POINT3_Y'])) $POINT3_Y = $input['POINT3_Y'];

        if (isset($input['POINT3_Z'])) $POINT3_Z = $input['POINT3_Z'];

        if (isset($input['AXE1_X'])) $AXE1_X = $input['AXE1_X'];

        if (isset($input['AXE1_Y'])) $AXE1_Y = $input['AXE1_Y'];

        if (isset($input['AXE2_X'])) $AXE2_X = $input['AXE2_X'];

        if (isset($input['AXE2_Z'])) $AXE2_Z = $input['AXE2_Z'];

        if (isset($input['AXE3_Y'])) $AXE3_Y = $input['AXE3_Y'];

        if (isset($input['AXE3_Z'])) $AXE3_Z = $input['AXE3_Z'];

        if (isset($input['PLAN_X'])) $PLAN_X = $input['PLAN_X'];

        if (isset($input['PLAN_Y'])) $PLAN_Y = $input['PLAN_Y'];

        if (isset($input['PLAN_Z'])) $PLAN_Z = $input['PLAN_Z'];

        if (isset($input['ID_STUDY'])) $ID_STUDY = $input['ID_STUDY'];

        if (isset($input['ASSES_ECO'])) $ASSES_ECO = $input['ASSES_ECO'];

        // $report = Report::where('ID_STUDY', $id)->first();
        $report = new Report();

        $report->ID_STUDY = $ID_STUDY;
        $report->DEST_NAME = $DEST_NAME;
        $report->DEST_SURNAME = $DEST_SURNAME;
        $report->DEST_FUNCTION = $DEST_FUNCTION;
        $report->DEST_COORD = $DEST_COORD;
        $report->WRITER_NAME = $WRITER_NAME;
        $report->WRITER_SURNAME = $WRITER_SURNAME;
        $report->WRITER_FUNCTION = $WRITER_FUNCTION;
        $report->WRITER_COORD = $WRITER_COORD;
        $report->CUSTOMER_LOGO = $CUSTOMER_LOGO;
        $report->PHOTO_PATH = $PHOTO_PATH;
        $report->REPORT_COMMENT = $REPORT_COMMENT;
        $report->PROD_LIST = $PROD_LIST;
        $report->PROD_3D = $PROD_3D;
        $report->EQUIP_LIST = $EQUIP_LIST;
        $report->REP_CUSTOMER = $REP_CUSTOMER;
        $report->PACKING = $PACKING;
        $report->PIPELINE = $PIPELINE;
        $report->ASSES_CONSUMP = $ASSES_CONSUMP;
        $report->CONS_SPECIFIC = $CONS_SPECIFIC;
        $report->CONS_OVERALL = $CONS_OVERALL;
        $report->CONS_TOTAL = $CONS_TOTAL;
        $report->CONS_HOUR = $CONS_HOUR;
        $report->CONS_DAY = $CONS_DAY;
        $report->CONS_WEEK = $CONS_WEEK;
        $report->CONS_MONTH = $CONS_MONTH;
        $report->CONS_YEAR = $CONS_YEAR;
        $report->CONS_EQUIP = $CONS_EQUIP;
        $report->CONS_PIPE = $CONS_PIPE;
        $report->CONS_TANK = $CONS_TANK;
        $report->REP_CONS_PIE = $REP_CONS_PIE;
        $report->SIZING_VALUES = $SIZING_VALUES;
        $report->SIZING_GRAPHE = $SIZING_GRAPHE;
        $report->SIZING_TR = $SIZING_TR;
        $report->ENTHALPY_G = $ENTHALPY_G;
        $report->ENTHALPY_V = $ENTHALPY_V;
        $report->ENTHALPY_SAMPLE = $ENTHALPY_SAMPLE;
        $report->ISOCHRONE_G = $ISOCHRONE_G;
        $report->ISOCHRONE_V = $ISOCHRONE_V;
        $report->ISOCHRONE_SAMPLE = $ISOCHRONE_SAMPLE;
        $report->ISOVALUE_G = $ISOVALUE_G;
        $report->ISOVALUE_V = $ISOVALUE_V;
        $report->ISOVALUE_SAMPLE = $ISOVALUE_SAMPLE;
        $report->CONTOUR2D_G = $CONTOUR2D_G;
        $report->CONTOUR2D_TEMP_STEP = $CONTOUR2D_TEMP_STEP;
        $report->CONTOUR2D_TEMP_MIN = $CONTOUR2D_TEMP_MIN;
        $report->CONTOUR2D_TEMP_MAX = $CONTOUR2D_TEMP_MAX;
        $report->POINT1_X = $POINT1_X;
        $report->POINT1_Y = $POINT1_Y;
        $report->POINT1_Z = $POINT1_Z;
        $report->POINT2_X = $POINT2_X;
        $report->POINT2_Y = $POINT2_Y;
        $report->POINT2_Z = $POINT2_Z;
        $report->POINT3_X = $POINT3_X;
        $report->POINT3_Y = $POINT3_Y;
        $report->POINT3_Z = $POINT3_Z;
        $report->AXE1_X = $AXE1_X;
        $report->AXE1_Y = $AXE1_Y;
        $report->AXE2_X = $AXE2_X;
        $report->AXE2_Z = $AXE2_Z;
        $report->AXE3_Y = $AXE3_Y;
        $report->AXE3_Z = $AXE3_Z;
        $report->PLAN_X = $PLAN_X;
        $report->PLAN_Y = $PLAN_Y;
        $report->PLAN_Z = $PLAN_Z;
        $report->ASSES_ECO = $ASSES_ECO;

        $report->save();

        return 1;
    }
}