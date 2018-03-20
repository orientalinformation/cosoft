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
namespace App\Cryosoft;

use Illuminate\Contracts\Auth\Factory as Auth;
use App\Models\MinMax;

class MinMaxService
{
    /**
    * @var Illuminate\Contracts\Auth\Factory
    */
    protected $auth;

    protected $app;

    protected $value;

    protected $units;
    
    public function __construct(\Laravel\Lumen\Application $app)
    {
        $this->app = $app;
        $this->auth = $app['Illuminate\\Contracts\\Auth\\Factory'];
        $this->value = $app['App\\Cryosoft\\ValueListService'];
        $this->units = $app['App\\Cryosoft\\UnitsService'];
    }

    public function getMinMaxMesh($limitItem)
    {  
        $minMax = MinMax::where('LIMIT_ITEM', intval($limitItem))->first();
        $minMax->LIMIT_MAX = $this->units->meshes($minMax->LIMIT_MAX, 1);
        $minMax->LIMIT_MIN = $this->units->meshes($minMax->LIMIT_MIN, 1);
        $minMax->DEFAULT_VALUE = $this->units->meshes($minMax->DEFAULT_VALUE, 1);

        return $minMax; 
    }

    public function checkMinMaxValue($value, $limitItem)
    {
        $minMax = MinMax::where('LIMIT_ITEM', intval($limitItem))->first();

        if (doubleval($value) < round($minMax->LIMIT_MIN, 2) || doubleval($value) > round($minMax->LIMIT_MAX, 2)) {
            return false;
        } else {
            return true;
        }
    }
}