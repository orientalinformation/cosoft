<?php

namespace App\Http\Controllers\Api1;

use App\Http\Controllers\Controller;
use App\Models\MeshGeneration;
use App\Models\Product;
use App\Models\Production;
use App\Models\Packing;
use App\Models\Study;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Factory as Auth;
use App\Kernel\KernelService;
use App\Cryosoft\UnitsConverterService;
use App\Cryosoft\ValueListService;
use App\Models\MinMax;

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
    * 
    **/
    public function getStudyEquipments($id) 
    {
        $study = \App\Models\Study::find($id);
        return $study->studyEquipments;
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
        $study->save();

        $nbMF 					= (float) MinMax::where('LIMIT_ITEM', $this->value->MIN_MAX_DAILY_STARTUP)->first()->DEFAULT_VALUE;
        $nbWeekPeryear 		    = (float) MinMax::where('LIMIT_ITEM', $this->value->MIN_MAX_PROD_WEEK_PER_YEAR)->first()->DEFAULT_VALUE;
        $nbheures 			    = (float) MinMax::where('LIMIT_ITEM', $this->value->MIN_MAX_PRODUCT_DURATION)->first()->DEFAULT_VALUE;
        $nbjours 				= (float) MinMax::where('LIMIT_ITEM', $this->value->MIN_MAX_WEEKLY_PRODUCTION)->first()->DEFAULT_VALUE;
        $humidity 			    = (float) MinMax::where('LIMIT_ITEM', $this->value->MIN_MAX_AMBIENT_HUM)->first()->DEFAULT_VALUE;
        $dailyProductFlow 	    = (float) MinMax::where('LIMIT_ITEM', $this->value->MIN_MAX_FLOW_RATE)->first()->DEFAULT_VALUE;
        $avTempDesired 		    = (float) MinMax::where('LIMIT_ITEM', $this->value->MIN_MAX_AVG_TEMPERATURE_DES)->first()->DEFAULT_VALUE;
        $temp 					= (float) MinMax::where('LIMIT_ITEM', $this->value->MIN_MAX_TEMP_AMBIANT)->first()->DEFAULT_VALUE;

        $production->DAILY_STARTUP = $nbMF;
        $production->DAILY_PROD = $nbheures;
        $production->NB_PROD_WEEK_PER_YEAR = $nbWeekPeryear;
        $production->WEEKLY_PROD = $nbjours;
        $production->AMBIENT_HUM = $humidity;
        $production->PROD_FLOW_RATE = $dailyProductFlow;
        $production->AVG_T_DESIRED = $avTempDesired;
        $production->AMBIENT_TEMP = $temp;
        $production->ID_STUDY = $study->ID_STUDY;
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

        $study->ID_PROD = $product->ID_PROD;
        $study->ID_PRODUCTION = $production->ID_PRODUCTION;
        $study->save();

        return $study;
    }

    public function recentStudies() {
        $studies = Study::where('ID_USER',$this->auth->user()->ID_USER)->orderBy('ID_STUDY', 'desc')->take(5)->get();
        return $studies;
    }
}
