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
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Factory as Auth;
use App\Models\StudyEquipment;
use App\Models\TempRecordPts;
use App\Models\TempRecordPtsDef;


class InputInitial3D extends Controller 
{
    protected $request;
    protected $auth;
    protected $cal;
    protected $product;
    protected $productElmts;
    protected $unit;

    public function __construct(\Laravel\Lumen\Application $app)
    {
        $this->app = $app;
        $this->auth = $app['Illuminate\\Contracts\\Auth\\Factory'];
        $this->request = $app['Illuminate\\Http\\Request'];
        $this->cal = $app['App\\Cryosoft\\CalculateService'];
        $this->product = $app['App\\Cryosoft\\ProductService'];
        $this->productElmts = $app['App\\Cryosoft\\ProductElementsService'];
        $this->unit = $app['App\\Cryosoft\\UnitsConverterService'];
    }
}