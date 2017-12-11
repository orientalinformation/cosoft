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
    	$product = \App\Models\Product::find($id);
    	return $product->productElmts;
    }

    public function appendElementsToProduct($id) {
    	$input = $this->request->all();

        $componentId = $input['componentId'];
        $product = \App\Models\Product::find($id);

    	$elmt = new ProductElmt();
    	$elmt->ID_PROD = $id;
    	$elmt->ID_SHAPE = 1;
    	$elmt->ID_COMP = $componentId;
    	$elmt->PROD_ELMT_ISO = $product->PROD_ISO;
    	$elmt->SHAPE_PARAM2 = 0.01;
    	$elmt->PROD_ELMT_WEIGHT = 0.0;
    	$elmt->PROD_ELMT_REALWEIGHT = -1.0;
    	$elmt->save();

    	$elmtId = $elmt->ID_PRODUCT_ELMT;

        $conf = $this->kernel->getConfig($this->auth->user()->ID_USER, intval($id), $elmt->ID_PRODUCT_ELMT);

        $ok1 = $this->kernel->getKernelObject('WeightCalculator')->WCWeightCalculation($conf, 2);
        $conf->ldIdTmp = 0;

        $ok2 = $this->kernel->getKernelObject('WeightCalculator')->WCWeightCalculation($conf, 3);
        // $ok3 = $this->kernel->getKernelObject('WeightCalculator')->WCWeightCalculation($conf, 4);

        return compact('ok1','ok2','ok3', 'elmtId');
    }
}
