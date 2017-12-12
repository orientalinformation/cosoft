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
    	$unit = Unit::where("TYPE_UNIT", $this->value->PRODUCT_FOLLOW)->first();
    	return $unit->SYMBOL;
    }

    public function massSymbol() 
    {
        $unit = Unit::where("TYPE_UNIT", $this->value->MASS)->first();
    	return $unit->SYMBOL;
    }

    public function temperatureSymbol() {
        $unit = Unit::where("TYPE_UNIT", $this->value->TEMPERATURE)->first();
    	return $unit->SYMBOL;
    }

    public function perUnitOfMassSymbol() 
	{
        $unit = Unit::where("TYPE_UNIT", $this->value->MASS_PER_UNIT)->first();
    	return $unit->SYMBOL;
    }
    
    public function timeSymbol() {
        $unit = Unit::where("TYPE_UNIT", $this->value->TIME)->first();
    	return $unit->SYMBOL;
    }
}
