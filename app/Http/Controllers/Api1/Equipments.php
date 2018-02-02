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
use App\Models\Equipseries;
use App\Models\Equipfamily;
use App\Kernel\KernelService;
use Illuminate\Support\Facades\Crypt;

class Equipments extends Controller
{
    /**
     * @var Illuminate\Http\Request
     */
    protected $request;

    /**
     * @var Illuminate\Contracts\Auth\Factory
     */
    protected $auth;

    /**
     * @var App\Cryosoft\ValueListService
     */
    protected $value;

    /**
     * @var App\Cryosoft\UnitsConverterService
     */
    protected $convert;

    /**
     * @var App\Kernel\KernelService
     */
    protected $kernel;

    /**
     * @var App\Cryosoft\EquipmentsService
     */
    protected $equip;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request, Auth $auth, UnitsConverterService $convert, EquipmentsService $equip, KernelService $kernel)
    {
        $this->request = $request;
        $this->auth = $auth;
        $this->convert = $convert;
        $this->equip = $equip;
        $this->kernel = $kernel;
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
        $others = Equipment::where('ID_USER', '!=', $this->auth->user()->ID_USER)->orderBy('EQUIP_NAME', 'ASC')->get();

        foreach ($mine as $key) {
            $key->capabilitiesCalc = $this->equip->getCapability($key->CAPABILITIES, 65536);
            $key->timeSymbol = $this->convert->timeSymbolUser();
            $key->temperatureSymbol = $this->convert->temperatureSymbolUser();
            $equipGener = EquipGeneration::find($key->ID_EQUIPGENERATION);

            if ($equipGener) { 
                $equipGener->TEMP_SETPOINT = doubleval($this->convert->controlTemperature($equipGener->TEMP_SETPOINT));
                $equipGener->DWELLING_TIME = doubleval($this->convert->time($equipGener->DWELLING_TIME));
                $equipGener->NEW_POS = doubleval($this->convert->time($equipGener->NEW_POS));
            }
            $key->equipGeneration = $equipGener;
        }
        foreach ($others as $key) {
            $key->capabilitiesCalc = $this->equip->getCapability($key->CAPABILITIES, 65536);
            $key->timeSymbol = $this->convert->timeSymbolUser();
            $key->temperatureSymbol = $this->convert->temperatureSymbolUser();
            $equipGener = EquipGeneration::find($key->ID_EQUIPGENERATION);

            if ($equipGener) { 
                $equipGener->TEMP_SETPOINT = doubleval($this->convert->controlTemperature($equipGener->TEMP_SETPOINT));
                $equipGener->DWELLING_TIME = doubleval($this->convert->time($equipGener->DWELLING_TIME));
                $equipGener->NEW_POS = doubleval($this->convert->time($equipGener->NEW_POS));
            }
            $key->equipGeneration = $equipGener;
        }
        // $mine = Equipment::where('ID_USER', $this->auth->user()->ID_USER)->orderBy('EQUIP_NAME', 'ASC')->get();

        // foreach ($mine as $key) {
        //     $key->capabilitiesCalc = $this->equip->getCapability($key->CAPABILITIES, 65536);
        //     $isCapa = $key->capabilitiesCalc;
        //     $equipGener = EquipGeneration::find($key->ID_EQUIPGENERATION);

        //     if ($isCapa) {
        //         if ($equipGener) { 
        //             $key->DWELLING_TIME = doubleval($this->convert->time($equipGener->DWELLING_TIME));
        //             $key->NEW_POS = doubleval($this->convert->time($equipGener->NEW_POS));
        //         } else {
        //             $key->DWELLING_TIME = 0;
        //             $key->NEW_POS = 0;
        //         }
        //         $key->TEMP_SETPOINT = 0;
        //     } else {
        //         if ($equipGener) { 
        //             $key->TEMP_SETPOINT = doubleval($this->convert->controlTemperature($equipGener->TEMP_SETPOINT));
        //             $key->NEW_POS = doubleval($this->convert->time($equipGener->NEW_POS));
        //         } else {
        //             $key->TEMP_SETPOINT = 0;
        //             $key->NEW_POS = 0;
        //         }
        //         $key->DWELLING_TIME = 0;
        //     }
        //     $key->timeSymbol = $this->convert->timeSymbolUser();
        //     $key->temperatureSymbol = $this->convert->temperatureSymbolUser();
        // }

        // $others = Equipment::where('ID_USER', '!=', $this->auth->user()->ID_USER)->orderBy('EQUIP_NAME', 'ASC')->get();

        // foreach ($others as $key) {
        //     $key->capabilitiesCalc = $this->equip->getCapability($key->CAPABILITIES, 65536);
        //     $isCapa = $key->capabilitiesCalc;
        //     $equipGener = EquipGeneration::find($key->ID_EQUIPGENERATION);

        //     if ($isCapa) {
        //         if ($equipGener) { 
        //             $key->DWELLING_TIME = doubleval($this->convert->time($equipGener->DWELLING_TIME));
        //             $key->NEW_POS = doubleval($this->convert->time($equipGener->NEW_POS));
        //         } else {
        //             $key->DWELLING_TIME = 0;
        //             $key->NEW_POS = 0;
        //         }
        //         $key->TEMP_SETPOINT = 0;
        //     } else {
        //         if ($equipGener) { 
        //             $key->TEMP_SETPOINT = doubleval($this->convert->controlTemperature($equipGener->TEMP_SETPOINT));
        //             $key->NEW_POS = doubleval($this->convert->time($equipGener->NEW_POS));
        //         } else {
        //             $key->TEMP_SETPOINT = 0;
        //             $key->NEW_POS = 0;
        //         }
        //         $key->DWELLING_TIME = 0;
        //     }
        //     $key->timeSymbol = $this->convert->timeSymbolUser();
        //     $key->temperatureSymbol = $this->convert->temperatureSymbolUser();
        // }

        return compact('mine', 'others');
    }

    public function newEquipment()
    {
        $current = Carbon::now('Asia/Ho_Chi_Minh');
        $idUserLogon = $this->auth->user()->ID_USER;
        $input = $this->request->all();

        $CRYOSOFT_DB_PUBLIC_KEY = null;

        if (!isset($input['nameEquipment']) || !isset($input['versionEquipment']) || !isset($input['equipmentId1']) 
        || !isset($input['equipmentId2']) || !isset($input['tempSetPoint']) || !isset($input['dwellingTime']) 
        || !isset($input['newPos']) || !isset($input['typeEquipment'] ))
            throw new \Exception("Error Processing Request", 1);
        
        $nameE = $input['nameEquipment'];
        $versionE = $input['versionEquipment'];
        $equipId1 = $input['equipmentId1'];
        $equipId2 = $input['equipmentId2'];
        $tempSetPoint = $input['tempSetPoint'];
        $dwellingTime = $input['dwellingTime'];
        $newPos = $input['newPos'];
        $typeEquipment = $input['typeEquipment'];

        $equipment1 = Equipment::find($equipId1);
        
        if ($equipment1) {
            $newE = new Equipment();

            $newE->ID_EQUIP = 0;
            $newE->EQUIP_RELEASE = 2;
            $newE->STD = 0;
            $newE->DLL_IDX = null;
            $newE->OPEN_BY_OWNER = false;
            $newE->ID_USER = $idUserLogon;

            $mask = 1096;
            $capabilities = $equipment1->CAPABILITIES;
            if ($this->equip->getCapability($capabilities, 65536)) {
                $mask |= 0x40002;
            } else {
                $mask |= 0x80001;
            }
            $capabilities &= ($mask ^ 0xFFFFFFFFFFF); //0xFFFFFFFFFFFFFFF
            $newE->CAPABILITIES = $capabilities;

            if (count($newE->EQUIP_COMMENT) == 0) {
                $comment = 'Create on ' . $current->toDateTimeString() . ' by ' . $this->auth->user()->USERNAM;
            } else if (count($newE->EQUIP_COMMENT) < 2100) {
                $comment = $newE->EQUIP_COMMENT . '. Create on ' . $current->toDateTimeString() . ' by ' . $this->auth->user()->USERNAM;
            } else {
                $comment = substr($newE->EQUIP_COMMENT, 0, 1999) . '. Create on ' . $current->toDateTimeString() . ' by ' . $this->auth->user()->USERNAM;;
            }
            $newE->EQUIP_COMMENT = $comment;
            $newE->ID_EQUIPSERIES = $this->MapToGeneratedEqp($newE->ID_EQUIPSERIES);
            $newE->ID_COOLING_FAMILY = $equipment1->ID_COOLING_FAMILY;
            $newE->EQUIPPICT = $equipment1->EQUIPPICT;
            $newE->EQP_LENGTH = $equipment1->EQP_LENGTH;
            $newE->EQP_WIDTH = $equipment1->EQP_WIDTH;
            $newE->EQP_HEIGHT = $equipment1->EQP_HEIGHT;
            $newE->MODUL_LENGTH = $equipment1->MODUL_LENGTH;
            $newE->NB_MAX_MODUL = $equipment1->NB_MAX_MODUL;
            $newE->NB_TR = $equipment1->NB_TR;
            $newE->NB_TS = $equipment1->NB_TS;
            $newE->NB_VC = $equipment1->NB_VC;
            $newE->BUYING_COST = $equipment1->BUYING_COST;
            $newE->RENTAL_COST = $equipment1->RENTAL_COST;
            $newE->INSTALL_COST = $equipment1->INSTALL_COST;
            $newE->MAX_FLOW_RATE = $equipment1->MAX_FLOW_RATE;
            $newE->MAX_NOZZLES_BY_RAMP = $equipment1->MAX_NOZZLES_BY_RAMP;
            $newE->MAX_RAMPS = $equipment1->MAX_RAMPS;
            $newE->NUMBER_OF_ZONES = $equipment1->NUMBER_OF_ZONES;
            $newE->TMP_REGUL_MIN = $equipment1->TMP_REGUL_MIN;
            $newE->ITEM_TR = $equipment1->ITEM_TR;
            $newE->ITEM_TS = $equipment1->ITEM_TS;
            $newE->ITEM_VC = $equipment1->ITEM_VC;
            $newE->ITEM_PRECIS = $equipment1->ITEM_PRECIS;
            $newE->ITEM_TIMESTEP = $equipment1->ITEM_TIMESTEP;
            $newE->FATHER_DLL_IDX = $equipment1->FATHER_DLL_IDX;
            $newE->EQP_IMP_ID_STUDY = $equipment1->EQP_IMP_ID_STUDY;
            // $newE->save();
            Equipment::where('ID_EQUIP', $newE->ID_EQUIP)->update(['EQUIP_DATE' => $current->toDateTimeString()]);

            $equipGeneration = new EquipGeneration();
            $equipGeneration->ID_EQUIP = $newE->ID_EQUIP;
            $equipGeneration->ID_ORIG_EQUIP1 = $equipId1;
            $equipGeneration->ID_ORIG_EQUIP2 = $equipId2;
            $equipGeneration->AVG_PRODINTEMP = 0;
            $equipGeneration->TEMP_SETPOINT = $tempSetPoint;
            $equipGeneration->DWELLING_TIME = $dwellingTime;
            $equipGeneration->MOVING_CHANGE = 0;
            $equipGeneration->MOVING_POS = 0;
            $equipGeneration->ROTATE = 0;
            $equipGeneration->POS_CHANGE = 0;
            $equipGeneration->NEW_POS = $newPos;
            $equipGeneration->EQP_GEN_STATUS = 0;
            $equipGeneration->EQP_GEN_LOADRATE = 0;
            // $equipGeneration->save();
            Equipment::where('ID_EQUIP', $newE->ID_EQUIP)->update(['ID_EQUIPGENERATION' => $equipGeneration->ID_EQUIPGENERATION]);

            $CRYOSOFT_DB_PUBLIC_KEY = Crypt::encrypt($this->createCryosoftDBPublicKey());
            var_dump($CRYOSOFT_DB_PUBLIC_KEY); die;
            
        }

        return 1;
    }

    public function MapToGeneratedEqp($idEquipSeries)
    {
        $idEs = 0;
        $equipSeries = Equipseries::find($idEquipSeries);

        if ($equipSeries) {

            if ($equipSeries->ID_FAMILY != 0) {

                $equipFamily = Equipfamily::find($equipSeries->ID_FAMILY);
                
                if ($equipFamily) {

                    if ($equipFamily->BATCH_PROCESS == 0) {
                        $idEs = 42;
                    } else {
                        $idEs = 43;
                    }
                }
            }
        }

        return $idEs;
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

     private function runEquipmentCalculation($IdEquipgeneration)
     {
        $conf = $this->kernel->getConfig($this->auth->user()->ID_USER, $IdEquipgeneration);
        return $this->kernel->getKernelObject('EquipmentBuilder')->EBEquipmentCalculation($conf);
     }

     private function createCryosoftDBPublicKey()
     {
        $cryosoftDBPublicKey = null;

        $conf = $this->kernel->getConfig($this->auth->user()->ID_USER, 0, 0, 0, 0);
        $result = $this->kernel->getKernelObject('KernelToolCalculator')->KTCalculator($conf, 5);
        // $cryosoftDBPublicKey = $result->GetKTLocal();

        return $cryosoftDBPublicKey;
     }

    public function getEquipmentFamily()
    {
    $list = Equipfamily::join('Translation', 'ID_FAMILY', '=', 'Translation.ID_TRANSLATION')
    ->where('Translation.TRANS_TYPE', 5)->where('Translation.CODE_LANGUE', $this->auth->user()->CODE_LANGUE)
    ->orderBy('LABEL', 'ASC')->get();
    
    return $list;
    }
}
