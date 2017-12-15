<?php

namespace App\Cryosoft;

use App\Cryosoft\ValueListService;
use App\Cryosoft\UnitsConverterService;

class EconomicResultsService
{
    public function __construct(ValueListService $valueService, UnitsConverterService $unitConverter)
    {
        $this->value = $valueService;
        $this->unit = $unitConverter;
    }


    public function isConsoToDisplay($dimaStatus, $equipStatus)
    {
        $dimaStatus = $dimaStatus & 0xFFFF;
        $ldStatus = true;
      
        if ($equipStatus == 1) {
            if ($equipStatus != 0) {
                if ($equipStatus == 1) {
                    $ldStatus = true;
                } else if (($equipStatus & 0x100) != 0)
                {
                    $ldStatus = false;
                } else
                {
                    $ldStatus = true;
                }     

            } else {
                $ldStatus = false;
            }

        } else {
            $ldStatus = false;
        }
      
      return $ldStatus;
    }    
}
