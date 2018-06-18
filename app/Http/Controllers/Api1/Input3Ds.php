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

use Illuminate\Contracts\Auth\Factory as Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Mesh3DInfo;
use App\Models\ProductElmt;
use App\Models\Equipment;
use App\Models\Product;
use App\Models\InitTemp3D;
use App\Models\Study;


class Input3Ds extends Controller
{
    protected $request;
    protected $auth;
    protected $equip;
    protected $kernel;
    protected $unit;

    public function __construct(\Laravel\Lumen\Application $app)
    {
        $this->app = $app;
        $this->auth = $app['Illuminate\\Contracts\\Auth\\Factory'];
        $this->request = $app['Illuminate\\Http\\Request'];
        $this->equip = $app['App\\Cryosoft\\EquipmentsService'];
        $this->kernel = $app['App\\Kernel\\KernelService'];
        $this->unit = $app['App\\Cryosoft\\UnitsConverterService'];

    }

    public function getMesh3DInfo($idProd)
    {
        $mesh3dinfo = Mesh3DInfo::where('id_prod', $idProd)->first();
        return $mesh3dinfo;
    }

    public function initIso3DTemperature($idProd)
    {
        $input = $this->request->all();
        
        $product = Product::findOrFail($idProd);   

        if (isset($input['initTemp'])) $initTemp = $input['initTemp'];     

        if (!$product)
            throw new \Exception("Error Processing Request. Product ID not found", 1);

        $product->PROD_ISO = 1;
        $product->save();

        $prodElmts = ProductElmt::Where('ID_PROD', $idProd)->get();
        if (count($prodElmts) > 0) {
            for ($i = 0; $i < count($prodElmts); $i++) {

                $initTemp3D = InitTemp3D::Where('ID_PRODUCT_ELMT', $prodElmts[$i]->ID_PRODUCT_ELMT)->first();
                if (!$initTemp3D) {
                    $initTemp3D = new InitTemp3D();
                    $initTemp3D->ID_PRODUCT_ELMT = $prodElmts[$i]->ID_PRODUCT_ELMT;
                    $initTemp3D->MESH_POSITION = 0;
                }
                $initTemp3D->INIT_TEMP = floatval($this->unit->temperature($initTemp, ['save' => true]));
                $initTemp3D->save();
            }
        }

        // Run kernel 
        $conf = $this->kernel->getConfig($this->auth->user()->ID_USER, $product->ID_STUDY);
        $ok = $this->kernel->getKernelObject('InitTemperature')->IInitTemperature($conf);
        
        return $ok;
    }
}