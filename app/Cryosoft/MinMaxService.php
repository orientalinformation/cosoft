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
    
    protected $convert;
    
    public function __construct(\Laravel\Lumen\Application $app)
    {
        $this->app = $app;
        $this->auth = $app['Illuminate\\Contracts\\Auth\\Factory'];
        $this->value = $app['App\\Cryosoft\\ValueListService'];
        $this->units = $app['App\\Cryosoft\\UnitsService'];
        $this->convert = $app['App\\Cryosoft\\UnitsConverterService'];
    }

    public function getMinMaxMesh($limitItem)
    {  
        $minMax = MinMax::where('LIMIT_ITEM', intval($limitItem))->first();
        $minMax->LIMIT_MAX = $this->units->meshes($minMax->LIMIT_MAX, 1);
        $minMax->LIMIT_MIN = $this->units->meshes($minMax->LIMIT_MIN, 1);
        $minMax->DEFAULT_VALUE = $this->units->meshes($minMax->DEFAULT_VALUE, 1);

        return $minMax; 
    }
    
    public function getMinMaxPressure($limitItem)
    {  
        $minMax = MinMax::where('LIMIT_ITEM', intval($limitItem))->first();
        $minMax->LIMIT_MAX = $this->convert->pressure($minMax->LIMIT_MAX);
        $minMax->LIMIT_MIN = $this->convert->pressure($minMax->LIMIT_MIN);
        $minMax->DEFAULT_VALUE = $this->convert->pressure($minMax->DEFAULT_VALUE);

        return $minMax; 
    }
    
    public function getMinMaxHeight($limitItem)
    {  
        $minMax = MinMax::where('LIMIT_ITEM', intval($limitItem))->first();
        $minMax->LIMIT_MAX = $this->convert->materialRise($minMax->LIMIT_MAX);
        $minMax->LIMIT_MIN = $this->convert->materialRise($minMax->LIMIT_MIN);
        $minMax->DEFAULT_VALUE = $this->convert->materialRise($minMax->DEFAULT_VALUE);

        return $minMax; 
    }

    public function getMinMaxLineDimention($limitItem)
    {  
        $minMax = MinMax::where('LIMIT_ITEM', intval($limitItem))->first();
        $minMax->LIMIT_MAX = $this->convert->lineDimension($minMax->LIMIT_MAX);
        $minMax->LIMIT_MIN = $this->convert->lineDimension($minMax->LIMIT_MIN);
        $minMax->DEFAULT_VALUE = $this->convert->lineDimension($minMax->DEFAULT_VALUE);

        return $minMax; 
    }

    public function getMinMaxNoneLine($limitItem)
    {  
        $minMax = MinMax::where('LIMIT_ITEM', intval($limitItem))->first();
        $minMax->LIMIT_MAX = $this->convert->none($minMax->LIMIT_MAX);
        $minMax->LIMIT_MIN = $this->convert->none($minMax->LIMIT_MIN);
        $minMax->DEFAULT_VALUE = $this->convert->none($minMax->DEFAULT_VALUE);

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