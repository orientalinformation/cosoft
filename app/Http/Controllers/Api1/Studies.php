<?php

namespace App\Http\Controllers\Api1;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\MeshGeneration;
use App\Models\Product;
use App\Models\ProductElmt;
use App\Models\Production;
use App\Models\Packing;
use App\Models\Study;
use App\Models\StudyEquipment;
use App\Models\LayoutResults;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Factory as Auth;
use App\Kernel\KernelService;
use App\Cryosoft\UnitsConverterService;
use App\Cryosoft\ValueListService;
use App\Models\MinMax;
use App\Models\PrecalcLdgRatePrm;
use App\Models\LayoutGeneration;
use App\Models\Translation;
use App\Models\StudEqpPrm;
use App\Models\CalculationParametersDef;
use App\Models\CalculationParameter;
use App\Cryosoft\CalculateService;
use App\Models\TempRecordPts;
use App\Models\MeshPosition;
use App\Models\InitialTemperature;
use App\Models\Price;
use App\Models\Report;


class Studies extends Controller
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
     * @var App\Kernel\KernelService
     */
    protected $kernel;

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
    public function __construct(Request $request, Auth $auth, KernelService $kernel, UnitsConverterService $convert, ValueListService $value)
    {
        $this->request = $request;
        $this->auth = $auth;
        $this->kernel = $kernel;
        $this->convert = $convert;
        $this->value = $value;
    }

    public function findStudies()
    {
        $mine = $this->auth->user()->studies;
        $others = Study::where('ID_USER', '!=', $this->auth->user()->ID_USER)->get();

        return compact('mine', 'others');
    }

    public function deleteStudyById($id)
    {
        /** @var Study $study */
        $study = Study::findOrFail($id);

        if (!$study)
            return -1;

        $conf = $this->kernel->getConfig($this->auth->user()->ID_USER, intval($id), -1);
        $this->kernel->getKernelObject('StudyCleaner')->SCStudyClean($conf, SC_CLEAN_OUTPUT_ALL);

        /** @var Product[] $product */
        $products = $study->products;

        foreach ($products as $product) {
            /** @var MeshGeneration $meshGenerations */
            $meshGenerations = $product->meshGenerations;

            foreach ($meshGenerations as $mesh) {
                $mesh->delete();
            }

            foreach ($product->productElmts as $productElmt) {
                $productElmt->delete();
            }
            $product->delete();
        }

        $productions = $study->productions;

        foreach ($productions as $production) {
            $production->delete();
        }

        $tempRecordPts = $study->tempRecordPts;

        foreach ($tempRecordPts as $tempRecord) {
            $tempRecord->delete();
        }

        foreach ($study->reports as $report) {
            $report->delete();
        }
        
        /** @var Packing $packing */
        foreach ($study->packings as $packing) {
            foreach ($packing->packingLayers as $packingLayer) {
                $packingLayer->delete();
            }
            $packing->delete();
        }

        foreach ($study->precalcLdgRatePrms as $precalcLdgRatePrm) {
            $precalcLdgRatePrm->delete();
        }

        return (int) $study->delete();
    }

    public function getStudyById($id)
    {
        $study = Study::find($id);
        return $study;
    }

    public function saveStudyAs($id)
    {
        $study = new Study();
        $temprecordpst = new TempRecordPts();
        $production = new Production();
        $product = new Product();
        $meshgeneration = new MeshGeneration();
        $price = new Price();
        $report = new Report();
        
        // @class: \App\Models\Study
        $studyCurrent = Study::find($id);
        // var_dump($studyCurrent);die;

        // @class: \App\Models\TempRecordPts
        $temprecordpstCurr = TempRecordPts::where('ID_STUDY',$studyCurrent->ID_STUDY)->first();
        // @class: \App\Models\Production
        $productionCurr = Production::where('ID_STUDY',$studyCurrent->ID_STUDY)->first(); 
        // @class: \App\Models\Product
        $productCurr = Product::where('ID_STUDY',$studyCurrent->ID_STUDY)->first();
        // @class: \App\Models\MeshGeneration
        $meshgenerationCurr = MeshGeneration::where('ID_PROD',$productCurr->ID_PROD)->first(); 
        // @class: \App\Models\Price
        $priceCurr = Price::where('ID_STUDY',$studyCurrent->ID_STUDY)->first(); 
        // @class: \App\Models\Price
        $reportCurr = Report::where('ID_STUDY',$studyCurrent->ID_STUDY)->first(); 
        // @class: \App\Models\ProductEmlt
        $productemltCurr = ProductElmt::where('ID_PROD',$productCurr->ID_PROD)->get(); 
        // var_dump($productemltCurr);die;
        $input = $this->request->all();


        if (!empty($input['name'])) {

            //duplicate study already exsits
            $study->STUDY_NAME = $input['name'];
            $study->ID_USER = $this->auth->user()->ID_USER;
            $study->OPTION_ECO = $studyCurrent->OPTION_ECO;
            $study->CALCULATION_MODE = $studyCurrent->CALCULATION_MODE;
            $study->COMMENT_TXT = $studyCurrent->COMMENT_TXT;
            $study->OPTION_CRYOPIPELINE = $studyCurrent->OPTION_CRYOPIPELINE;
            $study->OPTION_EXHAUSTPIPELINE = $studyCurrent->OPTION_EXHAUSTPIPELINE;
            $study->CHAINING_CONTROLS = $studyCurrent->CHAINING_CONTROLS;
            $study->CHAINING_ADD_COMP_ENABLE = $studyCurrent->CHAINING_ADD_COMP_ENABLE;
            $study->CHAINING_NODE_DECIM_ENABLE = $studyCurrent->CHAINING_NODE_DECIM_ENABLE;
            $study->HAS_CHILD = $studyCurrent->HAS_CHILD;
            $study->TO_RECALCULATE = $studyCurrent->TO_RECALCULATE;
            $study->save();

            //duplicate TempRecordPts already exsits
            if(count($temprecordpstCurr) > 0) {
                $temprecordpst->ID_STUDY = $study->ID_STUDY;
                $temprecordpst->AXIS1_PT_TOP_SURF = $temprecordpstCurr->AXIS1_PT_TOP_SURF;
                $temprecordpst->AXIS2_PT_TOP_SURF = $temprecordpstCurr->AXIS2_PT_TOP_SURF;
                $temprecordpst->AXIS3_PT_TOP_SURF = $temprecordpstCurr->AXIS3_PT_TOP_SURF;
                $temprecordpst->AXIS1_PT_INT_PT = $temprecordpstCurr->AXIS1_PT_INT_PT;
                $temprecordpst->AXIS2_PT_INT_PT = $temprecordpstCurr->AXIS2_PT_INT_PT;
                $temprecordpst->AXIS3_PT_INT_PT = $temprecordpstCurr->AXIS3_PT_INT_PT;
                $temprecordpst->AXIS1_PT_BOT_SURF = $temprecordpstCurr->AXIS1_PT_BOT_SURF;
                $temprecordpst->AXIS2_PT_BOT_SURF = $temprecordpstCurr->AXIS2_PT_BOT_SURF;
                $temprecordpst->AXIS3_PT_BOT_SURF = $temprecordpstCurr->AXIS3_PT_BOT_SURF;
                $temprecordpst->AXIS2_AX_1 = $temprecordpstCurr->AXIS2_AX_1;
                $temprecordpst->AXIS3_AX_1 = $temprecordpstCurr->AXIS3_AX_1;
                $temprecordpst->AXIS1_AX_2 = $temprecordpstCurr->AXIS1_AX_2;
                $temprecordpst->AXIS3_AX_2 = $temprecordpstCurr->AXIS3_AX_2;
                $temprecordpst->AXIS1_AX_3 = $temprecordpstCurr->AXIS1_AX_3;
                $temprecordpst->AXIS2_AX_3 = $temprecordpstCurr->AXIS2_AX_3;
                $temprecordpst->AXIS1_PL_2_3 = $temprecordpstCurr->AXIS1_PL_2_3;
                $temprecordpst->AXIS2_PL_1_3 = $temprecordpstCurr->AXIS2_PL_1_3;
                $temprecordpst->AXIS3_PL_1_2 = $temprecordpstCurr->AXIS3_PL_1_2;
                $temprecordpst->NB_STEPS = $temprecordpstCurr->NB_STEPS;
                $temprecordpst->CONTOUR2D_TEMP_MIN = $temprecordpstCurr->CONTOUR2D_TEMP_MIN;
                $temprecordpst->CONTOUR2D_TEMP_MAX = $temprecordpstCurr->CONTOUR2D_TEMP_MAX;
                $temprecordpst->save();

            }

            //duplicate Production already exsits
            if(count($productionCurr)>0) {

            }
            $production->ID_STUDY = $study->ID_STUDY;
            $production->DAILY_PROD = $productionCurr->DAILY_PROD ;
            $production->DAILY_STARTUP = $productionCurr->DAILY_STARTUP ;
            $production->WEEKLY_PROD = $productionCurr->WEEKLY_PROD ;
            $production->PROD_FLOW_RATE = $productionCurr->PROD_FLOW_RATE ;
            $production->NB_PROD_WEEK_PER_YEAR = $productionCurr->NB_PROD_WEEK_PER_YEAR ;
            $production->AMBIENT_TEMP = $productionCurr->AMBIENT_TEMP ;
            $production->AMBIENT_HUM = $productionCurr->AMBIENT_HUM ;
            $production->AVG_T_DESIRED = $productionCurr->AVG_T_DESIRED ;
            $production->AVG_T_INITIAL = $productionCurr->AVG_T_INITIAL ;
            $production->APPROX_DWELLING_TIME = $productionCurr->APPROX_DWELLING_TIME ;
            $production->save();
            
            //duplicate initial_Temp already exsits
            // @class: \App\Models\InitialTemperature
            $initialtempCurr = InitialTemperature::where('ID_PRODUCTION', $productionCurr->ID_PRODUCTION)->get();
            if(count($initialtempCurr) > 0) {
                
                foreach ($initialtempCurr as $ins) { 
                    $initialtemp = new InitialTemperature();
                    $initialtemp->ID_PRODUCTION = $production->ID_PRODUCTION ;
                    $initialtemp->MESH_1_ORDER = $ins->MESH_1_ORDER ;
                    $initialtemp->MESH_2_ORDER = $ins->MESH_2_ORDER ;
                    $initialtemp->MESH_3_ORDER = $ins->MESH_3_ORDER ;
                    $initialtemp->INITIAL_T = $ins->INITIAL_T ;
                    $initialtemp->save();
                }

            }

            //duplicate Product already exsits
            if(count($productCurr)>0) {
                $product->ID_STUDY = $study->ID_STUDY;
                $product->PRODNAME = $productCurr->PRODNAME;
                $product->PROD_ISO = $productCurr->PROD_ISO;
                $product->PROD_WEIGHT = $productCurr->PROD_WEIGHT;
                $product->PROD_REALWEIGHT = $productCurr->PROD_REALWEIGHT;
                $product->PROD_VOLUME = $productCurr->PROD_VOLUME;
                $product->save();
            }
            

            //duplicate MeshGeneration already exsits
            if(count($meshgenerationCurr) > 0) {
                $meshgeneration->ID_PROD = $product->ID_PROD;
                $meshgeneration->MESH_1_FIXED = $meshgenerationCurr->MESH_1_FIXED;
                $meshgeneration->MESH_2_FIXED = $meshgenerationCurr->MESH_2_FIXED;
                $meshgeneration->MESH_3_FIXED = $meshgenerationCurr->MESH_3_FIXED;
                $meshgeneration->MESH_1_MODE = $meshgenerationCurr->MESH_1_MODE;
                $meshgeneration->MESH_2_MODE = $meshgenerationCurr->MESH_2_MODE;
                $meshgeneration->MESH_3_MODE = $meshgenerationCurr->MESH_3_MODE;
                $meshgeneration->MESH_1_NB = $meshgenerationCurr->MESH_1_NB;
                $meshgeneration->MESH_2_NB = $meshgenerationCurr->MESH_2_NB;
                $meshgeneration->MESH_3_NB = $meshgenerationCurr->MESH_3_NB;
                $meshgeneration->MESH_1_SIZE = $meshgenerationCurr->MESH_1_SIZE;
                $meshgeneration->MESH_2_SIZE = $meshgenerationCurr->MESH_2_SIZE;
                $meshgeneration->MESH_3_SIZE = $meshgenerationCurr->MESH_3_SIZE;
                $meshgeneration->MESH_1_INT = $meshgenerationCurr->MESH_1_INT;
                $meshgeneration->MESH_2_INT = $meshgenerationCurr->MESH_2_INT;
                $meshgeneration->MESH_3_INT = $meshgenerationCurr->MESH_3_INT;
                $meshgeneration->MESH_1_RATIO = $meshgenerationCurr->MESH_1_RATIO;
                $meshgeneration->MESH_2_RATIO = $meshgenerationCurr->MESH_2_RATIO;
                $meshgeneration->MESH_3_RATIO = $meshgenerationCurr->MESH_3_RATIO;
                $meshgeneration->BEST_1_NB = $meshgenerationCurr->BEST_1_NB;
                $meshgeneration->BEST_2_NB = $meshgenerationCurr->BEST_2_NB;
                $meshgeneration->BEST_3_NB = $meshgenerationCurr->BEST_3_NB;
                $meshgeneration->save();

            } 

            if(count($productemltCurr) > 0) {
                foreach ($productemltCurr as $prodelmtCurr ) {
                    $productemlt = new ProductElmt();
                    $productemlt->ID_PROD = $product->ID_PROD;
                    $productemlt->ID_SHAPE = $prodelmtCurr->ID_SHAPE;
                    $productemlt->ID_COMP = $prodelmtCurr->ID_COMP;
                    $productemlt->PROD_ELMT_NAME = $prodelmtCurr->PROD_ELMT_NAME;
                    $productemlt->SHAPE_PARAM1 = $prodelmtCurr->SHAPE_PARAM1;
                    $productemlt->SHAPE_PARAM2 = $prodelmtCurr->SHAPE_PARAM2;
                    $productemlt->SHAPE_PARAM3 = $prodelmtCurr->SHAPE_PARAM3;
                    $productemlt->PROD_DEHYD = $prodelmtCurr->PROD_DEHYD;
                    $productemlt->PROD_DEHYD_COST = $prodelmtCurr->PROD_DEHYD_COST;
                    $productemlt->SHAPE_POS1 = $prodelmtCurr->SHAPE_POS1;
                    $productemlt->SHAPE_POS2 = $prodelmtCurr->SHAPE_POS2;
                    $productemlt->SHAPE_POS3 = $prodelmtCurr->SHAPE_POS3;
                    $productemlt->PROD_ELMT_ISO = $prodelmtCurr->PROD_ELMT_ISO;
                    $productemlt->ORIGINAL_THICK = $prodelmtCurr->ORIGINAL_THICK;
                    $productemlt->NODE_DECIM = $prodelmtCurr->NODE_DECIM;
                    $productemlt->INSERT_LINE_ORDER = $prodelmtCurr->INSERT_LINE_ORDER;
                    $productemlt->PROD_ELMT_WEIGHT = $prodelmtCurr->PROD_ELMT_WEIGHT;
                    $productemlt->PROD_ELMT_REALWEIGHT = $prodelmtCurr->PROD_ELMT_REALWEIGHT;
                    $productemlt->save();
                }
            }

            //duplicate Price already exsits
            if(count($priceCurr) > 0) {
                $price->ID_STUDY = $study->ID_STUDY;
                $price->ENERGY = $priceCurr->ENERGY;
                $price->ECO_IN_CRYO1 = $priceCurr->ECO_IN_CRYO1;
                $price->ECO_IN_PBP1 = $priceCurr->ECO_IN_PBP1;
                $price->ECO_IN_CRYO2 = $priceCurr->ECO_IN_CRYO2;
                $price->ECO_IN_PBP2 = $priceCurr->ECO_IN_PBP2;
                $price->ECO_IN_CRYO3 = $priceCurr->ECO_IN_CRYO3;
                $price->ECO_IN_PBP3 = $priceCurr->ECO_IN_PBP3;
                $price->ECO_IN_CRYO4 = $priceCurr->ECO_IN_CRYO4;
                $price->ECO_IN_MINMP = $priceCurr->ECO_IN_MINMP;
                $price->ECO_IN_MAXMP = $priceCurr->ECO_IN_MAXMP;
                $price->save();

            }

            //duplicate Report already exsits
            if(count($reportCurr) > 0) {
                $report->ID_STUDY = $study->ID_STUDY;
                $report->REP_CUSTOMER = $reportCurr->REP_CUSTOMER;
                $report->PROD_LIST = $reportCurr->PROD_LIST;
                $report->PROD_TEMP = $reportCurr->PROD_TEMP;
                $report->PROD_3D = $reportCurr->PROD_3D;
                $report->PACKING = $reportCurr->PACKING;
                $report->EQUIP_LIST = $reportCurr->EQUIP_LIST;
                $report->EQUIP_PARAM = $reportCurr->EQUIP_PARAM;
                $report->EQUIP_PARAM = $reportCurr->EQUIP_PARAM;
                $report->PIPELINE = $reportCurr->PIPELINE;
                $report->ASSES_TERMAL = $reportCurr->ASSES_TERMAL;
                $report->ASSES_CONSUMP = $reportCurr->ASSES_CONSUMP;
                $report->ASSES_ECO = $reportCurr->ASSES_ECO;
                $report->ASSES_TR = $reportCurr->ASSES_TR;
                $report->ASSES_TR_MIN = $reportCurr->ASSES_TR_MIN;
                $report->ASSES_TR_MAX = $reportCurr->ASSES_TR_MAX;
                $report->SIZING_TR = $reportCurr->SIZING_TR;
                $report->SIZING_TR_MIN = $reportCurr->SIZING_TR_MIN;
                $report->SIZING_TR_MAX = $reportCurr->SIZING_TR_MAX;
                $report->SIZING_VALUES = $reportCurr->SIZING_VALUES;
                $report->SIZING_GRAPHE = $reportCurr->SIZING_GRAPHE;
                $report->SIZING_TEMP_G = $reportCurr->SIZING_TEMP_G;
                $report->SIZING_TEMP_V = $reportCurr->SIZING_TEMP_V;
                $report->SIZING_TEMP_SAMPLE = $reportCurr->SIZING_TEMP_SAMPLE;
                $report->AXE1_X = $reportCurr->AXE1_X;
                $report->AXE1_Y = $reportCurr->AXE1_Y;
                $report->AXE2_X = $reportCurr->AXE2_X;
                $report->AXE2_Z = $reportCurr->AXE2_Z;
                $report->AXE3_Y = $reportCurr->AXE3_Y;
                $report->AXE3_Z = $reportCurr->AXE3_Z;
                $report->ISOCHRONE_G = $reportCurr->ISOCHRONE_G;
                $report->ISOCHRONE_V = $reportCurr->ISOCHRONE_V;
                $report->ISOCHRONE_SAMPLE = $reportCurr->ISOCHRONE_SAMPLE;
                $report->POINT1_X = $reportCurr->POINT1_X;
                $report->POINT1_Y = $reportCurr->POINT1_Y;
                $report->POINT1_Z = $reportCurr->POINT1_Z;
                $report->POINT2_X = $reportCurr->POINT2_X;
                $report->POINT2_Y = $reportCurr->POINT2_Y;
                $report->POINT2_Z = $reportCurr->POINT2_Z;
                $report->POINT3_X = $reportCurr->POINT3_X;
                $report->POINT3_Y = $reportCurr->POINT3_Y;
                $report->POINT3_Z = $reportCurr->POINT3_Z;
                $report->ISOVALUE_G = $reportCurr->ISOVALUE_G;
                $report->ISOVALUE_V = $reportCurr->ISOVALUE_V;
                $report->ISOVALUE_SAMPLE = $reportCurr->ISOVALUE_SAMPLE;
                $report->PLAN_X = $reportCurr->PLAN_X;
                $report->PLAN_Y = $reportCurr->PLAN_Y;
                $report->PLAN_Z = $reportCurr->PLAN_Z;
                $report->CONTOUR2D_G = $reportCurr->CONTOUR2D_G;
                $report->CONTOUR2D_SAMPLE = $reportCurr->CONTOUR2D_SAMPLE;
                $report->CONTOUR2D_TEMP_STEP = $reportCurr->CONTOUR2D_TEMP_STEP;
                $report->ENTHALPY_V = $reportCurr->ENTHALPY_V;
                $report->ENTHALPY_G = $reportCurr->ENTHALPY_G;
                $report->ENTHALPY_SAMPLE = $reportCurr->ENTHALPY_SAMPLE;
                $report->DEST_SURNAME = $reportCurr->DEST_SURNAME;
                $report->DEST_NAME = $reportCurr->DEST_NAME;
                $report->DEST_FUNCTION = $reportCurr->DEST_FUNCTION;
                $report->DEST_COORD = $reportCurr->DEST_COORD;
                $report->PHOTO_PATH = $reportCurr->PHOTO_PATH;
                $report->CUSTOMER_LOGO = $reportCurr->CUSTOMER_LOGO;
                $report->CONS_SPECIFIC = $reportCurr->CONS_SPECIFIC;
                $report->CONS_OVERALL = $reportCurr->CONS_OVERALL;
                $report->CONS_TOTAL = $reportCurr->CONS_TOTAL;
                $report->CONS_HOUR = $reportCurr->CONS_HOUR;
                $report->CONS_DAY = $reportCurr->CONS_DAY;
                $report->CONS_WEEK = $reportCurr->CONS_WEEK;
                $report->CONS_MONTH = $reportCurr->CONS_MONTH;
                $report->CONS_YEAR = $reportCurr->CONS_YEAR;
                $report->CONS_EQUIP = $reportCurr->CONS_EQUIP;
                $report->CONS_PIPE = $reportCurr->CONS_PIPE;
                $report->CONS_TANK = $reportCurr->CONS_TANK;
                $report->CONTOUR2D_OUTLINE_TIME = $reportCurr->CONTOUR2D_OUTLINE_TIME;
                $report->REPORT_COMMENT = $reportCurr->REPORT_COMMENT;
                $report->WRITER_SURNAME = $reportCurr->WRITER_SURNAME;
                $report->WRITER_NAME = $reportCurr->WRITER_NAME;
                $report->WRITER_FUNCTION = $reportCurr->WRITER_FUNCTION;
                $report->WRITER_COORD = $reportCurr->WRITER_COORD;
                $report->REP_CONS_PIE = $reportCurr->REP_CONS_PIE;
                $report->CONTOUR2D_TEMP_MIN = $reportCurr->CONTOUR2D_TEMP_MIN;
                $report->CONTOUR2D_TEMP_MAX = $reportCurr->CONTOUR2D_TEMP_MAX;
                $report->save();
            }
            


            $study->ID_TEMP_RECORD_PTS = $temprecordpst->ID_TEMP_RECORD_PTS;
            $study->ID_PRODUCTION = $production->ID_PRODUCTION;
            $study->ID_PROD = $product->ID_PROD;
            $study->ID_PRICE = $price->ID_PRICE;
            $study->ID_REPORT = $report->ID_REPORT;
            $study->save();

            $product->ID_MESH_GENERATION = $meshgeneration->ID_MESH_GENERATION;
            $product->save();

            return 1000;

        } else {
            return 1001;
        }
        
    }

    /**
     * @param $id
     * @return int
     */
    public function saveStudy($id)
    {
        // @class: \App\Models\Study
        $study = Study::find($id);
        $update = (object) $this->request->json()->all();

        $study->CALCULATION_MODE = $update->CALCULATION_MODE;
        $study->CALCULATION_STATUS = $update->CALCULATION_STATUS;
        $study->STUDY_NAME = $update->STUDY_NAME;
        $study->CUSTOMER = $update->CUSTOMER;
        $study->COMMENT_TXT = $update->COMMENT_TXT;
        $study->OPTION_CRYOPIPELINE = $update->OPTION_CRYOPIPELINE;
        $study->OPTION_EXHAUSTPIPELINE = $update->OPTION_EXHAUSTPIPELINE;
        $study->OPTION_ECO = $update->OPTION_ECO;
        $study->CHAINING_CONTROLS = $update->CHAINING_CONTROLS;
        $study->CHAINING_ADD_COMP_ENABLE = $update->CHAINING_ADD_COMP_ENABLE;
        $study->CHAINING_NODE_DECIM_ENABLE = $update->CHAINING_NODE_DECIM_ENABLE;
        $study->TO_RECALCULATE = $update->TO_RECALCULATE;
        $study->HAS_CHILD = $update->HAS_CHILD;
        $study->OPEN_BY_OWNER = $update->OPEN_BY_OWNER;

        return (int) $study->save();
    }

    public function refreshMesh($id) {
        $conf = $this->kernel->getConfig($this->auth->user()->ID_USER, $id, 10);
        
        return $this->kernel->getKernelObject('MeshBuilder')->MBMeshBuild($conf);
    }

    public function openStudy($id)
    {
        $conf = $this->kernel->getConfig($this->auth->user()->ID_USER, intval($id), -1);
        return $this->kernel->getKernelObject('StudyCleaner')->SCStudyClean($conf, 10);
    }

    /**
     * @param StudyEquipment $studyEquip
     * @param int $dataType
     */
    function loadEquipmentData(StudyEquipment $studyEquip, int $dataType) {
        $num_fields = 0;
        switch ($dataType) {
            case CONVECTION_SPEED:
                // unit_ident = UnitsConverter . CONV_SPEED_UNIT;
                $num_fields = $studyEquip->equipment->NB_VC;
                break;
            case DWELLING_TIME:
                // unit_ident = UnitsConverter . TIME_UNIT;
                $num_fields = $studyEquip->equipment->NB_TS;
                break;
            case REGULATION_TEMP:
                // unit_ident = UnitsConverter . CONTROL_TEMP_UNIT;
                $num_fields = $studyEquip->equipment->NB_TR;
                break;
            case ENTHALPY_VAR:
                // unit_ident = UnitsConverter . ENTHALPY_UNIT;
                $num_fields = $studyEquip->equipment->NB_TR;
                break;
            case EXHAUST_TEMP:
                // unit_ident = UnitsConverter . CONTROL_TEMP_UNIT;
                $num_fields = 1;
                break;
        }
        $studyEquipParams = StudEqpPrm::where('ID_STUDY_EQUIPMENTS', $studyEquip->ID_STUDY_EQUIPMENTS)
            ->where('VALUE_TYPE','>=', $dataType)->where('VALUE_TYPE', '<', $dataType+100)->pluck('VALUE')->toArray();
        return array_map('doubleval', $studyEquipParams);
    }

    /**
    * 
    **/
    public function getStudyEquipments($id) 
    {
        $study = \App\Models\Study::find($id);
        $studyEquipments = StudyEquipment::where('ID_STUDY', $study->ID_STUDY)->with('equipment')->get();
        $returnStudyEquipments = [];

        foreach ($studyEquipments as $studyEquipment) {
            /** @var StudyEquipment $studyEquipment */
            $equip = [
                'ID_STUDY_EQUIPMENTS' => $studyEquipment->ID_STUDY_EQUIPMENTS,
                'EQUIP_NAME' => $studyEquipment->EQUIP_NAME,
                'ID_EQUIP' => $studyEquipment->ID_EQUIP,
                'EQP_LENGTH' => $studyEquipment->EQP_LENGTH,
                'EQP_WIDTH' => $studyEquipment->EQP_WIDTH,
                'EQUIP_VERSION' => $studyEquipment->EQUIP_VERSION,
            ];
            $layoutGen = LayoutGeneration::where('ID_STUDY_EQUIPMENTS', $studyEquipment->ID_STUDY_EQUIPMENTS)->first();

            $equip['ORIENTATION'] = $layoutGen->PROD_POSITION;
            $equip['displayName'] = 'EQUIP_NAME_NOT_FOUND';

            // determine study equipment name
            if ($studyEquipment->equipment->STD
                && !($studyEquipment->equipment->CAPABILITIES & CAP_DISPLAY_DB_NAME != 0)
                && !($studyEquipment->equipment->CAPABILITIES & CAP_EQUIP_SPECIFIC_SIZE != 0))
            {
                $equip['displayName'] = $equip['EQUIP_NAME'] . " - " 
                    . number_format($studyEquipment->equipment->EQP_LENGTH + ($studyEquipment->NB_MODUL * $studyEquipment->equipment->MODUL_LENGTH), 2)
                    . "x" . number_format($studyEquipment->equipment->EQP_WIDTH, 2) . " (v" . ($studyEquipment->EQUIP_VERSION) . ")"
                    . ($studyEquipment->EQUIP_RELEASE == 3 ? ' / Active' : ''); // @TODO: translate
            }
            else if (($studyEquipment->equipment->CAPABILITIES & CAP_EQUIP_SPECIFIC_SIZE != 0)
                && ($studyEquipment->equipment->STDEQP_LENGTH != NO_SPECIFIC_SIZE)
                && ($studyEquipment->equipment->STDEQP_WIDTH != NO_SPECIFIC_SIZE))
            {
                $equip['displayName'] = $equip['EQUIP_NAME']
                    . " (v" . ($studyEquipment->EQUIP_VERSION) . ")"
                    . ($studyEquipment->EQUIP_RELEASE == 3 ? ' / Active' : ''); // @TODO: translate
            } else {
                $equip['displayName'] = $equip['EQUIP_NAME'] 
                    . ($studyEquipment->EQUIP_RELEASE == 3 ? ' / Active' : ''); // @TODO: translate
            }

            $equip['tr'] = $this->loadEquipmentData($studyEquipment, REGULATION_TEMP);
            $equip['ts'] = $this->loadEquipmentData($studyEquipment, DWELLING_TIME);
            $equip['vc'] = $this->loadEquipmentData($studyEquipment, CONVECTION_SPEED);
            $equip['dh'] = $this->loadEquipmentData($studyEquipment, ENTHALPY_VAR);
            $equip['TExt'] = $this->loadEquipmentData($studyEquipment, EXHAUST_TEMP)[0];

            $equip['top_or_QperBatch'] = $this->topOrQperBatch($studyEquipment);
            
            array_push($returnStudyEquipments, $equip);
        }

        return $returnStudyEquipments;
    }

    function topOrQperBatch(StudyEquipment $se)
    {
        /** @var App\Models\LayoutResults $lr */
        $lr = $se->layoutResults->first();
        $returnStr = "";
        if ($se->equipment->BATCH_PROCESS==1) {
            $returnStr = ((!$lr) || !($se->equipment->CAPABILITIES & CAP_LAYOUT_ENABLE != 0)) ?
                "" :
                $this->convert->mass($lr->QUANTITY_PER_BATCH) .
                " " . $this->convert->massSymbol() .
                "/batch"; // @TODO: translate
        } else {
            $returnStr = ((!$lr) || !($se->equipment->CAPABILITIES & CAP_LAYOUT_ENABLE != 0)) ?
                "" : $this->convert->toc($lr->LOADING_RATE) . " %";
        }

        // if ((lg . getWidthInterval() != ValuesList . INTERVAL_UNDEFINED)
        //     || (lg . getLengthInterval() != ValuesList . INTERVAL_UNDEFINED)) {
        //     String simg = "<br><img src=\"/cryosoft/jspPages/img/icon_info.gif\" alt=\"\" border=\"0\">";
        //     out . println(simg);
        // }
        return $returnStr;
    }

    public function newProduct($id) 
    {
        $input = $this->request->all();

        if (!isset($input['name']) || empty($input['name']))
            return 1;

        $study = \App\Models\Study::find($id);
        $product = $study->products;

        if (count($product) == 0) {
            $product = new \App\Models\Product();
            $product->ID_STUDY = $study->ID_STUDY;
        } else {
            $product = $product[0];
        }

        $conf = $this->kernel->getConfig($this->auth->user()->ID_USER, intval($id), -1);
        $this->kernel->getKernelObject('StudyCleaner')->SCStudyClean($conf, SC_CLEAN_OUTPUT_PRODUCT);

        $elements = $product->productElmts;
        if ($elements->count() > 0) {
            foreach ($elements as $elmt) {
                $elmt->delete();
            }
        }

        $product->PRODNAME = $input['name'];
        $product->PROD_WEIGHT = 0.0;
        $product->PROD_REALWEIGHT = 0.0;
        $product->PROD_VOLUME = 0.0;
        $product->PROD_ISO = 1;
        $product->ID_MESH_GENERATION = 0;
        $product->save();

        return 0;
    }

    public function updateProduct($id) 
    {
        $study = \App\Models\Study::find($id);
        $product = $study->product;
        $input = $this->request->all();

        if (isset($input['name']) && !empty($input['name'])) {
            $product->PRODNAME = $input['name'];
            $product->save();
        }

        if (isset($input['dim1']) || isset($input['dim2']) || isset($input['dim3'])) {
            $elements = $product->productElmts;
            if ($elements->count() > 0) {
                foreach ($elements as $elmt) {
                    if (isset($input['dim1'])) $elmt->SHAPE_PARAM1 = floatval($input['dim1']);
                    if (isset($input['dim2'])) $elmt->SHAPE_PARAM2 = floatval($input['dim2']);
                    if (isset($input['dim3'])) $elmt->SHAPE_PARAM3 = floatval($input['dim3']);
                    $elmt->save();
                }
            }
        }
        return 0;
    }

    public function getStudyPackingLayers($id)
    {
        $packing = \App\Models\Packing::where('ID_STUDY', $id)->first();
        $packingLayers = null;

        if ($packing != null) {
            $packingLayers = \App\Models\PackingLayer::where('ID_PACKING', $packing->ID_PACKING)->get();
            for ($i = 0; $i < count($packingLayers); $i++) { 
                $value = $this->convert->unitConvert(16, $packingLayers[$i]->THICKNESS);
                $packingLayers[$i]->THICKNESS = $value;
            }
        }

        return compact('packing', 'packingLayers');
    }
    
    /**
     * 
     */
    public function savePacking($id)
    {
        $input = $this->request->all();
        $packing = \App\Models\Packing::where('ID_STUDY', $id)->first();
        if (empty($packing)) {
            $packing = new \App\Models\Packing();
            $packing->ID_SHAPE = $input['packing']['ID_SHAPE'];
            $packing->ID_STUDY = $id;
        }
        if (!isset($input['packing']['NOMEMBMAT']))
            $input['packing']['NOMEMBMAT'] = "";

        $packing->NOMEMBMAT = $input['packing']['NOMEMBMAT'];
        $packing->save();

        $packingLayer = \App\Models\PackingLayer::where('ID_PACKING', $packing->ID_PACKING)->delete();

        foreach ($input['packingLayers'] as $key => $value) {
            $packingLayer = new \App\Models\PackingLayer();
            $packingLayer->ID_PACKING = $packing->ID_PACKING;
            $packingLayer->ID_PACKING_ELMT = $value['ID_PACKING_ELMT'];
            $packingLayer->THICKNESS = $value['THICKNESS'];
            $packingLayer->PACKING_SIDE_NUMBER = $value['PACKING_SIDE_NUMBER'];
            $packingLayer->PACKING_LAYER_ORDER = $value['PACKING_LAYER_ORDER'];
            $packingLayer->save();
        }
        return 1;
    }

    /**
     * @return Study
     */
    public function createStudy()
    {
        /** @var Study $study */
        $study = new Study();

        /** @var Production $production */
        $production = new Production();

        /** @var PrecalcLdgRatePrm $precalc */
        $precalc = new PrecalcLdgRatePrm();
        $input = $this->request->json()->all();

        $study->STUDY_NAME = $input['STUDY_NAME'];
        $study->ID_USER = $this->auth->user()->ID_USER;
        $study->OPTION_ECO = isset($input['OPTION_ECO'])?$input['OPTION_ECO']:0;
        $study->CALCULATION_MODE = $input['CALCULATION_MODE'];
        $study->COMMENT_TXT = isset($input['COMMENT_TXT'])?$input['COMMENT_TXT']:'';
        $study->OPTION_CRYOPIPELINE = false;
        $study->OPTION_EXHAUSTPIPELINE = false;
        $study->CHAINING_CONTROLS = false;
        $study->CHAINING_ADD_COMP_ENABLE = false;
        $study->CHAINING_NODE_DECIM_ENABLE = 0;
        $study->HAS_CHILD = 0;
        $study->TO_RECALCULATE = 0;
        $study->save();

        $nbMF 					= (float) MinMax::where('LIMIT_ITEM', $this->value->MIN_MAX_DAILY_STARTUP)->first()->DEFAULT_VALUE;
        $nbWeekPeryear 		    = (float) MinMax::where('LIMIT_ITEM', $this->value->MIN_MAX_PROD_WEEK_PER_YEAR)->first()->DEFAULT_VALUE;
        $nbheures 			    = (float) MinMax::where('LIMIT_ITEM', $this->value->MIN_MAX_PRODUCT_DURATION)->first()->DEFAULT_VALUE;
        $nbjours 				= (float) MinMax::where('LIMIT_ITEM', $this->value->MIN_MAX_WEEKLY_PRODUCTION)->first()->DEFAULT_VALUE;
        $humidity 			    = (float) MinMax::where('LIMIT_ITEM', $this->value->MIN_MAX_AMBIENT_HUM)->first()->DEFAULT_VALUE;
        $dailyProductFlow 	    = (float) MinMax::where('LIMIT_ITEM', $this->value->MIN_MAX_FLOW_RATE)->first()->DEFAULT_VALUE;
        $avTempDesired 		    = (float) MinMax::where('LIMIT_ITEM', $this->value->MIN_MAX_AVG_TEMPERATURE_DES)->first()->DEFAULT_VALUE;
        $temp 					= (float) MinMax::where('LIMIT_ITEM', $this->value->MIN_MAX_TEMP_AMBIANT)->first()->DEFAULT_VALUE;

        $production->DAILY_STARTUP          = $nbMF;
        $production->DAILY_PROD             = $nbheures;
        $production->NB_PROD_WEEK_PER_YEAR  = $nbWeekPeryear;
        $production->WEEKLY_PROD            = $nbjours;
        $production->AMBIENT_HUM            = $humidity;
        $production->PROD_FLOW_RATE         = $dailyProductFlow;
        $production->AVG_T_DESIRED          = $avTempDesired;
        $production->AMBIENT_TEMP           = $temp;
        $production->ID_STUDY               = $study->ID_STUDY;
        $production->save();

        $product = new Product();
        $product->ID_STUDY = $study->ID_STUDY;
        $product->ID_MESH_GENERATION = 0;
        $product->PRODNAME = '';
        $product->PROD_ISO = true;
        $product->PROD_WEIGHT = 0.0;
        $product->PROD_REALWEIGHT = 0.0;
        $product->PROD_VOLUME = 0.0;
        $product->save();

        $precalc->ID_STUDY          = $study->ID_STUDY;
        $precalc->W_INTERVAL        = (float)MinMax::where('LIMIT_ITEM', $this->value->MIN_MAX_INTERVAL_WIDTH)->first()->DEFAULT_VALUE;
        $precalc->L_INTERVAL        = (float)MinMax::where('LIMIT_ITEM', $this->value->MIN_MAX_INTERVAL_LENGHT)->first()->DEFAULT_VALUE;
        $precalc->APPROX_LDG_RATE   = (float)MinMax::where('LIMIT_ITEM', $this->value->MIN_MAX_STDEQP_TEMP_REGULATION_LN2)->first()->DEFAULT_VALUE;
        $precalc->PRECALC_LDG_TR    = (float)MinMax::where('LIMIT_ITEM', $this->value->MIN_MAX_STDEQP_TOP)->first()->DEFAULT_VALUE;
        $precalc->save();

        $study->ID_PROD = $product->ID_PROD;
        $study->ID_PRODUCTION = $production->ID_PRODUCTION;
        $study->ID_PRECALC_LDG_RATE_PRM = $precalc->ID_PRECALC_LDG_RATE_PRM;
        $study->save();

        return $study;
    }

    public function recentStudies() {
        $studies = Study::where('ID_USER',$this->auth->user()->ID_USER)->orderBy('ID_STUDY', 'desc')->take(5)->get();
        return $studies;
    }

    function getDefaultPrecision ($productshape, $nbComp, $itemPrecis) {
        $limitItem = 0;
        $defaultPrecis = 0.005;
        $FirstItemMonoComp = [
            0,1151 ,1161 ,1171 ,1181 ,1191 ,1201 ,1211 ,1221 , 1231
        ];
        $FirstItemMultiComp = [
            0,1156 ,1166 ,1176 ,1186 ,1196 ,1206 ,1216 ,1226 , 1236
        ];

        switch ($productshape) {
            case SLAB:
            case PARALLELEPIPED_STANDING:
            case PARALLELEPIPED_LAYING:
            case CYLINDER_STANDING:
            case CYLINDER_LAYING:
            case SPHERE:
            case CYLINDER_CONCENTRIC_STANDING:
            case CYLINDER_CONCENTRIC_LAYING:
            case PARALLELEPIPED_BREADED:
                if ($nbComp == 1) {
                    $limitItem = $FirstItemMonoComp[$productshape] + $itemPrecis - 1;
                } else {
                    $limitItem = $FirstItemMultiComp[$productshape] + $itemPrecis - 1;
                }
                break;

            default:
                $limitItem = $FirstItemMonoComp[0] + $itemPrecis - 1;
                break;

        }

        $defaultPrecis = MinMax::where('LIMIT_ITEM', $limitItem)->first()->DEFAULT_VALUE;

        return ($defaultPrecis);
    }

    public function getDefaultTimeStep ($itemTimeStep) {
        $limitItem = 0;
        $defaultTimeStep = 1;		// s
        $FirstItem = 1241;

        $limitItem = $FirstItem + $itemTimeStep - 1;

        $defaultTimeStep = MinMax::where('LIMIT_ITEM', $limitItem)->first()->DEFAULT_VALUE;

        return ($defaultTimeStep);
    }

    /**
     * @param $id
     */
    public function addEquipment($id)
    {
        $input = $this->request->all();

        /** @var App\Models\Study $study */
        $study = \App\Models\Study::find($id);

        $productshape = $study->products->first()->productElmts->first()->ID_SHAPE;

        $mmTop = MinMax::where('LIMIT_ITEM', MIN_MAX_STDEQP_TOP)->first();

        $equip = \App\Models\Equipment::findOrFail( $input['idEquip'] );
        
        $sEquip = new \App\Models\StudyEquipment();
        $sEquip->ID_EQUIP = $equip->ID_EQUIP;
        $sEquip->ID_STUDY = $study->ID_STUDY;
        $sEquip->ENABLE_CONS_PIE = DISABLE_CONS_PIE;
        $sEquip->RUN_CALCULATE = EQUIP_SELECTED;
        
        $sEquip->BRAIN_SAVETODB = $study->CALCULATION_MODE == 1? SAVE_NUM_TO_DB_YES: SAVE_NUM_TO_DB_NO;

        $sEquip->STDEQP_WIDTH = -1;
        $sEquip->STDEQP_LENGTH = -1;

        $sEquip->save();

        // @TODO: JAVA initCalculationParameters(idUser, sEquip, productshape, nbComp);
        $defaultCalcParams = CalculationParametersDef::find($this->auth->user()->ID_USER);
        
        $calcParams = new CalculationParameter();
        $calcParams->ID_STUDY_EQUIPMENTS = $sEquip->ID_STUDY_EQUIPMENTS;
        
        // Fixed alpha value
        $calcParams->STUDY_ALPHA_TOP_FIXED = $defaultCalcParams->STUDY_ALPHA_TOP_FIXED_DEF;
        $calcParams->STUDY_ALPHA_BOTTOM_FIXED = $defaultCalcParams->STUDY_ALPHA_BOTTOM_FIXED_DEF;
        $calcParams->STUDY_ALPHA_LEFT_FIXED = $defaultCalcParams->STUDY_ALPHA_LEFT_FIXED_DEF;
        $calcParams->STUDY_ALPHA_RIGHT_FIXED = $defaultCalcParams->STUDY_ALPHA_RIGHT_FIXED_DEF;
        $calcParams->STUDY_ALPHA_FRONT_FIXED = $defaultCalcParams->STUDY_ALPHA_FRONT_FIXED_DEF;
        $calcParams->STUDY_ALPHA_REAR_FIXED = $defaultCalcParams->STUDY_ALPHA_REAR_FIXED_DEF;

        $calcParams->STUDY_ALPHA_TOP = $defaultCalcParams->STUDY_ALPHA_TOP_DEF;
        $calcParams->STUDY_ALPHA_BOTTOM = $defaultCalcParams->STUDY_ALPHA_BOTTOM_DEF;
        $calcParams->STUDY_ALPHA_RIGHT = $defaultCalcParams->STUDY_ALPHA_RIGHT_DEF;
        $calcParams->STUDY_ALPHA_LEFT = $defaultCalcParams->STUDY_ALPHA_LEFT_DEF;
        $calcParams->STUDY_ALPHA_FRONT = $defaultCalcParams->STUDY_ALPHA_FRONT_DEF;
        $calcParams->STUDY_ALPHA_REAR = $defaultCalcParams->STUDY_ALPHA_REAR_DEF;
        
        // Brain calculation parameters
        $calcParams->HORIZ_SCAN = $defaultCalcParams->HORIZ_SCAN_DEF;
        $calcParams->VERT_SCAN = $defaultCalcParams->VERT_SCAN_DEF;
        $calcParams->MAX_IT_NB = $defaultCalcParams->MAX_IT_NB_DEF;
        $calcParams->RELAX_COEFF = $defaultCalcParams->RELAX_COEFF_DEF;
        
        $calcParams->STOP_TOP_SURF = $defaultCalcParams->STOP_TOP_SURF_DEF;
        $calcParams->STOP_INT = $defaultCalcParams->STOP_INT_DEF;
        $calcParams->STOP_BOTTOM_SURF = $defaultCalcParams->STOP_BOTTOM_SURF_DEF;
        $calcParams->STOP_AVG = $defaultCalcParams->STOP_AVG_DEF;
        
        $calcParams->TIME_STEPS_NB = $defaultCalcParams->TIME_STEPS_NB_DEF;
        $calcParams->STORAGE_STEP = $defaultCalcParams->STORAGE_STEP_DEF;
        $calcParams->PRECISION_LOG_STEP = $defaultCalcParams->PRECISION_LOG_STEP_DEF;
        
        // Get default values according to product and equipment
        $defPrecision = $this->GetDefaultPrecision(
            $productshape,
            $study->products->first()->productElmts->count(),
            $sEquip->equipment->ITEM_PRECIS
        );

        $calcParams->PRECISION_REQUEST = $defPrecision;
        
        $defTimeStep = $this->GetDefaultTimeStep($sEquip->equipment->ITEM_TIME_STEP);
        $calcParams->TIME_STEP = $defTimeStep;
        
        $calcParams->save();

        $sEquip->ID_CALC_PARAMS = $calcParams->ID_CALC_PARAMS;
        $sEquip->save();
        
        $TRType = $equip->ITEM_TR;
        $TSType = $equip->ITEM_TS;
        $VCType = $equip->ITEM_VC;
        
        $tr = []; //double
        $ts = []; //double
        
        if ($equip->STD != EQUIP_STANDARD) {
            // TODO: generated non-standard equipment is not supported yet
        } else {
            // standard equipment
            $tr = $this->getEqpPrmInitialData(array_fill(0, $equip->NB_TR, 0.0), $TRType, false);
            $ts = $this->getEqpPrmInitialData(array_fill(0, $equip->NB_TS, 0.0), $TSType, true);	
        }

        $vc = $this->getEqpPrmInitialData(array_fill(0, $equip->NB_VC, 0.0), $VCType, false);
		//number of DH = number of TR
        $dh = $this->getEqpPrmInitialData(array_fill(0, $equip->NB_TR, 0.0), 0, false);
        $TExt = doubleval($tr[0]);

        // set equipment data
        // clear first
        StudEqpPrm::where('ID_STUDY_EQUIPMENTS', $sEquip->ID_STUDY_EQUIPMENTS)->delete();

        foreach ($tr as $trValue) {
            $p = new StudEqpPrm();
            $p->ID_STUDY_EQUIPMENTS = $sEquip->ID_STUDY_EQUIPMENTS;
            $p->VALUE_TYPE = REGULATION_TEMP;
            $p->VALUE = $trValue;
            $p->save();
        }

        foreach ($ts as $tsValue) {
            $p = new StudEqpPrm();
            $p->ID_STUDY_EQUIPMENTS = $sEquip->ID_STUDY_EQUIPMENTS;
            $p->VALUE_TYPE = DWELLING_TIME;
            $p->VALUE = $tsValue;
            $p->save();
        }

        foreach ($vc as $vcValue) {
            $p = new StudEqpPrm();
            $p->ID_STUDY_EQUIPMENTS = $sEquip->ID_STUDY_EQUIPMENTS;
            $p->VALUE_TYPE = CONVECTION_SPEED;
            $p->VALUE = $vcValue;
            $p->save();
        }

        foreach ($dh as $dhValue) {
            $p = new StudEqpPrm();
            $p->ID_STUDY_EQUIPMENTS = $sEquip->ID_STUDY_EQUIPMENTS;
            $p->VALUE_TYPE = ENTHALPY_VAR;
            $p->VALUE = $dhValue;
            $p->save();
        }

        if ( true ) {
            $p = new StudEqpPrm();
            $p->ID_STUDY_EQUIPMENTS = $sEquip->ID_STUDY_EQUIPMENTS;
            $p->VALUE_TYPE = EXHAUST_TEMP;
            $p->VALUE = $TExt;
            $p->save();
        }

        $position = POSITION_PARALLEL;
        
        // if (this . stdBean . isStudyHasParent()) {
		// 	// Chaining : use orientation from parent equip
        //     position = stdBean . ParentProdPosition;
        // } else {
			// no chaining : force standard orientation depending on the shape
        $position = (($productshape == CYLINDER_LAYING)
            || ($productshape == CYLINDER_CONCENTRIC_LAYING)
            || ($productshape == PARALLELEPIPED_LAYING))
            ? POSITION_NOT_PARALLEL
            : POSITION_PARALLEL;
        // }

        $lg = new LayoutGeneration();
        $lg->ID_STUDY_EQUIPMENTS = $sEquip->ID_STUDY_EQUIPMENTS;
        $lg->PROD_POSITION = $position;

        $equipWithSpecificSize = ( $sEquip->STDEQP_WIDTH != NO_SPECIFIC_SIZE ) && ($sEquip->STDEQP_LENGTH != NO_SPECIFIC_SIZE );

        if ($equipWithSpecificSize) {
            $lg->SHELVES_TYPE = SHELVES_USERDEFINED;
            $lg->SHELVES_LENGTH = $sEquip->STDEQP_LENGTH;
            $lg->SHELVES_WIDTH  = $sEquip->STDEQP_WIDTH;
        } else if ($sEquip->equipment->BATCH_PROCESS) {
            // default is now euronorme
            $lg->SHELVES_TYPE = SHELVES_EURONORME;
            $lg->SHELVES_LENGTH = SHELVES_EURO_LENGTH;
            $lg->SHELVES_WIDTH = SHELVES_EURO_WIDTH;
        } else {
            $lg->SHELVES_TYPE = SHELVES_USERDEFINED;
            $lg->SHELVES_LENGTH = $sEquip->equipment->EQP_LENGTH;
            $lg->SHELVES_WIDTH = $sEquip->equipment->EQP_WIDTH;
        }
        $lg->LENGTH_INTERVAL = INTERVAL_UNDEFINED;
        $lg->WIDTH_INTERVAL = INTERVAL_UNDEFINED;

        $lg->save();

        $sEquip->ID_LAYOUT_GENERATION = $lg->ID_LAYOUT_GENERATION;
        $sEquip->save();
        
        // $sEquip->setLayoutResults(dbdata . getLayoutResults($sEquip, $mmTop));
        $lr = new LayoutResults();
        $lr->ID_STUDY_EQUIPMENTS = $sEquip->ID_STUDY_EQUIPMENTS;
        $lr->LOADING_RATE = $mmTop->DEFAULT_VALUE;
        $lr->LOADING_RATE_MAX = $mmTop->LIMIT_MAX;
        $lr->save();

        $sEquip->ID_LAYOUT_RESULTS = $lr->ID_LAYOUT_RESULTS;
        $sEquip->save();

        // runLayoutCalculator(sEquip, username, password);
        $conf = $this->kernel->getConfig($this->auth->user()->ID_USER, $study->ID_STUDY, $sEquip->ID_STUDY_EQUIPMENTS);
        $lcRunResult = $this->kernel->getKernelObject('LayoutCalculator')->LCCalculation($conf, 1);

        $lcTSRunResult = -1;

        if ( ($sEquip->equipment->CAPABILITIES & CAP_VARIABLE_TS != 0) &&
            ($sEquip->equipment->CAPABILITIES & CAP_TS_FROM_TOC !=0) ) {
            $lcTSRunResult = $this->kernel->getKernelObject('LayoutCalculator')->LCCalculation($conf, 2);
        }

        //calculate TR = f( TS )
        $doTR = false;

        if (($sEquip->equipment->CAPABILITIES & CAP_VARIABLE_TR != 0)
            && ($sEquip->equipment->CAPABILITIES & CAP_TR_FROM_TS != 0)
            && ($sEquip->equipment->CAPABILITIES & CAP_PHAMCAST_ENABLE !=0)) {
            // log . debug("starting TR=f(TS) calculation");
            $doTR = true;
			//PhamCast: run automatic
            $conf = $this->kernel->getConfig($this->auth->user()->ID_USER, $study->ID_STUDY, $sEquip->ID_STUDY_EQUIPMENTS);
            $lcRunResult = $this->kernel->getKernelObject('PhamCastCalculator')->PCCCalculation($conf, $doTR);

            // if (calc . GetPCCError() != ValuesList . KERNEL_OK) {
            //     log . warn("automatic run of PhamCast failed");
            //     throw new OXException("ERROR_KERNEL_PHAMCAST");
            // } else {
				// Read result (i.e. tr) data from the DB
            // $tr = dbdata . loadEquipmentData(sEquip, StudEqpPrm . REGULATION_TEMP);
            // for (int i = 0; i < tr . length; i ++) {
            //     tr[i] = new Double(Math . floor(tr[i] . doubleValue()));
            // }
            // sEquip . setTr(tr);
            // }
            // $sEquip->fresh();
        }

        if (!$doTR
            && ($sEquip->equipment->CAPABILITIES & CAP_VARIABLE_TS != 0)
            && ($sEquip->equipment->CAPABILITIES & CAP_TS_FROM_TR != 0)
            && ($sEquip->equipment->CAPABILITIES & CAP_PHAMCAST_ENABLE != 0)) {
            // log . debug("starting TS=f(TR) calculation");
			//PhamCast: run automatic
            $conf = $this->kernel->getConfig($this->auth->user()->ID_USER, $study->ID_STUDY, $sEquip->ID_STUDY_EQUIPMENTS);
            $lcRunResult = $this->kernel->getKernelObject('PhamCastCalculator')->PCCCalculation($conf, $doTR);

            // if (calc . GetPCCError() != ValuesList . KERNEL_OK) {
            //     log . warn("automatic run of PhamCast failed");
            //     throw new OXException("ERROR_KERNEL_PHAMCAST");
            // } else {
			// 	// Read result (i.e. ts) data from the DB
            //     Double[] ts = dbdata . loadEquipmentData(sequip, StudEqpPrm . DWELLING_TIME);
            //     for (int i = 0; i < ts . length; i ++) {
            //         ts[i] = new Double(Math . floor(ts[i] . doubleValue()));
            //     }
            // $sEquip->fresh();
            // }
        }

        //run automatic calculation of exhaust gas temp
        // KernelToolsCalculation kerneltools = new KernelToolsCalculation(
        //     CryosoftDB . CRYOSOFT_DB_ODBCNAME,
        //     username,
        //     password,
        //     Ln2Servlet . getLogsDirectory() + "\\" + study . getStudyName() + "\\KT_ExhaustGasTempTr.txt",
        //     getUserID(),
        //     sequip . getStudy() . getIdStudy(),
        //     sequip . getIdStudyEquipments(),
        //     0
        // );

        // kerneltools . StartKTCalculation(true, KernelToolsCalculation . EXHAUST_GAS_TEMPERATURE);
        $conf = $this->kernel->getConfig($this->auth->user()->ID_USER, $study->ID_STUDY, $sEquip->ID_STUDY_EQUIPMENTS);
        $lcRunResult = $this->kernel->getKernelObject('KernelToolCalculator')->KTCalculator($conf, 1);

        $sEquip->fresh();

        $conf = $this->kernel->getConfig($this->auth->user()->ID_USER, intval($id), $sEquip->ID_STUDY_EQUIPMENTS);
        return $this->kernel->getKernelObject('StudyCleaner')->SCStudyClean($conf, 43);

        return $sEquip;
    }

    public function getTempRecordPts($id)
    {
        return TempRecordPts::where('ID_STUDY', $id)->first();
    }

    public function getProductElmt($id)
    {
        $productElmt = ProductElmt::where('ID_STUDY', $id)->first();

        return $productElmt;
    }

    /**
     * @param double[]
     * @param int
     * @param boolean
     */
    private function getEqpPrmInitialData (array $dd, int $type, $isTS) {
        // MinMax mm = (MinMax) retrieveApplValueList(type, 0, ValuesList . MINMAX);
        $mm = MinMax::where('LIMIT_ITEM', $type)->first();
        for ($i=0; $i < count($dd); $i++) {
            if ((($type > 0) && ($mm != null))) {
                $dd[$i] = doubleval($mm->DEFAULT_VALUE);
            } else {
                $dd[$i] = 0.0;
            }
        }
		
		// Special for multi_tr : apply a simple coeff : find something better in the future
        if (($isTS) && (count($dd) > 1)) {
            $MultiTRRatio = MinMax::where('LIMIT_ITEM', MIN_MAX_MULTI_TR_RATIO)->first();
            if ($MultiTRRatio != null) {
                $dd[0] = doubleval( doubleval($dd[0]) * $MultiTRRatio->DEFAULT_VALUE);
            }
        }

        return $dd;
    }

}
