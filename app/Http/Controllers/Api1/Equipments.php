<?php

namespace App\Http\Controllers\Api1;

use DB;
use Carbon\Carbon;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Auth\Factory as Auth;
use Illuminate\Http\Request;
use App\Cryosoft\UnitsConverterService;
use App\Cryosoft\EquipmentsService;
use App\Cryosoft\StudyService;
use App\Models\Equipment;
use App\Models\Study;
use App\Models\Price;
use App\Models\PrecalcLdgRatePrm;
use App\Models\EquipGeneration;
use App\Models\Equipseries;
use App\Models\Equipfamily;
use App\Models\Ramps;
use App\Models\Shelves;
use App\Models\Consumptions;
use App\Kernel\KernelService;
use Illuminate\Support\Facades\Crypt;
use App\Models\EquipCharact;

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
     * @var App\Cryosoft\EquipmentsService
     */
    protected $studies;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request, Auth $auth, UnitsConverterService $convert, EquipmentsService $equip
    , KernelService $kernel, StudyService $studies)
    {
        $this->request = $request;
        $this->auth = $auth;
        $this->convert = $convert;
        $this->equip = $equip;
        $this->kernel = $kernel;
        $this->studies = $studies;
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
            $key->capabilitiesCalc256 = $this->equip->getCapability($key->CAPABILITIES, 256);
            $key->timeSymbol = $this->convert->timeSymbolUser();
            $key->temperatureSymbol = $this->convert->temperatureSymbolUser();
            $key->dimensionSymbol = $this->convert->equipDimensionSymbolUser();
            $key->consumptionSymbol1 = $this->convert->consumptionSymbolUser($key->ID_COOLING_FAMILY, 1);
            $key->consumptionSymbol2 = $this->convert->consumptionSymbolUser($key->ID_COOLING_FAMILY, 2);
            $key->consumptionSymbol3 = $this->convert->consumptionSymbolUser($key->ID_COOLING_FAMILY, 3);
            $key->shelvesWidthSymbol = $this->convert->shelvesWidthSymbol();
            $key->rampsPositionSymbol = $this->convert->rampsPositionSymbol();

            $key->EQP_LENGTH = $this->convert->equipDimensionUser($key->EQP_LENGTH);
            $key->EQP_WIDTH = $this->convert->equipDimensionUser($key->EQP_WIDTH);
            $key->EQP_HEIGHT = $this->convert->equipDimensionUser($key->EQP_HEIGHT);
            $key->MAX_FLOW_RATE = $this->convert->consumptionUser($key->MAX_FLOW_RATE, $key->ID_COOLING_FAMILY, 1);
            $key->TMP_REGUL_MIN = $this->convert->controlTemperatureUser($key->TMP_REGUL_MIN);

            $equipGener = EquipGeneration::find($key->ID_EQUIPGENERATION);
        
            if ($equipGener) { 
                $equipGener->TEMP_SETPOINT = doubleval($this->convert->controlTemperatureUser($equipGener->TEMP_SETPOINT));
                $equipGener->DWELLING_TIME = doubleval($this->convert->timeUser($equipGener->DWELLING_TIME));
                $equipGener->NEW_POS = doubleval($this->convert->timeUser($equipGener->NEW_POS));
            }
            $key->equipGeneration = $equipGener;
        }

        foreach ($others as $key) {
            $key->capabilitiesCalc = $this->equip->getCapability($key->CAPABILITIES, 65536);
            $key->timeSymbol = $this->convert->timeSymbolUser();
            $key->temperatureSymbol = $this->convert->temperatureSymbolUser();
            $key->dimensionSymbol = $this->convert->equipDimensionSymbolUser();
            $key->EQP_LENGTH = $this->convert->equipDimensionUser($key->EQP_LENGTH);
            $key->EQP_WIDTH = $this->convert->equipDimensionUser($key->EQP_WIDTH);
            $key->EQP_HEIGHT = $this->convert->equipDimensionUser($key->EQP_HEIGHT);
            $key->TMP_REGUL_MIN = $this->convert->controlTemperatureUser($key->TMP_REGUL_MIN);

            $equipGener = EquipGeneration::find($key->ID_EQUIPGENERATION);

            if ($equipGener) { 
                $equipGener->TEMP_SETPOINT = doubleval($this->convert->controlTemperature($equipGener->TEMP_SETPOINT));
                $equipGener->DWELLING_TIME = doubleval($this->convert->time($equipGener->DWELLING_TIME));
                $equipGener->NEW_POS = doubleval($this->convert->time($equipGener->NEW_POS));
            }
            $key->equipGeneration = $equipGener;
        }

        return compact('mine', 'others');
    }

    public function newEquipment()
    {
        $current = Carbon::now('Asia/Ho_Chi_Minh');
        $idUserLogon = $this->auth->user()->ID_USER;
        $input = $this->request->all();

        $nameE = $typeCalculate = $versionE = $equipId1 = $equipId1 = $tempSetPoint = $dwellingTime = $newPos = $typeEquipment = null;
        
        if (isset($input['typeEquipment'])) $typeEquipment = intval($input['typeEquipment']);
        if (isset($input['nameEquipment'])) $nameE = $input['nameEquipment'];
        if (isset($input['versionEquipment'])) $versionE = floatval($input['versionEquipment']);
        if (isset($input['typeCalculate'])) $typeCalculate = intval($input['typeCalculate']);
        
        if ($typeEquipment == 0) {
            if (isset($input['equipmentId1'])) $equipId1 = intval($input['equipmentId1']);
            if (isset($input['tempSetPoint'])) $tempSetPoint = floatval($input['tempSetPoint']);
            if (isset($input['dwellingTime'])) $dwellingTime = floatval($input['dwellingTime']);
        } else if ($typeEquipment == 1) {
            if (isset($input['equipmentId1'])) $equipId1 = intval($input['equipmentId1']);
            if (isset($input['dwellingTime'])) $dwellingTime = floatval($input['dwellingTime']);
            if (isset($input['newPos'])) $newPos = $input['newPos'];
        } else if ($typeEquipment == 1) {
            if (isset($input['equipmentId1'])) $equipId1 = intval($input['equipmentId1']);
        } else {
            if (isset($input['equipmentId2'])) $equipId2 = intval($input['equipmentId2']);
            if (isset($input['tempSetPoint'])) $tempSetPoint = floatval($input['tempSetPoint']);
        }
        
        $equipment1 = Equipment::find($equipId1);
        
        if ($equipment1) {
            $newE = new Equipment();

            $newE->ID_USER = $idUserLogon;
            $newE->EQUIP_NAME = $nameE;
            $newE->EQUIP_VERSION = $versionE;
            $newE->EQUIP_RELEASE = 2;
            $newE->STD = 0;
            $newE->OPEN_BY_OWNER = false;

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
            $newE->DLL_IDX = $equipment1->DLL_IDX;
            $newE->ID_EQUIPSERIES = $this->mapToGeneratedEqp($equipment1->ID_EQUIPSERIES);
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
            $newE->save();

            if ($newE->ID_EQUIP) Equipment::where('ID_EQUIP', $newE->ID_EQUIP)->update(['EQUIP_DATE' => $current->toDateTimeString()]);

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
            $equipGeneration->save();
            Equipment::where('ID_EQUIP', $newE->ID_EQUIP)->update(['ID_EQUIPGENERATION' => $equipGeneration->ID_EQUIPGENERATION]);

            if (!$this->runEquipmentCalculation($newE->ID_EQUIP)) {
                return;
            }
            
        }

        return 1;
    }

    public function mapToGeneratedEqp($idEquipSeries)
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

    public function getEquipmentFamily()
    {
        $list = Equipfamily::join('Translation', 'ID_FAMILY', '=', 'Translation.ID_TRANSLATION')
        ->where('Translation.TRANS_TYPE', 5)->where('Translation.CODE_LANGUE', $this->auth->user()->CODE_LANGUE)
        ->orderBy('LABEL', 'ASC')->get();
        
        return $list;
    }

    public function getEquipmentSeries() 
    {
        $input = $this->request->all();

        if (isset($input['idFamily'])) $idFamily = $input['idFamily'];

        if (!$idFamily) {
            $list = Equipseries::orderBy('SERIES_NAME', 'ASC')->get();
        } else {
            $list = Equipseries::where('ID_FAMILY', $idFamily)->orderBy('SERIES_NAME', 'ASC')->get();
        }
        
        return $list;
    }

    public function getRamps()
    {
        $input = $this->request->all();
        $list = [];

        if (isset($input['idEquip'])) $idEquip = $input['idEquip'];

        if ($idEquip) {
            $list = Ramps::where('ID_EQUIP', $idEquip)->orderBy('POSITION', 'ASC')->get();

            foreach ( $list as $ramps) {
                $ramps->POSITION = $this->convert->rampsPositionUser($ramps->POSITION);
            }
        }

        return $list;
    }

    public function getShelves()
    {
        $input = $this->request->all();
        $list = [];

        if (isset($input['idEquip'])) $idEquip = $input['idEquip'];

        if ($idEquip) {
            $list = Shelves::where('ID_EQUIP', $idEquip)->orderBy('SPACE', 'ASC')->get();

            foreach ( $list as $shelves) {
                $shelves->SPACE = $this->convert->shelvesWidthUser($shelves->SPACE);
            }
        }

        return $list;
    }

    public function getConsumptions()
    {
        $input = $this->request->all();
        $list = [];

        if (isset($input['idEquip'])) $idEquip = $input['idEquip'];

        $list = DB::select("select ID_CONSUMPTIONS, ID_EQUIP, CONVERT( float(53), convert(varchar(100), DecryptByPassPhrase('3a786565707472', TEMPERATURE))) as TEMPERATURE,
        CONVERT( float(53), convert(varchar(100), DecryptByPassPhrase('3a786565707472', CONSUMPTION_PERM))) as CONSUMPTION_PERM,
        CONVERT( float(53), convert(varchar(100), DecryptByPassPhrase('3a786565707472', CONSUMPTION_GETCOLD))) as CONSUMPTION_GETCOLD
        from consumptions where ID_EQUIP = " . $idEquip . " ORDER BY TEMPERATURE");
        
        $equip = Equipment::find($idEquip);

        foreach ($list as $key) {
            if ($equip) {
                if ($this->equip->getCapability($equip->CAPABILITIES, 65536)) {
                    $key->TEMPERATURE = $this->convert->timeUser($key->TEMPERATURE);
                } else {
                    $key->TEMPERATURE = $this->convert->controlTemperatureUser($key->TEMPERATURE);
                }
                $key->CONSUMPTION_GETCOLD = $this->convert->consumptionUser($key->CONSUMPTION_GETCOLD, $equip->ID_COOLING_FAMILY, 2);
            }
        }

        return $list;
    }

    public function getUnitData($id)
    {
        $study = Study::find($id);
        $priceEnergy = 0;
        if ($study) {
            $idPrice = $study->ID_PRICE;
            $priceEnergy =  $this->studies->getStudyPrice($study);

            $idRatePrm = $study->ID_PRECALC_LDG_RATE_PRM;
            $intervalW = $intervalL = 0;

            if ($idRatePrm == 0 || !$idRatePrm) {
                $intervalW = $intervalL = 0;
            } else {
                $precalcLdgRatePrm = PrecalcLdgRatePrm::find($idRatePrm);

                if ($precalcLdgRatePrm) {
                    $intervalW = $precalcLdgRatePrm->W_INTERVAL;
                    $intervalL = $precalcLdgRatePrm->L_INTERVAL;
                }
            }
        }

        if ($priceEnergy != 0) $priceEnergy =  $this->convert->monetary($priceEnergy);

        if ($intervalW != 0) $intervalW = $this->convert->prodchartDimension($intervalW);

        if ($intervalL != 0) $intervalL = $this->convert->prodchartDimension($intervalL);

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

    private function copyRamps($oldIdEquip, $newIdEquip)
    {
        $oldRamps = Ramps::where('ID_EQUIP', $oldIdEquip)->get();
        if (count($oldRamps) > 0) {
            foreach ($oldRamps as $ramp) {
                $newRamp = new Ramps();
                $newRamp->ID_EQUIP = $newIdEquip;
                $newRamp->POSITION = $ramp->POSITION;
                $newRamp->save();
            }
        }
    }

    private function copyConsumptions($oldIdEquip, $newIdEquip)
    {
        $oldConsumptions = Consumptions::where('ID_EQUIP', $oldIdEquip)->get();
        if (count($oldConsumptions) > 0) {
            foreach ($oldConsumptions as $consumption) {
                $newConsumption = new Consumptions();
                $newConsumption->ID_EQUIP = $newIdEquip;
                $newConsumption->TEMPERATURE = $consumption->TEMPERATURE;
                $newConsumption->CONSUMPTION_PERM = $consumption->CONSUMPTION_PERM;
                $newConsumption->CONSUMPTION_GETCOLD = $consumption->CONSUMPTION_GETCOLD;
                $newConsumption->save();
            }
        }
    }

    private function copyShelves($oldIdEquip, $newIdEquip)
    {
        $oldShelves = Shelves::where('ID_EQUIP', $oldIdEquip)->get();
        if (count($oldShelves) > 0) {
            foreach ($oldShelves as $shelve) {
                $newShelve = new Shelves();
                $newShelve->ID_EQUIP = $newIdEquip;
                $newShelve->NB = $shelve->NB;
                $newShelve->SPACE = $shelve->SPACE;
                $newShelve->save();
            }
        }
    }

    private function copyEquipCharact($oldIdEquip, $newIdEquip)
    {
        $oldEquipCharacts = EquipCharact::where('ID_EQUIP', $oldIdEquip)->get();
        if (count($oldEquipCharacts) > 0) {
            foreach ($oldEquipCharacts as $equipCharact) {
                $newEquipCharact = new EquipCharact();
                $newEquipCharact->ID_EQUIP = $newIdEquip;
                $newEquipCharact->X_POSITION = $equipCharact->X_POSITION;
                $newEquipCharact->TEMP_REGUL = $equipCharact->TEMP_REGUL;
                $newEquipCharact->ALPHA_TOP = $equipCharact->ALPHA_TOP;
                $newEquipCharact->ALPHA_BOTTOM = $equipCharact->ALPHA_BOTTOM;
                $newEquipCharact->ALPHA_LEFT = $equipCharact->ALPHA_LEFT;
                $newEquipCharact->ALPHA_RIGHT = $equipCharact->ALPHA_RIGHT;
                $newEquipCharact->ALPHA_FRONT = $equipCharact->ALPHA_FRONT;
                $newEquipCharact->ALPHA_REAR = $equipCharact->ALPHA_REAR;

                $newEquipCharact->TEMP_TOP = $equipCharact->TEMP_TOP;
                $newEquipCharact->TEMP_BOTTOM = $equipCharact->TEMP_BOTTOM;
                $newEquipCharact->TEMP_LEFT = $equipCharact->TEMP_LEFT;
                $newEquipCharact->TEMP_RIGHT = $equipCharact->TEMP_RIGHT;
                $newEquipCharact->TEMP_FRONT = $equipCharact->TEMP_FRONT;
                $newEquipCharact->TEMP_REAR = $equipCharact->TEMP_REAR;

                $newEquipCharact->save();
            }
        }
    }
}
