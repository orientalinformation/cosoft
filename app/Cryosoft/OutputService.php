<?php

namespace App\Cryosoft;

use App\Cryosoft\ValueListService;
use App\Cryosoft\UnitsConverterService;
use App\Models\TempRecordPts;
use App\Models\TempRecordData;

class OutputService
{
    public function __construct(\Laravel\Lumen\Application $app)
    {
        $this->app = $app;
        $this->value = $app['App\\Cryosoft\\ValueListService'];
        $this->unit = $app['App\\Cryosoft\\UnitsConverterService'];
    }


    public function calculateEchantillon($ldNbSample, $ldNbRecord, $lfDwellingTime, $lfTimeStep) 
    {
        $tdSamplePos = array();
        $pos = 0;
        $lfSampleTime = 0.0;

        if ($ldNbSample > $ldNbRecord) {
            $ldNbSample = $ldNbRecord;
        }

        $lfSampleTime = $lfDwellingTime / ($ldNbSample - 1);

        for ($i = 0; $i < $ldNbSample - 1; $i++) {
            $pos = round($i * $lfSampleTime / $lfTimeStep);
            $tdSamplePos[] = $pos;
        }

        $pos = $ldNbRecord - 1;
        $tdSamplePos[] = $pos;

        return $tdSamplePos;
    } 

    public function getTemperaturePosition($idRecPos, $axis1, $axis2)
    {
        return TempRecordData::where("ID_REC_POS", $idRecPos)->where("REC_AXIS_X_POS", $axis1)->where("REC_AXIS_Y_POS", $axis2)->where("REC_AXIS_Z_POS", 0)->first();
    }

    public function convertMeshForAppletDim($ldShape, $bIsParallel, $dbDim)
    {
        $appDim = [];
        switch ($ldShape) {
            case 1:
                $appDim = $dbDim;
                break;

            case 2:
            case 9:
                if ($bIsParallel) {
                    $appDim = array_reverse($dbDim);
                } else {
                    $appDim = $dbDim;
                }
                break;

            case 3:
                if ($bIsParallel) {
                    $appDim[0] = $dbDim[2];
                    $appDim[1] = $dbDim[0];
                    $appDim[2] = $dbDim[1];
                } else {
                    $appDim[0] = $dbDim[1];
                    $appDim[1] = $dbDim[0];
                    $appDim[2] = $dbDim[2];
                }
                break;

            case 4:
            case 5:
                $appDim[0] = $dbDim[0];
                $appDim[1] = $dbDim[1];
                $appDim[2] = [];
                break;

            case 7:
            case 8:
                $appDim[0] = $dbDim[1];
                $appDim[1] = $dbDim[0];
                $appDim[2] = [];
                break;

            case 6:
                $appDim[0] = [];
                $appDim[1] = $dbDim[1];
                $appDim[2] = [];
                break;

            default:
                $appDim[] = [[],[],[]];
                break;
        }


        return $appDim;
    }

    public function getSelectedMeshPoint($iType, $iObj)
    {
        
    }
}
