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
use App\Models\Unit;
use App\Models\UserUnit;

class UnitsService
{
    /**
    * @var Illuminate\Contracts\Auth\Factory
    */
    protected $auth;

    protected $app;

    protected $value;
    
    public function __construct(\Laravel\Lumen\Application $app)
    {
        $this->app = $app;
        $this->auth = $app['Illuminate\\Contracts\\Auth\\Factory'];
        $this->value = $app['App\\Cryosoft\\ValueListService'];
    }

    public function meshes($sValue, $status) 
    {
        $unit = Unit::where('TYPE_UNIT', $this->value->MESH_CUT)
        ->join('user_unit', 'Unit.ID_UNIT', '=', 'user_unit.ID_UNIT')
        ->where('user_unit.ID_USER', $this->auth->user()->ID_USER)
        ->first();
        $value = doubleval($sValue);
        $coeffA = $unit->COEFF_A;
        $coeffB = $unit->COEFF_B;
        if (intval($status) == 1) {
            if ($value != null) $value = ($value - $coeffB) * $coeffA;

            return round($value, 2);
        } else {
            if ($value != null) $value = ($value + $coeffB) / $coeffA;
            
            return $value;
        }
    }
}