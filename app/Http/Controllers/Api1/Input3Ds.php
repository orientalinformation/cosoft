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
    protected $value;

    public function __construct(\Laravel\Lumen\Application $app)
    {
        $this->app = $app;
        $this->auth = $app['Illuminate\\Contracts\\Auth\\Factory'];
        $this->request = $app['Illuminate\\Http\\Request'];
        $this->equip = $app['App\\Cryosoft\\EquipmentsService'];
        $this->kernel = $app['App\\Kernel\\KernelService'];
        $this->units = $app['App\\Cryosoft\\UnitsService'];
        $this->values = $app['App\\Cryosoft\\ValueListService'];

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
                $initTemp3D->INIT_TEMP = floatval($this->units->temperature($initTemp, 16, 1));
                $initTemp3D->save();
            }
        }

        // Run kernel 
        $conf = $this->kernel->getConfig($this->auth->user()->ID_USER, $product->ID_STUDY);
        $ok = $this->kernel->getKernelObject('InitTemperature')->ITInitTemperature($conf);
        
        return $ok;
    }

    public function initNonIso3DTemperature($idProd)
    {
        $product = Product::findOrFail($idProd);
        $study = $product->study;
        $input = $this->request->json()->all();

        $elements = [];
        $product->PROD_ISO = $this->values->PROD_NOT_ISOTHERM;
        $product->save();
        $idx = -1;
        $jdx = -1;

        if (isset($input['elements'])) $elements = $input['elements'];

        foreach ($elements as $elmt) {
            $idx++;
            $elmt['initTemp'] = $input['productElmtInitTemp'][$idx];
            $elmt['positions'] = $input['initTempPositions'][$idx];

            $pemlt = ProductElmt::findOrFail($elmt['ID_PRODUCT_ELMT']);
            
            $initTemp3Ds = InitTemp3D::where('ID_PRODUCT_ELMT', $elmt['ID_PRODUCT_ELMT'])->get();
            if (count($initTemp3Ds) > 0) {
                foreach ($initTemp3Ds as $init3d) {
                    $jdx++;
                    $init3d->INIT_TEMP = floatval($this->units->temperature($elmt['initTemp'][$jdx], 16, 1));
                    if ($elmt['PROD_ELMT_ISO'] == $this->values->PRODELT_ISOTHERM) {
                        $pemlt->PROD_ELMT_ISO = $this->values->PRODELT_ISOTHERM;
                        $pemlt->save();
                    } else {
                        $init3d->MESH_POSITION = $this->units->meshes($elmt['positions'][$jdx], 16, 1);
                        // save Flag ProdElmt NON ISO to 2
                        $pemlt->PROD_ELMT_ISO = $this->values->PRODELT_NOT_ISOTHERM;
                        $pemlt->save();
                    }

                    $init3d->save();
                }
            }
        }

        return 1;
    }
}