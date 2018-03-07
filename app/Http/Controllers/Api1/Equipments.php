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
use App\Models\EquipGenZone;
use App\Models\EquipZone;
use App\Models\MinMax;

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

        $array  = [
            'mine' => $mine,
            'others' => $others,
            'ID_USER' => $this->auth->user()->ID_USER,
        ];

        return $array;
    }

    public function newEquipment()
    {
        $current = Carbon::now('Asia/Ho_Chi_Minh');
        $idUserLogon = $this->auth->user()->ID_USER;
        $input = $this->request->all();

        $nameE = $typeCalculate = $versionE = $equipId1 = $equipId2 = $tempSetPoint = $dwellingTime = $newPos = $typeEquipment = null;
        
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
        } else if ($typeEquipment == 2) {
            if (isset($input['equipmentId1'])) $equipId1 = intval($input['equipmentId1']);
        } else {
            if (isset($input['equipmentId1'])) $equipId1 = intval($input['equipmentId1']);
            if (isset($input['equipmentId2'])) $equipId2 = intval($input['equipmentId2']);
            if (isset($input['tempSetPoint'])) $tempSetPoint = floatval($input['tempSetPoint']);
        }

        if ($nameE == null) return -1;
        if (($equipId1 == null) || ($equipId1 == 0)) return -2;
        if ($versionE == null) return -3;
        if (!$this->checkNameAndVersion($nameE, $versionE)) return -4;
        
        $equipment1 = Equipment::find($equipId1);
        
        if ($equipment1) {
            $newEquip = new Equipment();

            $newEquip->ID_USER = $idUserLogon;
            $newEquip->EQUIP_NAME = $nameE;
            $newEquip->EQUIP_VERSION = $versionE;
            $newEquip->EQUIP_RELEASE = 2;
            $newEquip->STD = 0;
            $newEquip->OPEN_BY_OWNER = false;

            $mask = 1096;
            $capabilities = $equipment1->CAPABILITIES;
            if ($this->equip->getCapability($capabilities, 65536)) {
                $mask |= 0x40002;
            } else {
                $mask |= 0x80001;
            }
            $capabilities &= ($mask ^ 0xFFFFFFFFFFF); //0xFFFFFFFFFFFFFFF
            $newEquip->CAPABILITIES = $capabilities;

            if (count($newEquip->EQUIP_COMMENT) == 0) {
                $comment = 'Create on ' . $current->toDateTimeString() . ' by ' . $this->auth->user()->USERNAM;
            } else if (count($newEquip->EQUIP_COMMENT) < 2100) {
                $comment = $newEquip->EQUIP_COMMENT . '. Create on ' . $current->toDateTimeString() . ' by ' . $this->auth->user()->USERNAM;
            } else {
                $comment = substr($newEquip->EQUIP_COMMENT, 0, 1999) . '. Create on ' . $current->toDateTimeString() . ' by ' . $this->auth->user()->USERNAM;;
            }

            $newEquip->EQUIP_COMMENT = $comment;
            // $newEquip->DLL_IDX = $equipment1->DLL_IDX;
            $newEquip->ID_EQUIPSERIES = $this->mapToGeneratedEqp($equipment1->ID_EQUIPSERIES);
            $newEquip->ID_COOLING_FAMILY = $equipment1->ID_COOLING_FAMILY;
            $newEquip->ID_EQUIPGENERATION = 0;
            $newEquip->EQUIPPICT = $equipment1->EQUIPPICT;
            $newEquip->EQP_LENGTH = $equipment1->EQP_LENGTH;
            $newEquip->EQP_WIDTH = $equipment1->EQP_WIDTH;
            $newEquip->EQP_HEIGHT = $equipment1->EQP_HEIGHT;
            $newEquip->MODUL_LENGTH = $equipment1->MODUL_LENGTH;
            $newEquip->NB_MAX_MODUL = $equipment1->NB_MAX_MODUL;
            $newEquip->NB_TR = $equipment1->NB_TR;
            $newEquip->NB_TS = $equipment1->NB_TS;
            $newEquip->NB_VC = $equipment1->NB_VC;
            $newEquip->BUYING_COST = $equipment1->BUYING_COST;
            $newEquip->RENTAL_COST = $equipment1->RENTAL_COST;
            $newEquip->INSTALL_COST = $equipment1->INSTALL_COST;
            $newEquip->MAX_FLOW_RATE = $equipment1->MAX_FLOW_RATE;
            $newEquip->MAX_NOZZLES_BY_RAMP = $equipment1->MAX_NOZZLES_BY_RAMP;
            $newEquip->MAX_RAMPS = $equipment1->MAX_RAMPS;
            $newEquip->NUMBER_OF_ZONES = $equipment1->NUMBER_OF_ZONES;
            $newEquip->TMP_REGUL_MIN = $equipment1->TMP_REGUL_MIN;
            $newEquip->ITEM_TR = $equipment1->ITEM_TR;
            $newEquip->ITEM_TS = $equipment1->ITEM_TS;
            $newEquip->ITEM_VC = $equipment1->ITEM_VC;
            $newEquip->ITEM_PRECIS = $equipment1->ITEM_PRECIS;
            $newEquip->ITEM_TIMESTEP = $equipment1->ITEM_TIMESTEP;
            // $newEquip->FATHER_DLL_IDX = $equipment1->FATHER_DLL_IDX;
            $newEquip->EQP_IMP_ID_STUDY = $equipment1->EQP_IMP_ID_STUDY;
            $newEquip->save();

            if ($newEquip->ID_EQUIP) {
                Equipment::where('ID_EQUIP', $newEquip->ID_EQUIP)->update(['EQUIP_DATE' => $current->toDateTimeString()]);
                $this->getDecryptBinary($equipment1->ID_EQUIP, $newEquip->ID_EQUIP);
            }

            $minMaxAvg = $this->getMinMax(1066);
            $minMaxDwell = $this->getMinMax($equipment1->ITEM_TS);

            $equipGeneration = new EquipGeneration();
            $equipGeneration->ID_EQUIP = $newEquip->ID_EQUIP;
            $equipGeneration->ID_ORIG_EQUIP1 = $equipId1;
            $equipGeneration->ID_ORIG_EQUIP2 = ($equipId2 != null) ? $equipId2 : 0;
            $equipGeneration->AVG_PRODINTEMP = $minMaxAvg->DEFAULT_VALUE;
            $equipGeneration->TEMP_SETPOINT = ($tempSetPoint != null) ? $tempSetPoint : 0;
            $equipGeneration->DWELLING_TIME = ($dwellingTime > 0) ? $dwellingTime : $minMaxDwell->DEFAULT_VALUE;
            $equipGeneration->MOVING_CHANGE = 0;
            $equipGeneration->MOVING_POS = 0;
            $equipGeneration->ROTATE = 0;
            $equipGeneration->POS_CHANGE = 0;
            $equipGeneration->NEW_POS = ($newPos != null) ? $newPos : 0;
            $equipGeneration->EQP_GEN_STATUS = 0;
            $equipGeneration->EQP_GEN_LOADRATE = 0;
            $equipGeneration->save();
            Equipment::where('ID_EQUIP', $newEquip->ID_EQUIP)->update(['ID_EQUIPGENERATION' => $equipGeneration->ID_EQUIPGENERATION]);

            $this->copyRamps($equipment1->ID_EQUIP, $newEquip->ID_EQUIP);
            $this->copyConsumptions($equipment1->ID_EQUIP, $newEquip->ID_EQUIP);
            $this->copyShelves($equipment1->ID_EQUIP, $newEquip->ID_EQUIP);
            $this->copyEquipCharact($equipment1->ID_EQUIP, $newEquip->ID_EQUIP);
            $this->duplicateEquipGenZone($equipGeneration->ID_EQUIPGENERATION, $equipment1->NUMBER_OF_ZONES);
            $this->duplicateEquipZone($equipment1->ID_EQUIP, $newEquip->ID_EQUIP);

            $newEquip->ID_EQUIPGENERATION = $equipGeneration->ID_EQUIPGENERATION;
            $newEquip->save();

            if ($typeCalculate == 1) {
                if (!$this->runEquipmentCalculation($newEquip->ID_EQUIPGENERATION)) {
                    $this->deleteEquipment($newEquip->ID_EQUIP);
                    return -5;
                }
            }
        }

        return 1;
    }

    public function saveAsEquipment()
    {
        $current = Carbon::now('Asia/Ho_Chi_Minh');
        $idUserLogon = $this->auth->user()->ID_USER;
        $input = $this->request->all();

        $nameEquipment  = $versionEquipment = $equipmentId = null;
        
        if (isset($input['nameEquipment'])) $nameEquipment = $input['nameEquipment'];
        if (isset($input['versionEquipment'])) $versionEquipment = floatval($input['versionEquipment']);
        if (isset($input['equipmentId'])) $equipmentId = intval($input['equipmentId']);

        if ($nameEquipment == null) return -1;
        if (($equipmentId == null) || ($equipmentId == 0)) return -2;
        if ($versionEquipment == null) return -3;
        if (!$this->checkNameAndVersion($nameEquipment, $versionEquipment)) return -4;

        $equipmentId = Equipment::find($equipmentId);
        
        if ($equipmentId) {
            $newEquip = new Equipment();

            $newEquip->ID_USER = $idUserLogon;
            $newEquip->EQUIP_NAME = $nameEquipment;
            $newEquip->EQUIP_VERSION = $versionEquipment;
            $newEquip->EQUIP_RELEASE = 2;
            $newEquip->STD = $equipmentId->STD;
            $newEquip->OPEN_BY_OWNER = false;
            $newEquip->CAPABILITIES = $equipmentId->CAPABILITIES;

            if (count($newEquip->EQUIP_COMMENT) == 0) {
                $comment = 'Create on ' . $current->toDateTimeString() . ' by ' . $this->auth->user()->USERNAM;
            } else if (count($newEquip->EQUIP_COMMENT) < 2100) {
                $comment = $newEquip->EQUIP_COMMENT . '. Create on ' . $current->toDateTimeString() . ' by ' . $this->auth->user()->USERNAM;
            } else {
                $comment = substr($newEquip->EQUIP_COMMENT, 0, 1999) . '. Create on ' . $current->toDateTimeString() . ' by ' . $this->auth->user()->USERNAM;;
            }

            $newEquip->EQUIP_COMMENT = $comment;
            $newEquip->ID_EQUIPSERIES = $equipmentId->ID_EQUIPSERIES;
            $newEquip->ID_COOLING_FAMILY = $equipmentId->ID_COOLING_FAMILY;
            $newEquip->ID_EQUIPGENERATION = $equipmentId->ID_EQUIPGENERATION;
            $newEquip->EQUIPPICT = $equipmentId->EQUIPPICT;
            $newEquip->EQP_LENGTH = $equipmentId->EQP_LENGTH;
            $newEquip->EQP_WIDTH = $equipmentId->EQP_WIDTH;
            $newEquip->EQP_HEIGHT = $equipmentId->EQP_HEIGHT;
            $newEquip->MODUL_LENGTH = $equipmentId->MODUL_LENGTH;
            $newEquip->NB_MAX_MODUL = $equipmentId->NB_MAX_MODUL;
            $newEquip->NB_TR = $equipmentId->NB_TR;
            $newEquip->NB_TS = $equipmentId->NB_TS;
            $newEquip->NB_VC = $equipmentId->NB_VC;
            $newEquip->BUYING_COST = $equipmentId->BUYING_COST;
            $newEquip->RENTAL_COST = $equipmentId->RENTAL_COST;
            $newEquip->INSTALL_COST = $equipmentId->INSTALL_COST;
            $newEquip->MAX_FLOW_RATE = $equipmentId->MAX_FLOW_RATE;
            $newEquip->MAX_NOZZLES_BY_RAMP = $equipmentId->MAX_NOZZLES_BY_RAMP;
            $newEquip->MAX_RAMPS = $equipmentId->MAX_RAMPS;
            $newEquip->NUMBER_OF_ZONES = $equipmentId->NUMBER_OF_ZONES;
            $newEquip->TMP_REGUL_MIN = $equipmentId->TMP_REGUL_MIN;
            $newEquip->ITEM_TR = $equipmentId->ITEM_TR;
            $newEquip->ITEM_TS = $equipmentId->ITEM_TS;
            $newEquip->ITEM_VC = $equipmentId->ITEM_VC;
            $newEquip->ITEM_PRECIS = $equipmentId->ITEM_PRECIS;
            $newEquip->ITEM_TIMESTEP = $equipmentId->ITEM_TIMESTEP;
            $newEquip->EQP_IMP_ID_STUDY = $equipmentId->EQP_IMP_ID_STUDY;
            $newEquip->save();

            if ($newEquip->ID_EQUIP) {
                Equipment::where('ID_EQUIP', $newEquip->ID_EQUIP)->update(['EQUIP_DATE' => $current->toDateTimeString()]);
                $this->getDecryptBinary($equipmentId->ID_EQUIP, $newEquip->ID_EQUIP);
            }
            
            $this->copyRamps($equipmentId->ID_EQUIP, $newEquip->ID_EQUIP);
            $this->copyConsumptions($equipmentId->ID_EQUIP, $newEquip->ID_EQUIP);
            $this->copyShelves($equipmentId->ID_EQUIP, $newEquip->ID_EQUIP);
            $this->copyEquipCharact($equipmentId->ID_EQUIP, $newEquip->ID_EQUIP);

            $oldGeneration = EquipGeneration::where('ID_EQUIP', $equipmentId->ID_EQUIP)->first();
            if (count($oldGeneration) > 0) {
                $equipGeneration = new EquipGeneration();
                $equipGeneration->ID_EQUIP = $newEquip->ID_EQUIP;
                $equipGeneration->ID_ORIG_EQUIP1 = $oldGeneration->ID_ORIG_EQUIP1;
                $equipGeneration->ID_ORIG_EQUIP2 = $oldGeneration->ID_ORIG_EQUIP2;
                $equipGeneration->AVG_PRODINTEMP = $oldGeneration->AVG_PRODINTEMP;
                $equipGeneration->TEMP_SETPOINT = $oldGeneration->TEMP_SETPOINT;
                $equipGeneration->DWELLING_TIME = $oldGeneration->DWELLING_TIME;
                $equipGeneration->MOVING_CHANGE = $oldGeneration->MOVING_CHANGE;
                $equipGeneration->MOVING_POS = $oldGeneration->MOVING_POS;
                $equipGeneration->ROTATE = $oldGeneration->ROTATE;
                $equipGeneration->POS_CHANGE = $oldGeneration->POS_CHANGE;
                $equipGeneration->NEW_POS = $oldGeneration->NEW_POS;
                $equipGeneration->EQP_GEN_STATUS = $oldGeneration->EQP_GEN_STATUS;
                $equipGeneration->EQP_GEN_LOADRATE = $oldGeneration->EQP_GEN_LOADRATE;
                $equipGeneration->save();
                
                $this->duplicateEquipGenZone($equipGeneration->ID_EQUIPGENERATION, $equipmentId->NUMBER_OF_ZONES);
            }

            $this->duplicateEquipZone($equipmentId->ID_EQUIP, $newEquip->ID_EQUIP);
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

        $list = DB::select("select ID_CONSUMPTIONS, ID_EQUIP, CONVERT( float(53), convert(varchar(100), DecryptByPassPhrase('".ENCRYPT_KEY."', TEMPERATURE))) as TEMPERATURE,
        CONVERT( float(53), convert(varchar(100), DecryptByPassPhrase('".ENCRYPT_KEY."', CONSUMPTION_PERM))) as CONSUMPTION_PERM,
        CONVERT( float(53), convert(varchar(100), DecryptByPassPhrase('".ENCRYPT_KEY."', CONSUMPTION_GETCOLD))) as CONSUMPTION_GETCOLD
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

    public function getEquipmentCharacts($idEquip)
    {
        $equipCharacts = EquipCharact::where('ID_EQUIP', $idEquip)->orderBy('X_POSITION', 'ASC')->get();
        if (count($equipCharacts) > 0) {
            foreach ($equipCharacts as $equipCharact) {
                $equipCharact->ALPHA_TOP = $this->convert->convectionCoeff($equipCharact->ALPHA_TOP);
                $equipCharact->ALPHA_BOTTOM = $this->convert->convectionCoeff($equipCharact->ALPHA_BOTTOM);
                $equipCharact->ALPHA_LEFT = $this->convert->convectionCoeff($equipCharact->ALPHA_LEFT);
                $equipCharact->ALPHA_RIGHT = $this->convert->convectionCoeff($equipCharact->ALPHA_RIGHT);
                $equipCharact->ALPHA_FRONT = $this->convert->convectionCoeff($equipCharact->ALPHA_FRONT);
                $equipCharact->ALPHA_REAR = $this->convert->convectionCoeff($equipCharact->ALPHA_REAR);

                $equipCharact->TEMP_TOP = $this->convert->temperature($equipCharact->TEMP_TOP);
                $equipCharact->TEMP_BOTTOM = $this->convert->temperature($equipCharact->TEMP_BOTTOM);
                $equipCharact->TEMP_LEFT = $this->convert->temperature($equipCharact->TEMP_LEFT);
                $equipCharact->TEMP_RIGHT = $this->convert->temperature($equipCharact->TEMP_RIGHT);
                $equipCharact->TEMP_FRONT = $this->convert->temperature($equipCharact->TEMP_FRONT);
                $equipCharact->TEMP_REAR = $this->convert->temperature($equipCharact->TEMP_REAR);
            }
        }
        return $equipCharacts;
    }

    public function deleteEquipCharacts($idEquip)
    {
        $equipCharact = EquipCharact::where('ID_EQUIP', $idEquip)->get();
        if (count($equipCharact) > 0) { 
            EquipCharact::where('ID_EQUIP', $idEquip)->delete();
        }
        return 1;
    }

    public function getDataHighChart()
    {
        $profileType = $minMax = $minScaleY = $maxScaleY = $minValueY = $maxValueY = $nbFractionDigits = null;
        $unitIdent = 10;

        $input = $this->request->all();

        if (isset($input['profilType'])) $profileType = intval($input['profilType']);

        if ($profileType == 1) {
            $minMax = $this->getMinMax(1039);
            $unitIdent = 5;
            $nbFractionDigits = 2;
        } else {
            $minMax = $this->getMinMax(1040);
            $unitIdent = 1;
            $nbFractionDigits = 0;
        }

        $minScaleY = $minMax->LIMIT_MIN;
        $maxScaleY = $minMax->LIMIT_MAX;
        $minValueY = $minMax->LIMIT_MAX;
        $maxValueY = $minMax->LIMIT_MIN;

        $lfOffset = abs($maxValueY - $minValueY) * 0.15;
        if ($lfOffset > 0.0) {
            $minScaleY = $minValueY - $lfOffset;
            $maxScaleY = $maxValueY + $lfOffset;
        } else {
            $lfOffset1 = abs($minMax->LIMIT_MIN - $minValueY) * 0.15;
            $lfOffset2 = abs($minMax->LIMIT_MAX - $maxValueY) * 0.15;
            if ($lfOffset1 < $lfOffset2) {
                $lfOffset = $lfOffset1;
            } else {
                $lfOffset = $lfOffset2;
            }

            $minScaleY = $minValueY - $lfOffset;
            $maxScaleY = $maxValueY + $lfOffset;
        }

        $minScaleYtmp = round($this->convert->convertIdent($minScaleY, $unitIdent));
        $maxScaleYtmp = round($this->convert->convertIdent($maxScaleY, $unitIdent));

        if ($minScaleYtmp != $maxScaleYtmp) {
            $minScaleY = $minScaleYtmp;
            $maxScaleY = $maxScaleYtmp;
        }

        if ($minScaleY < $minMax->LIMIT_MIN) $minScaleY = $minMax->LIMIT_MIN;
        if ($maxScaleY > $minMax->LIMIT_MAX) $maxScaleY = $minMax->LIMIT_MAX;

        $miniMum = $this->convert->convertIdent($minScaleY, $unitIdent);
        $maxiMum = $this->convert->convertIdent($maxScaleY, $unitIdent);

        $array = [
            'MiniMum' => $miniMum,
            'MaxiMum' => $maxiMum
        ];

        return $array;
    }

    public function getDataCurve($idEquip) 
    {
        $array = [];
        $isCapabilities = null;
        $equipment = Equipment::find($idEquip);
        if ($equipment) {
            if ($this->equip->getCapability($equipment->CAPABILITIES, REF_CAP_EQP_DEPEND_ON_TS)) {
                $isCapabilities = 1;
            } else {
                $isCapabilities = 0;
            }
        }
        
        $equipGeneration = EquipGeneration::where('ID_EQUIP', $idEquip)->first();
        if ($equipGeneration) {
            $array = [
                'isCapabilities' => $isCapabilities,
                'REGUL_TEMP' => $equipGeneration->TEMP_SETPOINT,
                'DWELLING_TIME' => $equipGeneration->DWELLING_TIME,
                'PRODTEMP' => $equipGeneration->AVG_PRODINTEMP,
                'LOADINGRATE' => $equipGeneration->EQP_GEN_LOADRATE
            ];
        }
        return $array;
    }

    public function redrawCurves()
    {
        $input = $this->request->all();

        $ID_EQUIP = $REGUL_TEMP = $DWELLING_TIME = $PRODTEMP = $LOADINGRATE = $result = null;

        if (isset($input['ID_EQUIP'])) $ID_EQUIP = intval($input['ID_EQUIP']);
        if (isset($input['REGUL_TEMP'])) $REGUL_TEMP = floatval($input['REGUL_TEMP']);
        if (isset($input['DWELLING_TIME'])) $DWELLING_TIME = floatval($input['DWELLING_TIME']);
        if (isset($input['PRODTEMP'])) $PRODTEMP = floatval($input['PRODTEMP']);
        if (isset($input['LOADINGRATE'])) $LOADINGRATE = floatval($input['LOADINGRATE']);

        $equipment = Equipment::find($ID_EQUIP);
        if ($equipment) {
            if ($equipment->STD == 1) {
                $equipGeneration = EquipGeneration::where('ID_EQUIP', $equipment->ID_EQUIPGENERATION)->first();
                if ($equipGeneration) {
                    if ($this->equip->getCapability($equipment->CAPABILITIES, 65536)) {
                        $equipGeneration->DWELLING_TIME = $DWELLING_TIME;
                    } else {
                        $equipGeneration->TEMP_SETPOINT = $REGUL_TEMP;
                    }
                    $equipGeneration->AVG_PRODINTEMP = $PRODTEMP;
                    $equipGeneration->EQP_GEN_LOADRATE = $LOADINGRATE;
                    $equipGeneration->save();
                }
                $this->runEquipmentCalculation($equipment->ID_EQUIPGENERATION);
            }
        }
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

        if ($priceEnergy != 0) $priceEnergy =  $priceEnergy;

        if ($intervalW != 0) $intervalW = $intervalW;

        if ($intervalL != 0) $intervalL =$intervalL;

        $res = [
            'Price' => doubleval($priceEnergy),
            'IntervalWidth' => doubleval($intervalW),
            'IntervalLength' => doubleval($intervalL),
            'MonetarySymbol' => $this->convert->monetarySymbol(),
            'DimensionSymbol' => $this->convert->prodDimensionSymbolUser()
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

    public function saveEquipment()
    {
        $input = $this->request->all();


        $ID_EQUIP = $EQUIP_NAME = $EQUIP_VERSION = $EQUIP_RELEASE = $EQUIP_COMMENT = $EQP_LENGTH = $EQP_WIDTH = $EQP_HEIGHT = $NB_TR = $NB_TS = $NB_VC = $MAX_FLOW_RATE = $TMP_REGUL_MIN = $MAX_NOZZLES_BY_RAMP = $MAX_RAMPS = $Ramps = $Shelves = $Consumptions = null;

        if (isset($input['ID_EQUIP'])) $ID_EQUIP = intval($input['ID_EQUIP']);
        if (isset($input['EQUIP_NAME'])) $EQUIP_NAME = $input['EQUIP_NAME'];
        if (isset($input['EQUIP_VERSION'])) $EQUIP_VERSION = floatval($input['EQUIP_VERSION']);
        if (isset($input['EQUIP_RELEASE'])) $EQUIP_RELEASE = intval($input['EQUIP_RELEASE']);
        if (isset($input['EQUIP_COMMENT'])) $EQUIP_COMMENT = $input['EQUIP_COMMENT'];
        if (isset($input['EQP_LENGTH'])) $EQP_LENGTH = floatval($input['EQP_LENGTH']);
        if (isset($input['EQP_WIDTH'])) $EQP_WIDTH = floatval($input['EQP_WIDTH']);
        if (isset($input['EQP_HEIGHT'])) $EQP_HEIGHT = floatval($input['EQP_HEIGHT']);
        if (isset($input['NB_TR'])) $NB_TR = intval($input['NB_TR']);
        if (isset($input['NB_TS'])) $NB_TS = intval($input['NB_TS']);
        if (isset($input['NB_VC'])) $NB_VC = intval($input['NB_VC']);
        if (isset($input['MAX_FLOW_RATE'])) $MAX_FLOW_RATE = floatval($input['MAX_FLOW_RATE']);
        if (isset($input['TMP_REGUL_MIN'])) $TMP_REGUL_MIN = floatval($input['TMP_REGUL_MIN']);
        if (isset($input['MAX_NOZZLES_BY_RAMP'])) $MAX_NOZZLES_BY_RAMP = intval($input['MAX_NOZZLES_BY_RAMP']);
        if (isset($input['MAX_RAMPS'])) $MAX_RAMPS = intval($input['MAX_RAMPS']);
        if (isset($input['Ramps'])) $Ramps = $input['Ramps'];
        if (isset($input['Shelves'])) $Shelves = $input['Shelves'];
        if (isset($input['Consumptions'])) $Consumptions = $input['Consumptions'];

        $equipment = Equipment::find($ID_EQUIP);
        if ($equipment) {
            $equipment->EQUIP_NAME = $EQUIP_NAME;
            $equipment->EQUIP_VERSION = $EQUIP_VERSION;
            $equipment->EQUIP_RELEASE = $EQUIP_RELEASE;
            $equipment->EQUIP_COMMENT = $EQUIP_COMMENT;
            $equipment->EQP_LENGTH = $EQP_LENGTH;
            $equipment->EQP_HEIGHT = $EQP_HEIGHT;
            $equipment->EQP_WIDTH = $EQP_WIDTH;
            $equipment->NB_TR = $NB_TR;
            $equipment->NB_TS = $NB_TS;
            $equipment->NB_VC = $NB_VC;
            $equipment->MAX_FLOW_RATE = $MAX_FLOW_RATE;
            $equipment->TMP_REGUL_MIN = $TMP_REGUL_MIN;
            $equipment->MAX_NOZZLES_BY_RAMP = $MAX_NOZZLES_BY_RAMP;
            $equipment->MAX_RAMPS = $MAX_RAMPS;
            $equipment->save();

            if (count($Ramps) > 0) {
                $oldRamps = Ramps::where('ID_EQUIP', $ID_EQUIP)->get();
                if (count($oldRamps) > 0) {
                    Ramps::where('ID_EQUIP', $ID_EQUIP)->delete();
                }
                
                for ($i = 0; $i < count($Ramps); $i++) { 
                    $newRamp = new Ramps();
                    $newRamp->ID_EQUIP = $ID_EQUIP;
                    $newRamp->POSITION = $Ramps[$i]['POSITION'];
                    $newRamp->save();
                }
            }

            if (count($Shelves) > 0) {
                $shelves = Shelves::where('ID_EQUIP', $ID_EQUIP)->get();
                if (count($shelves) > 0) {
                    Shelves::where('ID_EQUIP', $ID_EQUIP)->delete();
                }

                for ($i = 0; $i < count($Shelves); $i++) {
                    $newShelve = new Shelves();
                    $newShelve->ID_EQUIP = $ID_EQUIP;
                    $newShelve->NB = $Shelves[$i]['NB'];
                    $newShelve->SPACE = $Shelves[$i]['SPACE'];
                    $newShelve->save();
                }
            }

            if (count($Consumptions) > 0) {
                $consumptions = Consumptions::where('ID_EQUIP', $ID_EQUIP)->get();
                if (count($consumptions) > 0) {
                    Consumptions::where('ID_EQUIP', $ID_EQUIP)->delete();
                }

                for ($i = 0; $i < count($Consumptions); $i++) {
                    $newConsumption = new Consumptions();
                    $newConsumption->ID_EQUIP = $ID_EQUIP;
                    $newConsumption->save();

                    $TEMPERATURE = "EncryptByPassPhrase('".ENCRYPT_KEY."', CAST(". $Consumptions[$i]['TEMPERATURE'] ." AS varchar(100)), null)";
                    $PERM = "EncryptByPassPhrase('".ENCRYPT_KEY."', CAST(". $Consumptions[$i]['CONSUMPTION_PERM'] ." AS varchar(100)), null)";
                    $GETCOLD = "EncryptByPassPhrase('".ENCRYPT_KEY."', CAST(". $Consumptions[$i]['CONSUMPTION_GETCOLD'] ." AS varchar(100)), null)";

                    DB::update(DB::RAW('update Consumptions set TEMPERATURE = ' .$TEMPERATURE.', CONSUMPTION_PERM = '.$PERM.', CONSUMPTION_GETCOLD = '.$GETCOLD.' where ID_CONSUMPTIONS = ' . $newConsumption->ID_CONSUMPTIONS));
                }
            }
        }

        return 1;
    }

    public function startEquipmentCalculate($id)
    {
        $result = null;
        $equipment = Equipment::find($id);
        if ($equipment) {
            $result = $this->runEquipmentCalculation($equipment->ID_EQUIPGENERATION);
        }
        return $result;
    }

    public function deleteEquipment($id)
    {
        $equipment = Equipment::find($id);
        if ($equipment) {
            $equipGenZone = EquipGenZone::where('ID_EQUIPGENERATION', $equipment->ID_EQUIPGENERATION)->get();
            if (count($equipGenZone) > 0) {
                EquipGenZone::where('ID_EQUIPGENERATION', $equipment->ID_EQUIPGENERATION)->delete();
            }

            $equipGeneration = EquipGeneration::find($equipment->ID_EQUIPGENERATION);
            if (count($equipGeneration) > 0) {
                EquipGeneration::where('ID_EQUIPGENERATION', $equipment->ID_EQUIPGENERATION)->delete();
            }

            $equipCharact = EquipCharact::where('ID_EQUIP', $equipment->ID_EQUIP)->get();
            if (count($equipCharact) > 0) { 
                EquipCharact::where('ID_EQUIP', $equipment->ID_EQUIP)->delete();
            }

            $ramps = Ramps::where('ID_EQUIP', $equipment->ID_EQUIP)->get();
            if (count($ramps) > 0) {
                Ramps::where('ID_EQUIP', $equipment->ID_EQUIP)->delete();
            }

            $shelves = Shelves::where('ID_EQUIP', $equipment->ID_EQUIP)->get();
            if (count($shelves) > 0) {
                Shelves::where('ID_EQUIP', $equipment->ID_EQUIP)->delete();
            }

            $consumptions = Consumptions::where('ID_EQUIP', $equipment->ID_EQUIP)->get();
            if (count($consumptions) > 0) {
                Consumptions::where('ID_EQUIP', $equipment->ID_EQUIP)->delete();
            }

            $equipZones = EquipZone::where('ID_EQUIP', $equipment->ID_EQUIP)->get();
            if (count($equipZones) > 0) {
                EquipZone::where('ID_EQUIP', $equipment->ID_EQUIP)->delete();
            }

            $equipment->delete();
        }
        return 1;
    }

    public function getEquipCharactById($id) 
    {
        $equipCharact = EquipCharact::find($id);
        if ($equipCharact) {
            $equipCharact->ALPHA_TOP = $this->convert->convectionCoeff($equipCharact->ALPHA_TOP);
            $equipCharact->ALPHA_BOTTOM = $this->convert->convectionCoeff($equipCharact->ALPHA_BOTTOM);
            $equipCharact->ALPHA_LEFT = $this->convert->convectionCoeff($equipCharact->ALPHA_LEFT);
            $equipCharact->ALPHA_RIGHT = $this->convert->convectionCoeff($equipCharact->ALPHA_RIGHT);
            $equipCharact->ALPHA_FRONT = $this->convert->convectionCoeff($equipCharact->ALPHA_FRONT);
            $equipCharact->ALPHA_REAR = $this->convert->convectionCoeff($equipCharact->ALPHA_REAR);

            $equipCharact->TEMP_TOP = $this->convert->temperature($equipCharact->TEMP_TOP);
            $equipCharact->TEMP_BOTTOM = $this->convert->temperature($equipCharact->TEMP_BOTTOM);
            $equipCharact->TEMP_LEFT = $this->convert->temperature($equipCharact->TEMP_LEFT);
            $equipCharact->TEMP_RIGHT = $this->convert->temperature($equipCharact->TEMP_RIGHT);
            $equipCharact->TEMP_FRONT = $this->convert->temperature($equipCharact->TEMP_FRONT);
            $equipCharact->TEMP_REAR = $this->convert->temperature($equipCharact->TEMP_REAR);
        }
        return $equipCharact;
    }

    public function deleteEquipCharact($id)
    {
        $equipCharact = EquipCharact::find($id);
        if ($equipCharact) {
            $equipCharact->delete();
            return 1;
        }
        return 0;
    }

    public function addOnePoint($id) 
    {

    }

    public function updateEquipCharact()
    {
        $input = $this->request->all();

        $ID_EQUIPCHARAC = $ALPHA_TOP = $ALPHA_BOTTOM = $ALPHA_LEFT = $ALPHA_RIGHT = $ALPHA_FRONT = $ALPHA_REAR = null;
        $TEMP_TOP = $TEMP_BOTTOM = $TEMP_LEFT = $TEMP_RIGHT = $TEMP_FRONT = $TEMP_REAR = null;

        if (isset($input['ID_EQUIPCHARAC'])) $ID_EQUIPCHARAC = intval($input['ID_EQUIPCHARAC']);
        if (isset($input['ALPHA_TOP'])) $ALPHA_TOP = floatval($input['ALPHA_TOP']);
        if (isset($input['ALPHA_BOTTOM'])) $ALPHA_BOTTOM = floatval($input['ALPHA_BOTTOM']);
        if (isset($input['ALPHA_LEFT'])) $ALPHA_LEFT = floatval($input['ALPHA_LEFT']);
        if (isset($input['ALPHA_RIGHT'])) $ALPHA_RIGHT = floatval($input['ALPHA_RIGHT']);
        if (isset($input['ALPHA_FRONT'])) $ALPHA_FRONT = floatval($input['ALPHA_FRONT']);
        if (isset($input['ALPHA_REAR'])) $ALPHA_REAR = floatval($input['ALPHA_REAR']);
        if (isset($input['TEMP_TOP'])) $TEMP_TOP = floatval($input['TEMP_TOP']);
        if (isset($input['TEMP_BOTTOM'])) $TEMP_BOTTOM = floatval($input['TEMP_BOTTOM']);
        if (isset($input['TEMP_LEFT'])) $TEMP_LEFT = floatval($input['TEMP_LEFT']);
        if (isset($input['TEMP_RIGHT'])) $TEMP_RIGHT = floatval($input['TEMP_RIGHT']);
        if (isset($input['TEMP_FRONT'])) $TEMP_FRONT = floatval($input['TEMP_FRONT']);
        if (isset($input['TEMP_REAR'])) $TEMP_REAR = floatval($input['TEMP_REAR']);

        $equipCharact = EquipCharact::find($ID_EQUIPCHARAC);
        if ($equipCharact) {
            $equipCharact->ALPHA_TOP = $ALPHA_TOP;
            $equipCharact->ALPHA_BOTTOM = $ALPHA_BOTTOM;
            $equipCharact->ALPHA_LEFT = $ALPHA_LEFT;
            $equipCharact->ALPHA_RIGHT = $ALPHA_RIGHT;
            $equipCharact->ALPHA_FRONT = $ALPHA_FRONT;
            $equipCharact->ALPHA_REAR = $ALPHA_REAR;

            $equipCharact->TEMP_TOP = $TEMP_TOP;
            $equipCharact->TEMP_BOTTOM = $TEMP_BOTTOM;
            $equipCharact->TEMP_LEFT = $TEMP_LEFT;
            $equipCharact->TEMP_RIGHT = $TEMP_RIGHT;
            $equipCharact->TEMP_FRONT = $TEMP_FRONT;
            $equipCharact->TEMP_REAR = $TEMP_REAR;
            $equipCharact->save();
        }
        return 1;
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
        $decrypt = DB::select("select CONVERT( float(53), convert(varchar(100), DecryptByPassPhrase('".ENCRYPT_KEY."', TEMPERATURE))) as TEMPERATURE,
        CONVERT( float(53), convert(varchar(100), DecryptByPassPhrase('".ENCRYPT_KEY."', CONSUMPTION_PERM))) as PERM,
        CONVERT( float(53), convert(varchar(100), DecryptByPassPhrase('".ENCRYPT_KEY."', CONSUMPTION_GETCOLD))) as GETCOLD
        from consumptions where ID_EQUIP = " . $oldIdEquip);

        if (count($oldConsumptions) > 0) {
            for ($i = 0; $i < count($oldConsumptions); $i++) {
                $newConsumption = new Consumptions();
                $newConsumption->ID_EQUIP = $newIdEquip;
                // $newConsumption->TEMPERATURE = $consumption->TEMPERATURE;
                // $newConsumption->CONSUMPTION_PERM = $consumption->CONSUMPTION_PERM;
                // $newConsumption->CONSUMPTION_GETCOLD = $consumption->CONSUMPTION_GETCOLD;
                $newConsumption->save();

                $TEMPERATURE = "EncryptByPassPhrase('".ENCRYPT_KEY."', CAST(". $decrypt[$i]->TEMPERATURE ." AS varchar(100)), null)";
                $PERM = "EncryptByPassPhrase('".ENCRYPT_KEY."', CAST(". $decrypt[$i]->PERM ." AS varchar(100)), null)";
                $GETCOLD = "EncryptByPassPhrase('".ENCRYPT_KEY."', CAST(". $decrypt[$i]->GETCOLD ." AS varchar(100)), null)";

                DB::update(DB::RAW('update Consumptions set TEMPERATURE = ' .$TEMPERATURE.', CONSUMPTION_PERM = '.$PERM.', CONSUMPTION_GETCOLD = '.$GETCOLD.' where ID_CONSUMPTIONS = ' . $newConsumption->ID_CONSUMPTIONS));
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

    private function getMinMax($limitItem) 
    {
        return MinMax::where('LIMIT_ITEM', $limitItem)->first();
    }

    private function duplicateEquipGenZone($idEquipGeneration, $numberOfZone)
    {
        for ($i = 1; $i <= $numberOfZone; $i++) {
            $equipGenZone = new EquipGenZone();
            $equipGenZone->ID_EQUIPGENERATION = $idEquipGeneration;
            $equipGenZone->ZONE_NUMBER = $i;
            $equipGenZone->TEMP_SENSOR = 0;
            $equipGenZone->TOP_ADIABAT = 0;
            $equipGenZone->BOTTOM_ADIABAT = 0;
            $equipGenZone->LEFT_ADIABAT = 0;
            $equipGenZone->RIGHT_ADIABAT = 0;
            $equipGenZone->FRONT_ADIABAT = 0;
            $equipGenZone->REAR_ADIABAT = 0;
            $equipGenZone->TOP_CHANGE = 1;
            $equipGenZone->TOP_PRM1 = 1.0;
            $equipGenZone->TOP_PRM2 = 0;
            $equipGenZone->TOP_PRM3 = 0;
            $equipGenZone->BOTTOM_CHANGE = 1;
            $equipGenZone->BOTTOM_PRM1 = 1.0;
            $equipGenZone->BOTTOM_PRM2 = 0;
            $equipGenZone->BOTTOM_PRM3 = 0;
            $equipGenZone->LEFT_CHANGE = 1;
            $equipGenZone->LEFT_PRM1 = 1.0;
            $equipGenZone->LEFT_PRM2 = 0;
            $equipGenZone->LEFT_PRM3 = 0;
            $equipGenZone->RIGHT_CHANGE = 1;
            $equipGenZone->RIGHT_PRM1 = 1.0;
            $equipGenZone->RIGHT_PRM2 = 0;
            $equipGenZone->RIGHT_PRM3 = 0;
            $equipGenZone->FRONT_CHANGE = 1;
            $equipGenZone->FRONT_PRM1 = 1.0;
            $equipGenZone->FRONT_PRM2 = 0;
            $equipGenZone->FRONT_PRM3 = 0;
            $equipGenZone->REAR_CHANGE = 1;
            $equipGenZone->REAR_PRM1 = 1.0;
            $equipGenZone->REAR_PRM2 = 0;
            $equipGenZone->REAR_PRM3 = 0;
            $equipGenZone->save();
        }
    }

    private function duplicateEquipZone($oldIdEquip, $newIdEquip)
    {
        $equipZones = EquipZone::where('ID_EQUIP', $oldIdEquip)->get();
        if (count($equipZones) > 0) {
            foreach ($equipZones as $equipZone) {
                $newEquipZone = new EquipZone();
                $newEquipZone->ID_EQUIP = $newIdEquip;
                $newEquipZone->EQUIP_ZONE_NUMBER = $equipZone->EQUIP_ZONE_NUMBER;
                $newEquipZone->EQUIP_ZONE_LENGTH = $equipZone->EQUIP_ZONE_LENGTH;
                $newEquipZone->EQUIP_ZONE_NAME = $equipZone->EQUIP_ZONE_NAME;
                $newEquipZone->save();
            }
        }
    }

    public function getDecryptBinary($oldIdEquip, $newIdEquip)
    {
        $decrypt = null;

        $decrypt = DB::select("select convert(varchar(100), DecryptByPassPhrase('".ENCRYPT_KEY."', DLL_IDX)) as DLL, convert(varchar(100), DecryptByPassPhrase('".ENCRYPT_KEY."', FATHER_DLL_IDX)) as FATHER_DLL from EQUIPMENT where ID_EQUIP = " . $oldIdEquip);

        $DLL = "EncryptByPassPhrase('".ENCRYPT_KEY."', CAST(". $decrypt[0]->DLL ." AS varchar(100)), null)";
        $FATHER_DLL = "EncryptByPassPhrase('".ENCRYPT_KEY."', CAST(". $decrypt[0]->FATHER_DLL ." AS varchar(100)), null)";

        DB::update(DB::RAW('update EQUIPMENT set DLL_IDX = ' .$DLL.' where ID_EQUIP = ' . $newIdEquip));
        DB::update(DB::RAW('update EQUIPMENT set FATHER_DLL_IDX = '  .$FATHER_DLL.'  where ID_EQUIP = ' . $newIdEquip));
    }

    private function checkNameAndVersion($equipName, $equipVersion)
    {
        $equipments = Equipment::all();

        for($i = 0; $i < count($equipments); $i++) {
            if (strtoupper($equipments[$i]->EQUIP_NAME) == strtoupper($equipName)) {
                if (intval($equipments[$i]->EQUIP_VERSION) == intval($equipVersion)) {
                    return false;
                }
            }
        }
        return true;
    }
}
