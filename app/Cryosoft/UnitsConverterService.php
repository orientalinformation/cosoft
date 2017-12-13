<?php

namespace App\Cryosoft;

use App\Cryosoft\ValueListService;
use App\Models\Unit;


class UnitsConverterService
{
    public function __construct(ValueListService $valueService)
    {
        $this->value = $valueService;
    }

    public function productFlowSymbol() 
    {
    	$unit = Unit::select("SYMBOL")->where("TYPE_UNIT", $this->value->PRODUCT_FOLLOW)->first();
    	return $unit->SYMBOL;
    }

    public function massSymbol() 
    {
        $unit = Unit::select("SYMBOL")->where("TYPE_UNIT", $this->value->MASS)->first();
    	return $unit->SYMBOL;
    }

    public function temperatureSymbol() {
        $unit = Unit::select("SYMBOL")->where("TYPE_UNIT", $this->value->TEMPERATURE)->first();
    	return $unit->SYMBOL;
    }

    public function perUnitOfMassSymbol() 
	{
        $unit = Unit::select("SYMBOL")->where("TYPE_UNIT", $this->value->MASS_PER_UNIT)->first();
    	return $unit->SYMBOL;
    }
    
    public function timeSymbol() {
        $unit = Unit::select("SYMBOL")->where("TYPE_UNIT", $this->value->TIME)->first();
    	return $unit->SYMBOL;
    }

    public function unitConvert($unitType, $value, $decimal = 2)
    {
        $unit = Unit::select("COEFF_A", "COEFF_B")->where("TYPE_UNIT", $unitType)->first();
        if (!empty($unit)) 
            return $this->convertCalculator($value, $unit->COEFF_A, $unit->COEFF_B,  $decimal);
        else 
            return $value;
    }
    
    public function convertCalculator($value, $coeffA, $coeffB, $decimal = 2)
    {
        return round(($value * $coeffA + $coeffB), $decimal);
    }

    public function uNone()
    {
        return array(
            "coeffA" => "1.0",
            "coeffB" => "0.0",
            "symbol" => ""
        );
    }
    
    public function uPercent()
    {
        return array(
            "coeffA" => "100.0",
            "coeffB" => "0.0",
            "symbol" => "%"
        );
    }

    public function mass($value) 
    {
        $unit = Unit::select("COEFF_A", "COEFF_B")->where("TYPE_UNIT", $this->value->MASS)->first();
        return $this->convertCalculator($value, $unit->COEFF_A, $unit->COEFF_B, 3);
    }

    public function toc($value) 
    {
        $uPercent = $this->uPercent();
        return $this->convertCalculator($value, $uPercent["coeffA"], $uPercent["coeffB"], 1);
    }

    public function consumption($value, $energy, $type)
    {
        $sValue = "";
        $sUnitLabel = "";

        if ($energy == 2) {
            switch ($type) {
                case 1:
                    $sUnitLabel = $this->value->CONSUMPTION_UNIT_LN2;
                    break;
                case 2:
                    $sUnitLabel = $this->value->CONSUM_MAINTIEN_LN2;
                    break;
                case 3:
                    $sUnitLabel = $this->value->CONSUM_MEF_LN2;
                    break;
                default:
                    $sUnitLabel = $this->value->CONSUMPTION_UNIT_LN2;
                    break;
            }

        } else if ($energy == 3) {
            switch ($type) {
                case 1:
                    $sUnitLabel = $this->value->CONSUMPTION_UNIT_CO2;
                    break;
                case 2:
                    $sUnitLabel = $this->value->CONSUM_MAINTIEN_CO2;
                    break;
                case 3:
                    $sUnitLabel = $this->value->CONSUM_MEF_CO2;
                    break;
                default:
                    $sUnitLabel = $this->value->CONSUMPTION_UNIT_CO2;
                    break;

            }

        } else {
            switch ($type) {
                case 1:
                    $sUnitLabel = $this->value->CONSUMPTION_UNIT;
                    break;
                case 2:
                    $sUnitLabel = $this->value->CONSUM_MAINTIEN;
                    break;
                case 3:
                    $sUnitLabel = $this->value->CONSUM_MEF;
                    break;
                default:
                    $sUnitLabel = $this->value->CONSUMPTION_UNIT;
            }

        }

        return $this->unitConvert($sUnitLabel, $value);
    }
}
