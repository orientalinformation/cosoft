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
use App\Models\EconomicResults;
use App\Models\StudEqpPrm;
use App\Models\MinMax;

use App\Cryosoft\ValueListService;
use App\Cryosoft\UnitsConverterService;
use App\Cryosoft\EquipmentsService;
use App\Cryosoft\DimaResultsService;
use App\Cryosoft\EconomicResultsService;


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
    public function __construct(Request $request, Auth $auth, UnitsConverterService $unit, EquipmentsService $equip, DimaResultsService $dima, ValueListService $value, EconomicResultsService $eco)
    {
        $this->request = $request;
        $this->auth = $auth;
        $this->unit = $unit;
        $this->equip = $equip;
        $this->dima = $dima;
        $this->value =  $value;
        $this->eco = $eco;
    }

    public function getOptimumHeadBalance($idStudy)
    {
        $idUser = $this->auth->user()->ID_USER;

        $study = Study::find($idStudy);
        $production = Production::where("ID_STUDY", $idStudy)->first();
        $product = Product::where("ID_STUDY", $idStudy)->first();

        $prodFlowRate = $production->PROD_FLOW_RATE;
        $avgTInitial = $production->AVG_T_INITIAL;
        $prodElmtRealweight = $this->unit->mass($product->PROD_REALWEIGHT);

        $resutlAna = compact("prodFlowRate", "prodElmtRealweight", "avgTInitial");

        $calculationMode = $study->CALCULATION_MODE;

        // get Symbol
        $symbol = $this->unit->getAllSymbol();

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
                        $calculWarning =  $this->dima->getCalculationWarning($dimaResult->DIMA_STATUS);
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
                        $precision = $this->unit->precision($dimaResult->DIMA_PRECIS);
                    } else {
                        $precision = "!!!!";
                    }
                    
                }
            }

            $item["calculWarning"] = $calculWarning;
            $item["calculate"] = $calculate;
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


        return compact("ecoEnable", "resutlAna", "symbol", "result");
    }

    public function getOptimumHeadBalanceMax($idStudy)
    {
        $idUser = $this->auth->user()->ID_USER;

        $study = Study::find($idStudy);
        $production = Production::where("ID_STUDY", $idStudy)->first();
        $product = Product::where("ID_STUDY", $idStudy)->first();

        $prodFlowRate = $production->PROD_FLOW_RATE;
        $avgTInitial = $production->AVG_T_INITIAL;
        $prodElmtRealweight = $this->unit->mass($product->PROD_REALWEIGHT);

        $resutlAna = compact("prodFlowRate", "prodElmtRealweight", "avgTInitial");


        $calculationMode = $study->CALCULATION_MODE;

        // get Symbol
        $symbol = $this->unit->getAllSymbol();

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

            $dimaResult = DimaResults::where("ID_STUDY_EQUIPMENTS", $idStudyEquipment)->where("DIMA_TYPE", 16)->first();  

            if (!($this->equip->getCapability($capabilitie , 128))) {
                $tr = $ts = $vc = $vep = $tfp = $dhp = $conso = $toc = $precision = "****";
            } else if ($dimaResult == null) { 
                $tr = $ts = $vc = $vep = $tfp = $dhp = $conso = $toc = $precision = "";
            } else {
                $calculWarning = $this->dima->getCalculationWarning($dimaResult->DIMA_STATUS);

                if ($calculWarning != 0) {
                    $tr = $ts = $vc = $vep = $tfp = $dhp = $conso = $toc = $precision = "****";
                } else {
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
                        $precision = $this->unit->precision($dimaResult->DIMA_PRECIS);
                    } else {
                        $precision = "!!!!";
                    }
                }
            }

            $item["calculWarning"] = $calculWarning;
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


        return compact("ecoEnable", "resutlAna", "symbol", "result");
    }

    public function getEstimationHeadBalance($idStudy)
    {
        $trSelect = ($this->request->input('tr') != "") ? $this->request->input('tr') : 1;
        $idUser = $this->auth->user()->ID_USER;

        $study = Study::find($idStudy);
        $production = Production::where("ID_STUDY", $idStudy)->first();
        $product = Product::where("ID_STUDY", $idStudy)->first();

        $prodFlowRate = $production->PROD_FLOW_RATE;
        $avgTInitial = $production->AVG_T_INITIAL;
        $prodElmtRealweight = $this->unit->mass($product->PROD_REALWEIGHT);

        $resutlAna = compact("prodFlowRate", "prodElmtRealweight", "avgTInitial");

        $calculationMode = $study->CALCULATION_MODE;

        // get Symbol
        $symbol = $this->unit->getAllSymbol();
        $consumptionSymbol = $this->unit->consumptionSymbol($this->equip->initEnergyDef($idStudy), 1);
        $symbol["consumptionSymbol"] = $consumptionSymbol;

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
            $idCoolingFamily = $row->ID_COOLING_FAMILY;
            $calculWarning = "";
            $item["id"] = $idStudyEquipment = $row->ID_STUDY_EQUIPMENTS;
            $item["specificSize"] = $this->equip->getSpecificEquipSize($idStudyEquipment);
            $item["equipName"] = $this->equip->getResultsEquipName($idStudyEquipment);     

            $tr = $ts = $vc = $vep = $tfp = $dhp = $conso = $toc = $tocMax = $consoMax = $precision = "null";

            $studEqpPrm = StudEqpPrm::where("ID_STUDY_EQUIPMENTS", $idStudyEquipment)->where("VALUE_TYPE", 300)->first();
            $lfTr = $studEqpPrm->VALUE;

            if ($trSelect == 2) {
                $lfTr += -10.0;
            } else if ($trSelect == 0) {
                $lfTr += 10.0;
            }

            $itemTr = $row->ITEM_TR;
            $minMax = MinMax::where("LIMIT_ITEM", $itemTr)->first();
            if (!($this->equip->getCapability($capabilitie , 16)) || !($this->equip->getCapability($capabilitie , 1)) && (($trSelect == 0) || ($trSelect == 2))) {
                $tr = $ts = $vc = $vep = $tfp = $dhp = $conso = $toc = $tocMax = $consoMax = $precision = "---";
            } else if ($lfTr < $minMax->LIMIT_MIN || $lfTr > $minMax->LIMIT_MAX) {
                $tr = $ts = $vc = $vep = $tfp = $dhp = $conso = $toc = $tocMax = $consoMax = $precision = "****";
            } else if ($equipStatus != 0 && $equipStatus != 1 && $equipStatus != 100000) {
                $tr = $ts = $vc = $vep = $tfp = $dhp = $conso = $toc = $tocMax = $consoMax = $precision = "****";
            } else if ($equipStatus == 100000) {
                $tr = $ts = $vc = $vep = $tfp = $dhp = $conso = $toc = $tocMax = $consoMax = $precision = "";
            } else {
                $dimaResults = DimaResults::where("ID_STUDY_EQUIPMENTS", $idStudyEquipment)->orderBy("SETPOINT", "DESC")->get();
                if (!empty($dimaResults)) {
                    $dimaR = $dimaResults[$trSelect];

                    if (!empty($dimaR)) {
                        $tr = $this->unit->controlTemperature($dimaR->SETPOINT);
                        $ts = $this->unit->time($dimaR->DIMA_TS);

                        if ($brainType != 0 && $trSelect == 1) {
                            $tfp = $this->unit->prodTemperature($row->AVERAGE_PRODUCT_TEMP);
                            $vep = $this->unit->enthalpy($row->AVERAGE_PRODUCT_ENTHALPY);

                            if ($row->PRECIS < 50.0) {
                                $precision = $this->unit->precision($row->PRECIS);
                            }else {
                                $precision = "!!!!";
                            }
                        } else {
                            $vep = $this->unit->enthalpy($dimaR->DIMA_VEP);
                            $tfp = $this->unit->prodTemperature($dimaR->DIMA_TFP); 
                            $precision = "&nbsp;";
                        }

                        if ($this->equip->getCapability($capabilitie , 256)) {
                            if ($lfcoef != 0.0) {
                                if ($this->dima->isConsoToDisplay($dimaR->DIMA_STATUS) == 0) {
                                    $conso = "****";
                                } else {
                                    $conso = $this->unit->consumption($dimaR->CONSUM, $idCoolingFamily, 1);
                                }
                                $consoMax = $this->unit->consumption($dimaR->CONSUMMAX / $lfcoef, $idCoolingFamily, 1);
                            } else {
                                $conso = $consoMax = "****";
                            }

                        }

                        if ($this->equip->getCapability($capabilitie , 32)) {
                            $batch = $row->BATCH_PROCESS;
                            if ($this->dima->isConsoToDisplay($dimaR->DIMA_STATUS) == 0) {
                                $toc = "****";
                            } if ($batch) {
                                $toc = $this->unit->mass($dimaR->USERATE) . $this->unit->massSymbol() . "/batch";
                            } else {
                                $toc = $this->unit->toc($dimaR->USERATE) . "%";
                            }

                            if ($batch) {
                                $tocMax = $this->unit->mass($dimaR->USERATEMAX) . $this->unit->massSymbol() . "/batch";
                            } else {
                                $tocMax = $this->unit->toc($dimaR->USERATEMAX) . "%";
                            }

                            $dhp = $this->unit->productFlow($dimaR->HOURLYOUTPUTMAX);
                        } else {
                            $toc = $tocMax = $dhp = "---";
                        }
                    } else {
                        $tr = $ts = $vc = $vep = $tfp = $dhp = $conso = $toc = $tocMax = $consoMax = $precision = "****";
                    }
                }
            }

            $item["tr"] = $tr;
            $item["ts"] = $ts;
            $item["vc"] = $vc;
            $item["vep"] = $vep;
            $item["tfp"] = $tfp;
            $item["dhp"] = $dhp;
            $item["conso"] = $conso;
            $item["toc"] = $toc;
            $item["consoMax"] = $consoMax;
            $item["tocMax"] = $tocMax;
            $item["precision"] = $precision;

            $result[] = $item;
        }


        return compact("ecoEnable", "resutlAna", "symbol", "result");
    }

    public function getAnalyticalConsumption($idStudy)
    {
        $study = Study::find($idStudy);

        $lfcoef = $this->unit->unitConvert($this->value->MASS_PER_UNIT, 1.0);

        $ecoEnable = false;
        if ($this->auth->user()->USERPRIO < $this->value->PROFIL_GUEST && $study->OPTION_ECO == $this->value->STUDY_ECO_MODE) {
            $ecoEnable = true;
        }

        $calculationMode = $study->CALCULATION_MODE;

        // get Symbol
        $symbol = $this->unit->getAllSymbol();
        $symbol["consumSymbol"] = $this->unit->consumptionSymbol($this->equip->initEnergyDef($idStudy), 1);
        $symbol["consumMaintienSymbol"] = $this->unit->consumptionSymbol($this->equip->initEnergyDef($idStudy), 2);
        $symbol["mefSymbol"] = $this->unit->consumptionSymbol($this->equip->initEnergyDef($idStudy), 3);

        $studyEquipments = StudyEquipment::where("ID_STUDY", $idStudy)->where("BRAIN_TYPE", ">=", 0)->orderBy("ID_STUDY_EQUIPMENTS", "ASC")->get();

        $result = array();

        foreach ($studyEquipments as $row) {
            $capabilitie = $row->CAPABILITIES;
            $equipStatus = $row->EQUIP_STATUS;
            $brainType = $row->BRAIN_TYPE;
            $idCoolingFamily = $row->ID_COOLING_FAMILY;
            $idStudyEquipment = $row->ID_STUDY_EQUIPMENTS;

            $equipName = "";
            $tc = "";
            $kgProduct = "";
            $product = "";
            $cday = "";
            $week = "";
            $hour = "";
            $month = "";
            $year = "";
            $eqptPerm = "";
            $eqptCold = "";
            $lineCold = "";
            $linePerm = "";
            $tank = "";
            $percentProduct = 0;
            $percentEquipmentPerm = 0;
            $percentEquipmentDown = 0;
            $percentLine = 0;

            if($this->equip->getCapability($capabilitie, 256)) {
                $equipName = $this->equip->getSpecificEquipName($idStudyEquipment);
                $economicResult = EconomicResults::where("ID_STUDY_EQUIPMENTS", $idStudyEquipment)->first();
               
               if ($calculationMode == 1) {
                    $studEqpPrm = StudEqpPrm::where("ID_STUDY_EQUIPMENTS", $idStudyEquipment)->where("VALUE_TYPE", 300)->first();
                    $lfSetpoint = 0.0;
                    if (!empty($studEqpPrm)) {
                        $lfSetpoint = $studEqpPrm->VALUE;
                    }

                    $dimaR = DimaResults::where("ID_STUDY_EQUIPMENTS", $idStudyEquipment)->where("SETPOINT", $lfSetpoint)->first();
               } else {
                    $dimaR = DimaResults::where("ID_STUDY_EQUIPMENTS", $idStudyEquipment)->where("DIMA_TYPE", 1)->first();
               }

               if ($economicResult != null) {
                    if ($dimaR != null) {
                        $dimaStatus = $this->dima->getCalculationStatus($dimaR->DIMA_STATUS);
                        $equipStatus = $row->EQUIP_STATUS;
                    } else {
                        $dimaStatus = 1;
                        $equipStatus = 0;
                    }

                    $consoToDisplay = $this->eco->isConsoToDisplay($dimaStatus, $equipStatus);
                    if(!$consoToDisplay) {
                        $equipName = "****";
                        $tc = "****";
                        $kgProduct = "****";
                        $product = "****";
                        $cday = "****";
                        $week = "****";
                        $hour = "****";
                        $month = "****";
                        $year = "****";
                        $eqptPerm = "****";
                        $eqptCold = "****";
                        $lineCold = "****";
                        $linePerm = "****";
                        $tank = "****";
                        $percentProduct = 0;
                        $percentEquipmentPerm = 0;
                        $percentEquipmentDown = 0;
                        $percentLine = 0;
                    } else {
                        $tc = $this->unit->consumption($economicResult->FLUID_CONSUMPTION_TOTAL / $lfcoef, $idCoolingFamily, 1);
                        if ($lfcoef != 0.0) {
                            $kgProduct = $this->unit->consumption($economicResult->FLUID_CONSUMPTION_PER_KG / $lfcoef, $idCoolingFamily, 1);
                            $product = $this->unit->consumption($economicResult->FLUID_CONSUMPTION_PRODUCT / $lfcoef, $idCoolingFamily, 1);
                        } else {
                            $kgProduct = $product = "****";
                        }
    
                        $cday = $this->unit->consumption($economicResult->FLUID_CONSUMPTION_DAY, $idCoolingFamily, 1, 0);
                        $eqptCold = $this->unit->consumption($economicResult->FLUID_CONSUMPTION_MAT_GETCOLD, $idCoolingFamily, 3);
                        $eqptPerm = $this->unit->consumption($economicResult->FLUID_CONSUMPTION_MAT_PERM, $idCoolingFamily, 2);
                        $lineCold = $this->unit->consumption($economicResult->FLUID_CONSUMPTION_LINE_GETCOLD, $idCoolingFamily, 3);
                        $linePerm = $this->unit->consumption($economicResult->FLUID_CONSUMPTION_LINE_PERM, $idCoolingFamily, 2);
                        $tank = $this->unit->consumption($economicResult->FLUID_CONSUMPTION_TANK, $idCoolingFamily, 1);
                        $week = $this->unit->consumption($economicResult->FLUID_CONSUMPTION_WEEK, $idCoolingFamily, 1, 0);
                        $hour = $this->unit->consumption($economicResult->FLUID_CONSUMPTION_HOUR, $idCoolingFamily, 1);
                        $month = $this->unit->consumption($economicResult->FLUID_CONSUMPTION_MONTH, $idCoolingFamily, 1, 0);
                        $year = $this->unit->consumption($economicResult->FLUID_CONSUMPTION_YEAR, $idCoolingFamily, 1, 0);

                        $percentProduct = round($economicResult->PERCENT_PRODUCT * 100);
                        $percentEquipmentPerm = round($economicResult->PERCENT_EQUIPMENT_PERM * 100);
                        $percentEquipmentDown = round($economicResult->PERCENT_EQUIPMENT_DOWN * 100);
                        $percentLine = round($economicResult->PERCENT_LINE * 100);
                    }
               }
            }

            $item["id"] = $idStudyEquipment;
            $item["equipName"] = $equipName;
            
            $item["tc"] = $tc;
            $item["kgProduct"] = $kgProduct;
            $item["product"] = $product;
            $item["cday"] = $cday;
            $item["week"] = $week;
            $item["hour"] = $hour;
            $item["month"] = $month;
            $item["year"] = $year;
            $item["eqptPerm"] = $eqptPerm;
            $item["eqptCold"] = $eqptCold;
            $item["lineCold"] = $lineCold;
            $item["linePerm"] = $linePerm;
            $item["tank"] = $tank;

            $item["percentProduct"] = $percentProduct;
            $item["percentEquipmentPerm"] = $percentEquipmentPerm;
            $item["percentEquipmentDown"] = $percentEquipmentDown;
            $item["percentLine"] = $percentLine;
            
            $result[] = $item;
        }

        return compact("ecoEnable", "symbol", "result");
    }
}
