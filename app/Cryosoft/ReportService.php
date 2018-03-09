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
namespace App\Cryosoft;

use App\Models\Study;
use App\Models\StudyEquipment;
use App\Models\Production;
use App\Models\Product;
use App\Models\DimaResults;
use App\Models\EconomicResults;
use App\Models\StudEqpPrm;
use App\Models\MinMax;
use App\Models\StudEquipprofile;
use App\Models\RecordPosition;
use App\Models\TempRecordPts;
use App\Models\TempRecordData;
use App\Models\MeshPosition;
use App\Models\ProductElmt;
use App\Models\CalculationParameter;

use App\Cryosoft\ValueListService;
use App\Cryosoft\UnitsConverterService;
use App\Cryosoft\EquipmentsService;
use App\Cryosoft\DimaResultsService;
use App\Cryosoft\EconomicResultsService;
use App\Cryosoft\StudyService;
use App\Cryosoft\OutputService;
use App\Models\LayoutGeneration;

class ReportService
{
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
	protected $unit;

	/**
	 * @var App\Cryosoft\EquipmentsService;
	 */
    protected $equip;

	/**
	 * @var App\Cryosoft\DimaResultsService;
	 */
    protected $dima;

	/**
	 * @var App\Cryosoft\EconomicResultsService;
	 */
    protected $eco;

	/**
	 * @var App\Cryosoft\StudyService;
	 */
    protected $stu;

	/**
	 * @var App\Cryosoft\OutputService;
	 */
    protected $output;
    
	public function __construct(\Laravel\Lumen\Application $app) 
    {
		$this->app = $app;
		$this->auth = $app['Illuminate\\Contracts\\Auth\\Factory'];
		$this->value = $app['App\\Cryosoft\\ValueListService'];
		$this->unit = $app['App\\Cryosoft\\UnitsConverterService'];
		$this->equip = $app['App\\Cryosoft\\EquipmentsService'];
		$this->dima = $app['App\\Cryosoft\\DimaResultsService'];
		$this->eco = $app['App\\Cryosoft\\EconomicResultsService'];
		$this->stu = $app['App\\Cryosoft\\StudyService'];
		$this->output = $app['App\\Cryosoft\\OutputService'];
	}

    public function getOptimumHeadBalance($idStudy)
    {
        $idUser = $this->auth->user()->ID_USER;
        $study = Study::find($idStudy);
        $calculationMode = $study->CALCULATION_MODE;

        //get study equipment
        $studyEquipments = StudyEquipment::where("ID_STUDY", $idStudy)->orderBy("ID_STUDY_EQUIPMENTS", "ASC")->get();

        $lfcoef = $this->unit->unitConvert($this->value->MASS_PER_UNIT, 1.0);

        $result = array();

        foreach ($studyEquipments as $row) {
            $capabilitie = $row->CAPABILITIES;
            $equipStatus = $row->EQUIP_STATUS;
            $brainType = $row->BRAIN_TYPE;
            $calculWarning = "";

            $item["id"] = $idStudyEquipment = $row->ID_STUDY_EQUIPMENTS;

            $sSpecificSize = "";
            if ($this->equip->getCapability($capabilitie , 2097152)) {
                $sSpecificSize = $this->equip->getSpecificEquipSize($idStudyEquipment);
            }
            $item["specificSize"] = $sSpecificSize;   
            
            $item["equipName"] = $this->equip->getResultsEquipName($idStudyEquipment);
            $calculate = "";
            $tr = $ts = $vc = $vep = $tfp = $dhp = $conso= $conso_warning = $toc = $precision = "";

            $item["runBrainPopup"] = false;
            if ($this->equip->getCapability($capabilitie, 128)) {
                $item["runBrainPopup"] = true;
            }

            if (!($this->equip->getCapability($capabilitie, 128))) {
                $tr = $ts = $vc = $vep = $tfp = $dhp = $conso= $conso_warning = $toc = $precision = "";
                $calculate = "disabled";
            } else if (($equipStatus != 0) && ($equipStatus != 1) && ($equipStatus != 100000)) {
                $tr = $ts = $vc = $vep = $tfp = $dhp = $conso = $conso_warning = $toc = $precision = "****";
                $calculate = "disabled";
            } else if ($equipStatus == 10000) {
                $tr = $ts = $vc = $vep = $tfp = $dhp = $conso= $conso_warning = $toc = $precision = "";
                $calculate = "disabled";
            } else {
                $dimaResult = DimaResults::where("ID_STUDY_EQUIPMENTS", $idStudyEquipment)->where("DIMA_TYPE", 1)->first();
                if ($dimaResult == null) {
                    $tr = $ts = $vc = $vep = $tfp = $dhp = $conso= $conso_warning = $toc = $precision = "";
                } else {
                    switch ($brainType) {
                        case 0:
                            $calculate = true;
                            break;

                        case 1:
                        case 2:
                        case 3:
                            $calculate = false;
                            break;

                        case 4:
                            $calculate = false;
                            break;

                        default:
                            $calculate = "";
                            break;
                    }

                    if ($this->dima->getCalculationWarning($dimaResult->DIMA_STATUS) != 0) {
                        $calculWarning = $this->dima->getCalculationWarning($dimaResult->DIMA_STATUS);
                    }

                    $tr = $this->unit->controlTemperature($dimaResult->SETPOINT);
                    $ts = $this->unit->time($dimaResult->DIMA_TS);
                    $vc = $this->unit->convectionSpeed($dimaResult->DIMA_VC);
                    $vep = $this->unit->enthalpy($dimaResult->DIMA_VEP);
                    $tfp = $this->unit->prodTemperature($dimaResult->DIMA_TFP);

                    if ($this->equip->getCapability($capabilitie, 256)) {
                        $consumption = $dimaResult->CONSUM / $lfcoef;
                        $idCoolingFamily = $row->ID_COOLING_FAMILY;

                        $valueStr = $this->unit->consumption($consumption, $idCoolingFamily, 1);

                        $calculationStatus = $this->dima->getCalculationStatus($dimaResult->DIMA_STATUS);

                        $consumptionCell = $this->dima->consumptionCell($lfcoef, $calculationStatus, $valueStr);
                        $conso = $consumptionCell["value"];
                        $conso_warning = $consumptionCell["warning"];

                    } else {
                        $conso = "****";
                    }

                    if ($this->equip->getCapability($capabilitie, 32)) {
                        $dhp = $this->unit->productFlow($dimaResult->HOURLYOUTPUTMAX);

                        $batch = $row->BATCH_PROCESS;
                        if ($batch) {
                            $massConvert = $this->unit->mass($dimaResult->USERATE);
                            $massSymbol = $this->unit->massSymbol();
                            $toc = $massConvert . " " . $massSymbol . "/batch";
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
            $item["conso_warning"] = $conso_warning;
            $item["toc"] = $toc;
            $item["precision"] = $precision;

            $result[] = $item;
        }


        return $result;
    }

    public function getOptimumHeadBalanceMax($idStudy)
    {
        $idUser = $this->auth->user()->ID_USER;
        $study = Study::find($idStudy);

        $calculationMode = $study->CALCULATION_MODE;

        //get study equipment
        $studyEquipments = StudyEquipment::where("ID_STUDY", $idStudy)->orderBy("ID_STUDY_EQUIPMENTS", "ASC")->get();

        $lfcoef = $this->unit->unitConvert($this->value->MASS_PER_UNIT, 1.0);



        $result = array();

        foreach ($studyEquipments as $row) {
            $capabilitie = $row->CAPABILITIES;
            $equipStatus = $row->EQUIP_STATUS;
            $brainType = $row->BRAIN_TYPE;
            $calculWarning = "";
            $item["id"] = $idStudyEquipment = $row->ID_STUDY_EQUIPMENTS;
            $sSpecificSize = "";
            if ($this->equip->getCapability($capabilitie , 2097152)) {
                $sSpecificSize = $this->equip->getSpecificEquipSize($idStudyEquipment);
            }
            $item["specificSize"] = $sSpecificSize;
            $item["equipName"] = $this->equip->getResultsEquipName($idStudyEquipment);

            $dimaResult = DimaResults::where("ID_STUDY_EQUIPMENTS", $idStudyEquipment)->where("DIMA_TYPE", 16)->first();

            if (!($this->equip->getCapability($capabilitie, 128))) {
                $tr = $ts = $vc = $vep = $tfp = $dhp = $conso = $conso_warning = $toc = $precision = "****";
            } else if ($dimaResult == null) {
                $tr = $ts = $vc = $vep = $tfp = $dhp = $conso = $conso_warning = $toc = $precision = "";
            } else {
                $calculWarning = $this->dima->getCalculationWarning($dimaResult->DIMA_STATUS);

                if ($calculWarning != 0) {
                    $tr = $ts = $vc = $vep = $tfp = $dhp = $conso = $conso_warning = $toc = $precision = "****";
                } else {
                    $tr = $this->unit->controlTemperature($dimaResult->SETPOINT);
                    $ts = $this->unit->time($dimaResult->DIMA_TS);
                    $vc = $this->unit->convectionSpeed($dimaResult->DIMA_VC);
                    $vep = $this->unit->enthalpy($dimaResult->DIMA_VEP);
                    $tfp = $this->unit->prodTemperature($dimaResult->DIMA_TFP);

                    if ($this->equip->getCapability($capabilitie, 256)) {
                        $consumption = $dimaResult->CONSUM / $lfcoef;
                        $idCoolingFamily = $row->ID_COOLING_FAMILY;

                        $valueStr = $this->unit->consumption($consumption, $idCoolingFamily, 1);

                        $calculationStatus = $this->dima->getCalculationStatus($dimaResult->DIMA_STATUS);

                        $consumptionCell = $this->dima->consumptionCell($lfcoef, $calculationStatus, $valueStr);
                        $conso = $consumptionCell["value"];
                        $conso_warning = $consumptionCell["warning"];

                    } else {
                        $conso = "****";
                        $conso_warning = "";
                    }

                    if ($this->equip->getCapability($capabilitie, 32)) {
                        $dhp = $this->unit->productFlow($dimaResult->HOURLYOUTPUTMAX);

                        $batch = $row->BATCH_PROCESS;
                        if ($batch) {
                            $massConvert = $this->unit->mass($dimaResult->USERATE);
                            $massSymbol = $this->unit->massSymbol();
                            $toc = $massConvert . " " . $massSymbol . "/batch";
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
            $item["conso_warning"] = $conso_warning;
            $item["toc"] = $toc;
            $item["precision"] = $precision;

            $result[] = $item;
        }

        return $result;
    }

    public function getEstimationHeadBalance($idStudy, $trSelect = 1)
    {
        // $idStudy = $this->request->input('idStudy');
        $idUser = $this->auth->user()->ID_USER;

        $study = Study::find($idStudy);

        $calculationMode = $study->CALCULATION_MODE;

        //get study equipment
        $studyEquipments = StudyEquipment::where("ID_STUDY", $idStudy)->orderBy("ID_STUDY_EQUIPMENTS", "ASC")->get();

        $lfcoef = $this->unit->unitConvert($this->value->MASS_PER_UNIT, 1.0);

        $result = array();

        if (count($studyEquipments) > 0) {
            foreach ($studyEquipments as $row) {
                $capabilitie = $row->CAPABILITIES;
                $equipStatus = $row->EQUIP_STATUS;
                $brainType = $row->BRAIN_TYPE;
                $idCoolingFamily = $row->ID_COOLING_FAMILY;
                $calculWarning = "";
                $item["id"] = $idStudyEquipment = $row->ID_STUDY_EQUIPMENTS;
                $item["specificSize"] = $this->equip->getSpecificEquipSize($idStudyEquipment);
                $item["equipName"] = $this->equip->getResultsEquipName($idStudyEquipment);

                $tr = $ts = $vc = $vep = $tfp = $dhp = $conso = $toc = $tocMax = $consoMax = $precision = "";

                $studEqpPrm = StudEqpPrm::where("ID_STUDY_EQUIPMENTS", $idStudyEquipment)->where("VALUE_TYPE", 300)->first();
                if (!empty($studEqpPrm)) {
                    $lfTr = $studEqpPrm->VALUE;

                    if ($trSelect == 2) {
                        $lfTr += -10.0;
                    } else if ($trSelect == 0) {
                        $lfTr += 10.0;
                    }

                    $itemTr = $row->ITEM_TR;
                    $minMax = MinMax::where("LIMIT_ITEM", $itemTr)->first();
                    if (!($this->equip->getCapability($capabilitie, 16)) || !($this->equip->getCapability($capabilitie, 1)) && (($trSelect == 0) || ($trSelect == 2))) {
                        $tr = $ts = $vc = $vep = $tfp = $dhp = $conso = $toc = $tocMax = $consoMax = $precision = "---";
                    } else if ($lfTr < $minMax->LIMIT_MIN || $lfTr > $minMax->LIMIT_MAX) {
                        $tr = $ts = $vc = $vep = $tfp = $dhp = $conso = $toc = $tocMax = $consoMax = $precision = "****";
                    } else if ($equipStatus != 0 && $equipStatus != 1 && $equipStatus != 100000) {
                        $tr = $ts = $vc = $vep = $tfp = $dhp = $conso = $toc = $tocMax = $consoMax = $precision = "****";
                    } else if ($equipStatus == 100000) {
                        $tr = $ts = $vc = $vep = $tfp = $dhp = $conso = $toc = $tocMax = $consoMax = $precision = "";
                    } else {
                        $dimaResults = DimaResults::where("ID_STUDY_EQUIPMENTS", $idStudyEquipment)->orderBy("SETPOINT", "DESC")->get();
                        if (count($dimaResults) > 0) {
                            $dimaR = $dimaResults[$trSelect];

                            if (!empty($dimaR)) {
                                $tr = $this->unit->controlTemperature($dimaR->SETPOINT);
                                $ts = $this->unit->time($dimaR->DIMA_TS);

                                if ($brainType != 0 && $trSelect == 1) {
                                    $tfp = $this->unit->prodTemperature($row->AVERAGE_PRODUCT_TEMP);
                                    $vep = $this->unit->enthalpy($row->AVERAGE_PRODUCT_ENTHALPY);

                                    if ($row->PRECIS < 50.0) {
                                        $precision = $this->unit->precision($row->PRECIS);
                                    } else {
                                        $precision = "!!!!";
                                    }
                                } else {
                                    $vep = $this->unit->enthalpy($dimaR->DIMA_VEP);
                                    $tfp = $this->unit->prodTemperature($dimaR->DIMA_TFP);
                                    $precision = "&nbsp;";
                                }

                                if ($this->equip->getCapability($capabilitie, 256)) {
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

                                if ($this->equip->getCapability($capabilitie, 32)) {
                                    $batch = $row->BATCH_PROCESS;
                                    if ($this->dima->isConsoToDisplay($dimaR->DIMA_STATUS) == 0) {
                                        $toc = "****";
                                    }
                                    if ($batch) {
                                        $toc = $this->unit->mass($dimaR->USERATE) . " " . $this->unit->massSymbol() . "/batch";
                                    } else {
                                        $toc = $this->unit->toc($dimaR->USERATE) . "%";
                                    }

                                    if ($batch) {
                                        $tocMax = $this->unit->mass($dimaR->USERATEMAX) . " " . $this->unit->massSymbol() . "/batch";
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
        }
        


        return $result;
    }

    public function getAnalyticalConsumption($idStudy)
    {
        $study = Study::find($idStudy);

        $lfcoef = $this->unit->unitConvert($this->value->MASS_PER_UNIT, 1.0);

        $calculationMode = $study->CALCULATION_MODE;

        $studyEquipments = StudyEquipment::where("ID_STUDY", $idStudy)->where("BRAIN_TYPE", ">=", 0)->orderBy("ID_STUDY_EQUIPMENTS", "ASC")->get();

        $result = array();

        foreach ($studyEquipments as $row) {
            $capabilitie = $row->CAPABILITIES;
            $equipStatus = $row->EQUIP_STATUS;
            $brainType = $row->BRAIN_TYPE;
            $idCoolingFamily = $row->ID_COOLING_FAMILY;
            $idStudyEquipment = $row->ID_STUDY_EQUIPMENTS;

            if ($this->equip->getCapability($capabilitie, 256)) {
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
                    if (!$consoToDisplay) {
                        $equipName = "****";
                        $tc = "****";
                        $kgProduct = "****";
                        $product = "****";
                        $day = "****";
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

                        $day = $this->unit->consumption($economicResult->FLUID_CONSUMPTION_DAY, $idCoolingFamily, 1, 0);
                        $week = $this->unit->consumption($economicResult->FLUID_CONSUMPTION_WEEK, $idCoolingFamily, 1, 0);
                        $hour = $this->unit->consumption($economicResult->FLUID_CONSUMPTION_HOUR, $idCoolingFamily, 1);
                        $month = $this->unit->consumption($economicResult->FLUID_CONSUMPTION_MONTH, $idCoolingFamily, 1, 0);
                        $year = $this->unit->consumption($economicResult->FLUID_CONSUMPTION_YEAR, $idCoolingFamily, 1, 0);
                        $eqptCold = $this->unit->consumption($economicResult->FLUID_CONSUMPTION_MAT_GETCOLD, $idCoolingFamily, 3);
                        $eqptPerm = $this->unit->consumption($economicResult->FLUID_CONSUMPTION_MAT_PERM, $idCoolingFamily, 2);
                        $lineCold = $this->unit->consumption($economicResult->FLUID_CONSUMPTION_LINE_GETCOLD, $idCoolingFamily, 3);
                        $linePerm = $this->unit->consumption($economicResult->FLUID_CONSUMPTION_LINE_PERM, $idCoolingFamily, 2);
                        $tank = $this->unit->consumption($economicResult->FLUID_CONSUMPTION_TANK, $idCoolingFamily, 1);

                        $percentProduct = round($economicResult->PERCENT_PRODUCT * 100);
                        $percentEquipmentPerm = round($economicResult->PERCENT_EQUIPMENT_PERM * 100);
                        $percentEquipmentDown = round($economicResult->PERCENT_EQUIPMENT_DOWN * 100);
                        $percentLine = round($economicResult->PERCENT_LINE * 100);
                    }

                    $item["id"] = $idStudyEquipment;
                    $item["equipName"] = $equipName;

                    $item["tc"] = $tc;
                    $item["kgProduct"] = $kgProduct;
                    $item["product"] = $product;
                    $item["day"] = $day;
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
            }

        }

        return $result;
    }

    public function getProInfoStudy($idStudy)
    {
        $production = Production::select("PROD_FLOW_RATE", "AVG_T_INITIAL")->where("ID_STUDY", $idStudy)->first();
        $product = Product::select("PROD_REALWEIGHT")->where("ID_STUDY", $idStudy)->first();

        $prodFlowRate = $production->PROD_FLOW_RATE;
        $avgTInitial = $production->AVG_T_INITIAL;
        $prodElmtRealweight = $this->unit->mass($product->PROD_REALWEIGHT);

        return compact("prodFlowRate", "prodElmtRealweight", "avgTInitial");
    }

    public function heatExchange($idStudy) 
    {
        $idStudyEquipment = StudyEquipment::where('ID_STUDY', $idStudy)->first();
        $listRecordPos = RecordPosition::where("ID_STUDY_EQUIPMENTS", $idStudyEquipment->ID_STUDY_EQUIPMENTS)->orderBy("RECORD_TIME", "ASC")->get();

        $curve = array();
        $result = array();
        foreach ($listRecordPos as $row) {

            $item["x"] = $this->unit->time($row->RECORD_TIME);
            $item["y"] = $this->unit->enthalpy($row->AVERAGE_ENTH_VAR);

            $curve[] = $item;
        }

        $nbSteps = TempRecordPts::where("ID_STUDY", $idStudy)->first();
        $nbSample = $nbSteps->NB_STEPS;

        $nbRecord = count($listRecordPos);

        $lfTS = $listRecordPos[$nbRecord - 1]->RECORD_TIME;
        $lfStep = $listRecordPos[1]->RECORD_TIME - $listRecordPos[0]->RECORD_TIME;
        $lEchantillon = $this->output->calculateEchantillon($nbSample, $nbRecord, $lfTS, $lfStep);

        foreach ($lEchantillon as $row) {

            $recordPos = $listRecordPos[$row];

            $itemResult["x"] = $this->unit->time($recordPos->RECORD_TIME);
            $itemResult["y"] = $this->unit->enthalpy($recordPos->AVERAGE_ENTH_VAR);

            $result[] = $itemResult;
        }

        return compact("result", "curve");
    }

}