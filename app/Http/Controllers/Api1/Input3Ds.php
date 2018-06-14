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
use App\Models\Equipment;
use App\Models\Study;
use App\Models\Mesh3DInfo;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Factory as Auth;


class Input3Ds extends Controller
{
    protected $request;
    protected $auth;
    protected $equip;
    protected $kernel;

    public function __construct(\Laravel\Lumen\Application $app)
    {
        $this->app = $app;
        $this->auth = $app['Illuminate\\Contracts\\Auth\\Factory'];
        $this->request = $app['Illuminate\\Http\\Request'];
        $this->equip = $app['App\\Cryosoft\\EquipmentsService'];
        $this->kernel = $app['App\\Kernel\\KernelService'];
    }

    public function getMesh3DInfo($idProd)
    {
    	$mesh3dinfo = Mesh3DInfo::where('id_prod', $idProd)->first();
    	return $mesh3dinfo;
    }
}