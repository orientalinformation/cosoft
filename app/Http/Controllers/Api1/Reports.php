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

        $report->isSizingValuesChosen = ($report->SIZING_VALUES & 0);
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
            while ($dTmin % $dpas != 0) {
                $dTmin--;
            }
            while ($dTMax % $dpas != 0) {
                $dTMax++;
            }
            $dnbpas = abs($dTMax - $dTmin) / $dpas;
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
        // $input = $this->request->all();

        // if (isset($input['lenght'])) $lenght = doubleval($input['lenght']);


    }
}