<?php

namespace App\Http\Controllers\Api1;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\Auth\Factory as Auth;
use Illuminate\Http\Request;
use App\Cryosoft\UnitsConverterService;
use App\Cryosoft\EquipmentsService;
use Carbon\Carbon;
use App\Models\Equipment;
use App\Models\Study;
use App\Models\Price;
use App\Models\PrecalcLdgRatePrm;
use App\Models\EquipGeneration;

class Equipments extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request, Auth $auth, UnitsConverterService $convert, EquipmentsService $equip)
    {
        $this->request = $request;
        $this->auth = $auth;
        $this->convert = $convert;
        $this->equip = $equip;
    }

    public function getEquipments()
    {
        $input = $this->request->all();

        //path params validation


        //not path params validation
        // $energy = $input['energy'];

        // $manufacturer = $input['manufacturer'];

        // $family = $input['family'];

        // $equip_origin = $input['equip_origin'];

        // $process_type = $input['process_type'];

        // $model = $input['model'];

        // $size = $input['size'];
        
        $equipments = \App\Models\Equipment::all()->toArray();

        return $equipments;
    }

    public function findRefEquipment()
    {
        $mine = Equipment::where('ID_USER', $this->auth->user()->ID_USER)->orderBy('EQUIP_NAME', 'ASC')->get();
        foreach ($mine as $key) {
            $key->capabilitiesCalc = $this->equip->getCapability($key->CAPABILITIES, 65536);
            $isCapa = $key->capabilitiesCalc;
            $equipGener = EquipGeneration::find($key->ID_EQUIPGENERATION);

            if ($isCapa) {
                if ($equipGener) { 
                    $key->DWELLING_TIME = doubleval($this->convert->time($equipGener->DWELLING_TIME));
                    $key->NEW_POS = doubleval($this->convert->time($equipGener->NEW_POS));
                } else {
                    $key->DWELLING_TIME = 0;
                    $key->NEW_POS = 0;
                }
                $key->TEMP_SETPOINT = 0;
            } else {
                if ($equipGener) { 
                    $key->TEMP_SETPOINT = doubleval($this->convert->controlTemperature($equipGener->TEMP_SETPOINT));
                    $key->NEW_POS = doubleval($this->convert->time($equipGener->NEW_POS));
                } else {
                    $key->TEMP_SETPOINT = 0;
                    $key->NEW_POS = 0;
                }
                $key->DWELLING_TIME = 0;
            }
            $key->timeSymbol = $this->convert->timeSymbolUser();
            $key->temperatureSymbol = $this->convert->temperatureSymbolUser();
        }
        $others = Equipment::where('ID_USER', '!=', $this->auth->user()->ID_USER)->orderBy('EQUIP_NAME', 'ASC')->get();
        foreach ($others as $key) {
            $key->capabilitiesCalc = $this->equip->getCapability($key->CAPABILITIES, 65536);
            $isCapa = $key->capabilitiesCalc;
            $equipGener = EquipGeneration::find($key->ID_EQUIPGENERATION);

            if ($isCapa) {
                if ($equipGener) { 
                    $key->DWELLING_TIME = doubleval($this->convert->time($equipGener->DWELLING_TIME));
                    $key->NEW_POS = doubleval($this->convert->time($equipGener->NEW_POS));
                } else {
                    $key->DWELLING_TIME = 0;
                    $key->NEW_POS = 0;
                }
                $key->TEMP_SETPOINT = 0;
            } else {
                if ($equipGener) { 
                    $key->TEMP_SETPOINT = doubleval($this->convert->controlTemperature($equipGener->TEMP_SETPOINT));
                    $key->NEW_POS = doubleval($this->convert->time($equipGener->NEW_POS));
                } else {
                    $key->TEMP_SETPOINT = 0;
                    $key->NEW_POS = 0;
                }
                $key->DWELLING_TIME = 0;
            }
            $key->timeSymbol = $this->convert->timeSymbolUser();
            $key->temperatureSymbol = $this->convert->temperatureSymbolUser();
        }
        return compact('mine', 'others');
    }

    public function newEquipment()
    {
        $mask = 1096;
        $capabilities = null;
        if ($this->equip->getCapability($capabilities, 65536)) {
            $mask |= 0x40002;
        } else {
            $mask |= 0x80001;
        }
        // var_dump($mask);die;
        $capabilities &= ($mask ^ 0xFFFFFFFFFFFFFFFF);

        // $current = Carbon::now('Asia/Ho_Chi_Minh');
        // $idUserLogon = $this->auth->user()->ID_USER;
        // $input = $this->request->all();

        // if (!isset($input['nameEquipment']) || !isset($input['versionEquipment']) || !isset($input['equipmentId1']) || !isset($input['equipmentId2']) 
        // || !isset($input['param1']) || !isset($input['param2']))
        //     throw new \Exception("Error Processing Request", 1);
        
        return 1;
    }

    /*** 
     * Studies Equipment
     *
     */

     public function getUnitData($id)
     {
        $study = Study::find($id);
        $priceEnergy = 0;
        if ($study) {
            $idPrice = $study->ID_PRICE;
            if ($idPrice == 0 || !$idPrice) {
                $priceEnergy = 0;
            } else {
                $price = Price::find($idPrice);

                if ($price) { $priceEnergy = $price->ENERGY; }
            }
            $idRatePrm = $study->ID_PRECALC_LDG_RATE_PRM;
            $intervalW = 0;
            $intervalL = 0;
            if ($idRatePrm == 0 || !$idRatePrm) {
                $intervalW = 0;
                $intervalL = 0;
            } else {
                $precalcLdgRatePrm = PrecalcLdgRatePrm::find($idRatePrm);

                if ($precalcLdgRatePrm) {
                    $intervalW = $precalcLdgRatePrm->W_INTERVAL;
                    $intervalL = $precalcLdgRatePrm->L_INTERVAL;
                }
            }
        }

        if ($priceEnergy != 0) { $priceEnergy =  $this->convert->monetary($priceEnergy); }

        if ($intervalW != 0) { $intervalW = $this->convert->prodchartDimension($intervalW); }

        if ($intervalL != 0) { $intervalL = $this->convert->prodchartDimension($intervalL); }

        $res = [
            'Price' => doubleval($priceEnergy),
            'IntervalWidth' => doubleval($intervalW),
            'IntervalLength' => doubleval($intervalL),
            'MonetarySymbol' => $this->convert->monetarySymbol(),
            'DimensionSymbol' => $this->convert->prodchartDimensionSymbol()
        ];

        return $res;
     }

     public function updatePrice($id)
     {
        $input = $this->request->all();

        if (!isset($input['price']))
            throw new \Exception("Error Processing Request", 1);

        if (isset($input['price'])) $priceEnergy = doubleval($input['price']); 

        if ($priceEnergy) {
            $study = Study::find($id);
            if ($study) {
                $price = Price::find($study->ID_PRICE);
                if ($price) {
                    $uMoney = $this->convert->uMoney();
                    if ($uMoney) {
                        $apply1 = 1 * ($uMoney["coeffA"]) + ($uMoney["coeffB"]);
                        if ($apply1 != 0) {
                            $priceEnergy = $priceEnergy / $apply1;
                        }                        
                        $price->ENERGY = $priceEnergy;
                        $price->update();
                    }
                }
            }

            return 1;
        } else {

            return 0;
        }
     }

     public function updateInterval($id)
     {
        $input = $this->request->all();

        if (!isset($input['lenght']) || !isset($input['width']))
            throw new \Exception("Error Processing Request", 1);

        if (isset($input['lenght'])) $lenght = doubleval($input['lenght']); 

        if (isset($input['width'])) $width = doubleval($input['width']);

        if ($lenght && $width) {
            $study = Study::find($id);
            if ($study) {
                $precalcLdgRatePrm = PrecalcLdgRatePrm::find($study->ID_PRECALC_LDG_RATE_PRM);

                if ($precalcLdgRatePrm) {
                    $precalcLdgRatePrm->W_INTERVAL = $width;
                    $precalcLdgRatePrm->L_INTERVAL = $lenght;
                    $precalcLdgRatePrm->update();
                }
            }
            return 1;
        } else {

            return 0;
        }
     }

}
