<?php

namespace App\Http\Controllers\Api1;

use App\Http\Controllers\Controller;
use App\Models\ProductElmt;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Factory as Auth;

use App\Kernel\KernelService;

class Products extends Controller
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
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request, Auth $auth, KernelService $kernel)
    {
        $this->request = $request;
        $this->auth = $auth;
        $this->kernel = $kernel;
    }

    public function getProductById($id) {
        $product = \App\Models\Product::find($id);
        return $product;
    }

    public function getElementsByProductId($id) {
    	$elements = \App\Models\ProductElmt::where('ID_PROD', $id)->orderBy('SHAPE_POS2','DESC')->get();
    	return $elements;
    }

    public function appendElementsToProduct($id) {
    	$input = $this->request->all();

        $componentId = $input['componentId'];
        $product = \App\Models\Product::find($id);

    	$elmt = new ProductElmt();
    	$elmt->ID_PROD = $id;
    	$elmt->ID_SHAPE = $input['shapeId'];
    	$elmt->ID_COMP = $componentId;
    	$elmt->PROD_ELMT_ISO = $product->PROD_ISO;
        $elmt->SHAPE_PARAM2 = 0.01; //default 1cm
        
        if (isset($input['dim1']))
            $elmt->SHAPE_PARAM1 = floatval($input['dim1']);
            
        if (isset($input['dim3']))
            $elmt->SHAPE_PARAM3 = floatval($input['dim3']);
            
    	$elmt->PROD_ELMT_WEIGHT = 0.0;
    	$elmt->PROD_ELMT_REALWEIGHT = -1.0;
    	$elmt->NODE_DECIM = 0; // @TODO: research more on nodeDecim
        $elmt->INSERT_LINE_ORDER = $product->ID_STUDY;
        
        $nElements = \App\Models\ProductElmt::where('ID_PROD', $id)->count();
        $elmt->SHAPE_POS2 = floatval($nElements) / 100.0;

    	$elmt->save();

        $elmtId = $elmt->ID_PRODUCT_ELMT;

        $conf = $this->kernel->getConfig($this->auth->user()->ID_USER, intval($id), $elmt->ID_PRODUCT_ELMT);

        $ok1 = $this->kernel->getKernelObject('WeightCalculator')->WCWeightCalculation($conf, 2);
        $conf->ldIdTmp = 0;

        $ok2 = $this->kernel->getKernelObject('WeightCalculator')->WCWeightCalculation($conf, 3);
        $ok2 = $this->kernel->getKernelObject('WeightCalculator')->WCWeightCalculation($conf, 4);

        return compact('ok1', 'ok2', 'elmtId');
    }

    public function getProductViewModel($id) {
        $product = \App\Models\Product::find($id);
        $elements = \App\Models\ProductElmt::where('ID_PROD', $id)->orderBy('SHAPE_POS2', 'DESC')->get();
        $specificDimension = 0.0;

        foreach ($elements as $elmt) {
            $specificDimension += $elmt->SHAPE_PARAM2;
        }

        return compact('product', 'elements', 'specificDimension');
    }

    public function removeProductElement($id)
    {
        $input = $this->request->all();
        if (!isset($input['elementId'])) {
            throw new Exception("Error Processing Request", 500);
        }
        
        $elementId = $input['elementId'];
        \App\Models\ProductElmt::destroy($elementId);

        $elements = \App\Models\ProductElmt::where('ID_PROD', $id)->orderBy('SHAPE_POS2')->get();

        foreach ($elements as $index => $elmt) {
            $elmt->SHAPE_POS2 = floatval($index) / 100;
            $elmt->save();
        }

        // call kernel recalculate weight
        $conf = $this->kernel->getConfig($this->auth->user()->ID_USER, intval($id));
        $ok2 = $this->kernel->getKernelObject('WeightCalculator')->WCWeightCalculation($conf, 3);
        return $this->kernel->getKernelObject('WeightCalculator')->WCWeightCalculation($conf, 4);
    }
}
