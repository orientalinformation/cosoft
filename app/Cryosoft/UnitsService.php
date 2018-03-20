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

    public function meshes($value, $status) 
    {
        $unit = Unit::where('TYPE_UNIT', $this->value->MESH_CUT)
        ->join('user_unit', 'Unit.ID_UNIT', '=', 'user_unit.ID_UNIT')
        ->where('user_unit.ID_USER', $this->auth->user()->ID_USER)
        ->first();
        $value = doubleval($value);
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

    public function prodTemperature($value, $status)
    {
        $unit = Unit::where('TYPE_UNIT', $this->value->TEMPERATURE)
        ->join('user_unit', 'Unit.ID_UNIT', '=', 'user_unit.ID_UNIT')
        ->where('user_unit.ID_USER', $this->auth->user()->ID_USER)
        ->first();
        
        if ($status == 1) {
            return $this->convertCalculator($value, $unit->COEFF_A, $unit->COEFF_B, 1);
        } else {
            return $this->convertCalculator($value, $unit->COEFF_A, $unit->COEFF_B, 0);
        }
    }

    public function time($value, $status) {
        $unit = Unit::where('TYPE_UNIT', $this->value->TIME)
        ->join('user_unit', 'Unit.ID_UNIT', '=', 'user_unit.ID_UNIT')
        ->where('user_unit.ID_USER', $this->auth->user()->ID_USER)
        ->first();

        if ($status == 1) {
            return $this->convertCalculator($value, $unit->COEFF_A, $unit->COEFF_B, 1);
        } else {
            return $this->convertCalculator($value, $unit->COEFF_A, $unit->COEFF_B, 0);
        }
    }

    public function convertCalculator($value, $coeffA, $coeffB, $status)
    {
        if ($status == 1) {
            $number = $value * $coeffA + $coeffB;
        } else {
            $number = $value / $coeffA - $coeffB;
        }
        
        if (floor( $value ) != $value) {
            $number = round(($number), 2, PHP_ROUND_HALF_UP);
            $number = floor($number * pow(10, 2)) / pow(10, 2);
        } else {
            $number = round(($value * $coeffA + $coeffB), 2);
        }

        return number_format((float)$number, 2, '.', '');
    }

}