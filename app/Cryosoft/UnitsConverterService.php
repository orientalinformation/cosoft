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

    public function getAllSymbol()
    {
        $productFlowSymbol = $this->productFlowSymbol();
        $massSymbol = $this->massSymbol();
        $temperatureSymbol = $this->temperatureSymbol();
        $timeSymbol = $this->timeSymbol();
        $perUnitOfMassSymbol = $this->perUnitOfMassSymbol();
        $enthalpySymbol = $this->enthalpySymbol();
        $percentSymbol = "%";
        $consumptionSymbol = "";
        $consumMaintienSymbol = "";
        $mefSymbol = "";

        return compact("productFlowSymbol", "massSymbol", "temperatureSymbol", "percentSymbol", "timeSymbol", "perUnitOfMassSymbol", "enthalpySymbol", "consumSymbol", "consumMaintienSymbol", "mefSymbol");
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

    public function enthalpySymbol() 
    {
        $unit = Unit::select("SYMBOL")->where("TYPE_UNIT", $this->value->ENTHALPY)->first();
        return $unit->SYMBOL;
    }

    public function consumptionSymbol($energy, $type) 
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

        $unit = Unit::select("SYMBOL")->where("TYPE_UNIT", $sUnitLabel)->first();
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
        return round(($value * $coeffA + $coeffB), $decimal, PHP_ROUND_HALF_DOWN);
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

    public function controlTemperature($value) {
        $unit = Unit::select("COEFF_A", "COEFF_B")->where("TYPE_UNIT", $this->value->TEMPERATURE)->first();
        return $this->convertCalculator($value, $unit->COEFF_A, $unit->COEFF_B, 0);
    }

    public function prodTemperature($value) {
        $unit = Unit::select("COEFF_A", "COEFF_B")->where("TYPE_UNIT", $this->value->TEMPERATURE)->first();
        return $this->convertCalculator($value, $unit->COEFF_A, $unit->COEFF_B, 1);
    }

    public function time($value) {
        $unit = Unit::select("COEFF_A", "COEFF_B")->where("TYPE_UNIT", $this->value->TIME)->first();
        return $this->convertCalculator($value, $unit->COEFF_A, $unit->COEFF_B, 1);
    }

    public function enthalpy($value) {
        $unit = Unit::select("COEFF_A", "COEFF_B")->where("TYPE_UNIT", $this->value->ENTHALPY)->first();
        return $this->convertCalculator($value, $unit->COEFF_A, $unit->COEFF_B, 3);
    }

    public function productFlow($value) {
        $unit = Unit::select("COEFF_A", "COEFF_B")->where("TYPE_UNIT", $this->value->PRODUCT_FLOW)->first();
        return $this->convertCalculator($value, $unit->COEFF_A, $unit->COEFF_B, 1);
    }

    public function toc($value) 
    {
        $uPercent = $this->uPercent();
        return $this->convertCalculator($value, $uPercent["coeffA"], $uPercent["coeffB"], 1);
    }

    public function precision($value) {
        $uNone = $this->uNone();
        return $this->convertCalculator($value, $uNone["coeffA"], $uNone["coeffB"], 3);
    }

    public function consumption($value, $energy, $type, $decimal = 2)
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

        return $this->unitConvert($sUnitLabel, $value, $decimal);
    }
}
