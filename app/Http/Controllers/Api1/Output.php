<?php

namespace App\Http\Controllers\Api1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Factory as Auth;

use App\Models\Study;
use App\Models\StudyEquipment;
use App\Models\Production;
use App\Models\Product;
use App\Models\DimaResults;

use App\Cryosoft\UnitsConverterService;
use App\Cryosoft\EquipmentsService;
use App\Cryosoft\DimaResultsService;
use App\Cryosoft\ValueListService;


class Output extends Controller
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
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request, Auth $auth, UnitsConverterService $unit, EquipmentsService $equip, DimaResultsService $dima, ValueListService $value)
    {
        $this->request = $request;
        $this->auth = $auth;
        $this->unit = $unit;
        $this->equip = $equip;
        $this->dima = $dima;
        $this->value =  $value;
    }

    public function getOptimumHeadBalance($idStudy)
    {
        $idUser = $this->auth->user()->ID_USER;

        $study = Study::find($idStudy);
        $production = Production::where("ID_STUDY", $idStudy)->first();
        $product = Product::where("ID_STUDY", $idStudy)->first();

        $prodFlowRate = $production->PROD_FLOW_RATE;
        $avgTInitial = $production->AVG_T_INITIAL;
        $prodElmtRealweight = $product->PROD_REALWEIGHT;


        $calculationMode = $study->CALCULATION_MODE;

        // get Symbol
        $productFlowSymbol = $this->unit->productFlowSymbol();
        $massSymbol = $this->unit->massSymbol();
        $temperatureSymbol = $this->unit->temperatureSymbol();
        $percentSymbol = "%";
        $timeSymbol = $this->unit->timeSymbol();

        $symbol = compact("productFlowSymbol", "massSymbol", "temperatureSymbol", "percentSymbol", "timeSymbol");

        //get study equipment
        $studyEquipments = StudyEquipment::where("ID_STUDY", $idStudy)->orderBy("ID_STUDY_EQUIPMENTS", "ASC")->get();

        $lfcoef = $this->unit->unitConvert($this->value->MASS_PER_UNIT, 1.0);

        $ecoEnable = false;
        if ($this->auth->user()->USERPRIO < $this->value->PROFIL_GUEST && $study->OPTION_ECO == $this->value->STUDY_ECO_MODE) {
            $ecoEnable = true;
        }

        $result = array();

        foreach ($studyEquipments as $row) {
            $capabilitie = $row->CAPABILITIES;
            $equipStatus = $row->EQUIP_STATUS;
            $brainType = $row->BRAIN_TYPE;
            $calculWarning = "";
            $item["id"] = $idStudyEquipment = $row->ID_STUDY_EQUIPMENTS;
            $item["specificSize"] = $this->equip->getSpecificEquipSize($idStudyEquipment);
            $item["equipName"] = $this->equip->getResultsEquipName($idStudyEquipment);     

            $item["runBrainPopup"] = false;
            if ($this->equip->getCapability($capabilitie , 128)) {
                $item["runBrainPopup"] = true;
            }

            if (!($this->equip->getCapability($capabilitie , 128))) {
                $tr = $ts = $vc = $vep = $tfp = $dhp = $conso = $toc = $precision = "null";
                $calculate = "disabled";
            } else if (($equipStatus != 0) && ($equipStatus != 1) && ($equipStatus != 100000)){
                $tr = $ts = $vc = $vep = $tfp = $dhp = $conso = $toc = $precision = "****";
                $calculate = "disabled";
            } else if ($equipStatus == 10000) {
                $tr = $ts = $vc = $vep = $tfp = $dhp = $conso = $toc = $precision = "";
                $calculate = "disabled";
            } else {
                $dimaResult = DimaResults::where("ID_STUDY_EQUIPMENTS", $idStudyEquipment)->where("DIMA_TYPE", 1)->first();
                if ($dimaResult == null) {
                    $tr = $ts = $vc = $vep = $tfp = $dhp = $conso = $toc = $precision = "";
                } else {
                    switch ($brainType) {
                        case 0:
                            $calculate = "";
                            break;
                        
                        case 1:
                        case 2:
                        case 3:    
                            $calculate = "disabled";
                            break;

                        case 4:    
                            $calculate = "disabled";
                            break;

                        default:
                            $calculate = "";
                            break;
                    }

                    if ($this->dima->getCalculationWarning($dimaResult->DIMA_STATUS) != 0) {
                        $sCalculWarning =  $this->dima->getCalculationWarning($dimaResult->DIMA_STATUS);
                    }

                    $tr = $this->unit->unitConvert($this->value->TEMPERATURE, $dimaResult->SETPOINT);
                    $ts = $this->unit->unitConvert($this->value->TIME, $dimaResult->DIMA_TS);
                    $vc = $this->unit->unitConvert($this->value->CONV_SPEED, $dimaResult->DIMA_VC);
                    $vep = $this->unit->unitConvert($this->value->ENTHALPY, $dimaResult->DIMA_VEP);
                    $tfp = $this->unit->unitConvert($this->value->TEMPERATURE, $dimaResult->DIMA_TFP);

                    if ($this->equip->getCapability($capabilitie, 256)) {
                        $consumption = $dimaResult->CONSUM / $lfcoef;
                        $idCoolingFamily = $row->ID_COOLING_FAMILY;

                        $valueStr = $this->unit->consumption($consumption, $idCoolingFamily, 1);

                        $calculationStatus = $this->dima->getCalculationStatus($dimaResult->DIMA_STATUS);

                        $conso = $this->dima->consumptionCell($lfcoef, $calculationStatus, $valueStr);

                    } else {
                        $conso = "****";
                    }

                    if ($this->equip->getCapability($capabilitie , 32)) {
                        $dhp = $this->unit->unitConvert($this->value->PRODUCT_FLOW, $dimaResult->HOURLYOUTPUTMAX);
                        
                        $batch = $row->BATCH_PROCESS;
                        if ($batch) {
                            $massConvert = $this->unit->mass($dimaResult->USERATE);
                            $massSymbol = $this->unit->massSymbol();
                            $toc = $massConvert . $massSymbol . "/batch";
                        } else {
                            $toc = $this->unit->toc($dimaResult->USERATE) . "%";
                        }
                    } else {
                        $dhp = $toc = "****";
                    }

                    if ($dimaResult->DIMA_PRECIS < 50.0) {
                        $uNone = $this->unit->uNone();
                        $precision = $this->unit->convertCalculator($dimaResult->DIMA_PRECIS, $uNone["coeffA"], $uNone["coeffB"]);
                    } else {
                        $precision = "!!!!";
                    }

                    $item["tr"] = $tr;
                    $item["ts"] = $ts;
                    $item["vc"] = $vc;
                    $item["vep"] = $vep;
                    $item["tfp"] = $tfp;
                    $item["dhp"] = $dhp;
                    $item["conso"] = $conso;
                    $item["toc"] = $toc;
                    $item["precision"] = $precision;

                    $result[] = $item;
                }
            }
        }


        return compact("prodFlowRate", "avgTInitial", "prodElmtRealweight", "calculationMode", "ecoEnable", "symbol", "result");
    }
}
