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
use App\Cryosoft\EquipmentsService;

class CheckWarnings extends Controller 
{
    protected $request;
    protected $auth;
    protected $equip;

    public function __construct(\Laravel\Lumen\Application $app)
    {
        $this->app = $app;
        $this->auth = $app['Illuminate\\Contracts\\Auth\\Factory'];
        $this->request = $app['Illuminate\\Http\\Request'];
        $this->equip = $app['App\\Cryosoft\\EquipmentsService'];
    }

    public function checkWarningEquipment()
    {
        $input = $this->request->all();

        $message = 1;
        $check = false;
        if (isset($input['idEquip'])) $idEquip = $input['idEquip'];
        if (isset($input['idStudy'])) $idStudy = $input['idStudy'];

        $equipment = Equipment::find($idEquip);
        if ($equipment) {
            if ($this->equip->getCapability($equipment->CAPABILITIES, 16384)) {
                //Air Blast Freezer 35W - (4.00x5.00) / Active show popup
            }

            if ($equipment->STD == 0) {
                $check = true;
                $message = 'This is a generated equipment. The setpoint is fixed to value used during generation.';

                if ($this->equip->getCapability($equipment->CAPABILITIES, 65536)) {
                    $check = true;
                    $message = 'This is a generated equipment. The generation setpoint is used for first calculations. You can adjust the setpoint by hand.';
                    return [
                        'Message' => $message,
                    ];
                }
            }

            if ((!$this->equip->getCapability($equipment->CAPABILITIES, 8)) || 
                (($this->equip->getCapability($equipment->CAPABILITIES, 1)) && 
                (!$this->equip->getCapability($equipment->CAPABILITIES, 524288)) && 
                ($this->equip->getCapability($equipment->CAPABILITIES, 2)) && 
                (!$this->equip->getCapability($equipment->CAPABILITIES, 131072)) &&
                (!$this->equip->getCapability($equipment->CAPABILITIES, 262144)))) {
                $check = true;
                $message = 'This equipment does not allow to use the assistant of calculation of the couple
                            "dwelling time/temperature setpoint". 
                            Displayed values are default values of couple "dwelling time/temperature setpoint"';
                return [
                    'Message' => $message,
                ];
            }
        }
        
        if ($check) {
            return [
                'Message' => $message,
            ];
        }
        return $message;
    }
}