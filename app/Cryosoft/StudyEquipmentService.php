<?php

namespace App\Cryosoft;

use App\Models\StudyEquipment;
use App\Models\LayoutGeneration;
use App\Models\StudEqpPrm;
use App\Models\LayoutResults;
use App\Models\DimaResults;
use App\Models\RecordPosition;
use App\Models\Product;
use App\Models\Production;
use App\Models\TempRecordData;
use App\Models\InitialTemperature;
use App\Models\ProductElement;
use App\Models\EquipGeneration;
use App\Models\TempExt;

class StudyEquipmentService
{
    const IRREGULAR_MESH = 0;
    const REGULAR_MESH = 1;

    const MAILLAGE_MODE_REGULAR = 0;
    const MAILLAGE_MODE_IRREGULAR = 1;

    public function __construct(\Laravel\Lumen\Application $app)
    {
        $this->app = $app;
        $this->auth = $app['Illuminate\\Contracts\\Auth\\Factory'];
        $this->value = $app['App\\Cryosoft\\ValueListService'];
        $this->convert = $app['App\\Cryosoft\\UnitsConverterService'];
        $this->kernel = $app['App\\Kernel\\KernelService'];
    }

    public function calculateEquipmentParams(StudyEquipment &$sEquip) 
    {
        // runLayoutCalculator(sEquip, username, password);
        $conf = $this->kernel->getConfig($this->auth->user()->ID_USER, $sEquip->ID_STUDY, $sEquip->ID_STUDY_EQUIPMENTS, 1, 1, 'c:\\temp\\layout-trace.txt');
        $lcRunResult = $this->kernel->getKernelObject('LayoutCalculator')->LCCalculation($conf, 1);

        $lcTSRunResult = -1;

        if (($sEquip->equipment->CAPABILITIES & CAP_VARIABLE_TS != 0) && ($sEquip->equipment->CAPABILITIES & CAP_TS_FROM_TOC != 0)) {
            $conf = $this->kernel->getConfig($this->auth->user()->ID_USER, $sEquip->ID_STUDY, $sEquip->ID_STUDY_EQUIPMENTS, 1, 1, 'c:\\temp\\layout-ts-trace.txt');
            $lcTSRunResult = $this->kernel->getKernelObject('LayoutCalculator')->LCCalculation($conf, 2);
        }

        $doTR = false;

        if (($sEquip->equipment->CAPABILITIES & CAP_VARIABLE_TR != 0)
            && ($sEquip->equipment->CAPABILITIES & CAP_TR_FROM_TS != 0)
            && ($sEquip->equipment->CAPABILITIES & CAP_PHAMCAST_ENABLE != 0)) {
            $doTR = true;
            $conf = $this->kernel->getConfig($this->auth->user()->ID_USER, $sEquip->ID_STUDY, $sEquip->ID_STUDY_EQUIPMENTS);
            $lcRunResult = $this->kernel->getKernelObject('PhamCastCalculator')->PCCCalculation($conf, !$doTR);
        }

        if (!$doTR
            && ($sEquip->equipment->CAPABILITIES & CAP_VARIABLE_TS != 0)
            && ($sEquip->equipment->CAPABILITIES & CAP_TS_FROM_TR != 0)
            && ($sEquip->equipment->CAPABILITIES & CAP_PHAMCAST_ENABLE != 0)) {
            $conf = $this->kernel->getConfig($this->auth->user()->ID_USER, $sEquip->ID_STUDY, $sEquip->ID_STUDY_EQUIPMENTS);
            $lcRunResult = $this->kernel->getKernelObject('PhamCastCalculator')->PCCCalculation($conf, !$doTR);
        }

        $conf = $this->kernel->getConfig($this->auth->user()->ID_USER, $sEquip->ID_STUDY, $sEquip->ID_STUDY_EQUIPMENTS);
        $lcRunResult = $this->kernel->getKernelObject('KernelToolCalculator')->KTCalculator($conf, 1);

        $sEquip->fresh();

        $conf = $this->kernel->getConfig($this->auth->user()->ID_USER, intval($sEquip->ID_STUDY), $sEquip->ID_STUDY_EQUIPMENTS);
        return $this->kernel->getKernelObject('StudyCleaner')->SCStudyClean($conf, 43);
    }

    /**
     * @return \App\Models\LayoutGeneration
     */
    public function getStudyEquipmentLayoutGen(StudyEquipment &$sEquip) 
    {
        $layoutGen = LayoutGeneration::where('ID_STUDY_EQUIPMENTS', $sEquip->ID_STUDY_EQUIPMENTS)->first();
        if (!$layoutGen) {
            $layoutGen = new LayoutGeneration();
            $layoutGen->ID_STUDY_EQUIPMENTS = $sEquip->ID_STUDY_EQUIPMENTS;
            $layoutGen->PROD_POSITION = 0;

            $equipWithSpecificSize = ($sEquip->STDEQP_WIDTH != NO_SPECIFIC_SIZE) && ($sEquip->STDEQP_LENGTH != NO_SPECIFIC_SIZE);

            if ($equipWithSpecificSize) {
                $layoutGen->SHELVES_TYPE = SHELVES_USERDEFINED;
                $layoutGen->SHELVES_LENGTH = $sEquip->STDEQP_LENGTH;
                $layoutGen->SHELVES_WIDTH = $sEquip->STDEQP_WIDTH;
            } else if ($sEquip->equipment->BATCH_PROCESS) {
            // default is now euronorme
                $layoutGen->SHELVES_TYPE = SHELVES_EURONORME;
                $layoutGen->SHELVES_LENGTH = SHELVES_EURO_LENGTH;
                $layoutGen->SHELVES_WIDTH = SHELVES_EURO_WIDTH;
            } else {
                $layoutGen->SHELVES_TYPE = SHELVES_USERDEFINED;
                $layoutGen->SHELVES_LENGTH = $sEquip->equipment->EQP_LENGTH;
                $layoutGen->SHELVES_WIDTH = $sEquip->equipment->EQP_WIDTH;
            }
            $layoutGen->LENGTH_INTERVAL = INTERVAL_UNDEFINED;
            $layoutGen->WIDTH_INTERVAL = INTERVAL_UNDEFINED;

            $layoutGen->save();
        } else {
            $layoutGen->LENGTH_INTERVAL = $this->convert->prodDimension(doubleval($layoutGen->LENGTH_INTERVAL));
            $layoutGen->WIDTH_INTERVAL = $this->convert->prodDimension(doubleval($layoutGen->WIDTH_INTERVAL));
        }
        return $layoutGen;
    }

    public function getDisplayStudyEquipment(StudyEquipment &$studyEquipment)
    {
        /** @var StudyEquipment $studyEquipment */
        $equip = [
            'ID_STUDY_EQUIPMENTS' => $studyEquipment->ID_STUDY_EQUIPMENTS,
            'EQUIP_NAME' => $studyEquipment->EQUIP_NAME,
            'ID_EQUIP' => $studyEquipment->ID_EQUIP,
            'EQP_LENGTH' => $studyEquipment->EQP_LENGTH,
            'EQP_WIDTH' => $studyEquipment->EQP_WIDTH,
            'EQUIP_VERSION' => $studyEquipment->EQUIP_VERSION,
            'layoutGen' => null,
        ];

        $layoutGen = $this->getStudyEquipmentLayoutGen($studyEquipment);

        $equip['ORIENTATION'] = $layoutGen->PROD_POSITION;
        $equip['displayName'] = 'EQUIP_NAME_NOT_FOUND';
        $equip['layoutGen'] = $layoutGen;
        $layoutResults = LayoutResults::where('ID_STUDY_EQUIPMENTS', $studyEquipment->ID_STUDY_EQUIPMENTS)->first();
        if ($layoutResults) {
            $layoutResults->QUANTITY_PER_BATCH = $this->convert->mass($layoutResults->QUANTITY_PER_BATCH);
            $layoutResults->LOADING_RATE = $this->convert->toc($layoutResults->LOADING_RATE);
            $layoutResults->LEFT_RIGHT_INTERVAL = $this->convert->prodDimension($layoutResults->LEFT_RIGHT_INTERVAL);
            $layoutResults->NUMBER_PER_M = $this->convert->none($layoutResults->NUMBER_PER_M);
            $layoutResults->NUMBER_IN_WIDTH = $this->convert->none($layoutResults->NUMBER_IN_WIDTH);
        }
        
        $equip['layoutResults'] = $layoutResults;

            // determine study equipment name
        if ($studyEquipment->equipment->STD
            && !($studyEquipment->equipment->CAPABILITIES & CAP_DISPLAY_DB_NAME != 0)
            && !($studyEquipment->equipment->CAPABILITIES & CAP_EQUIP_SPECIFIC_SIZE != 0)) {
            $equip['displayName'] = $equip['EQUIP_NAME'] . " - "
                . number_format($studyEquipment->equipment->EQP_LENGTH + ($studyEquipment->NB_MODUL * $studyEquipment->equipment->MODUL_LENGTH), 2)
                . "x" . number_format($studyEquipment->equipment->EQP_WIDTH, 2) . " (v" . ($studyEquipment->EQUIP_VERSION) . ")"
                . ($studyEquipment->EQUIP_RELEASE == 3 ? ' / Active' : ''); // @TODO: translate
        } else if (($studyEquipment->equipment->CAPABILITIES & CAP_EQUIP_SPECIFIC_SIZE != 0)
            && ($studyEquipment->equipment->STDEQP_LENGTH != NO_SPECIFIC_SIZE)
            && ($studyEquipment->equipment->STDEQP_WIDTH != NO_SPECIFIC_SIZE)) {
            $equip['displayName'] = $equip['EQUIP_NAME']
                . " (v" . ($studyEquipment->EQUIP_VERSION) . ")"
                . ($studyEquipment->EQUIP_RELEASE == 3 ? ' / Active' : ''); // @TODO: translate
        } else {
            $equip['displayName'] = $equip['EQUIP_NAME']
                . ($studyEquipment->EQUIP_RELEASE == 3 ? ' / Active' : ''); // @TODO: translate
        }

        $equip['tr'] = $this->loadEquipmentData($studyEquipment, REGULATION_TEMP);
        $equip['ts'] = $this->loadEquipmentData($studyEquipment, DWELLING_TIME);
        $equip['vc'] = $this->loadEquipmentData($studyEquipment, CONVECTION_SPEED);
        $equip['dh'] = $this->loadEquipmentData($studyEquipment, ENTHALPY_VAR);
        $equip['TExt'] = (count($this->loadEquipmentData($studyEquipment, EXHAUST_TEMP)) > 0) ? $this->loadEquipmentData($studyEquipment, EXHAUST_TEMP)[0] : '';

        $equip['top_or_QperBatch'] = $this->topOrQperBatch($studyEquipment);
        return $equip;
    }

    public function findStudyEquipmentsByStudy(&$study)
    {
        $studyEquipments = StudyEquipment::where('ID_STUDY', $study->ID_STUDY)->with('equipment')->get();
        $returnStudyEquipments = [];

        foreach ($studyEquipments as $studyEquipment) {
            $equip = $this->getDisplayStudyEquipment($studyEquipment);
            array_push($returnStudyEquipments, $equip);
        }

        return $returnStudyEquipments;
    }

    /**
     * @param StudyEquipment $studyEquip
     * @param int $dataType
     */
    public function loadEquipmentData(StudyEquipment &$studyEquip, int $dataType)
    {
        $num_fields = 0;
        switch ($dataType) {
            case CONVECTION_SPEED:
                // unit_ident = UnitsConverter . CONV_SPEED_UNIT;
                $num_fields = $studyEquip->equipment->NB_VC;
                break;
            case DWELLING_TIME:
                // unit_ident = UnitsConverter . TIME_UNIT;
                $num_fields = $studyEquip->equipment->NB_TS;
                break;
            case REGULATION_TEMP:
                // unit_ident = UnitsConverter . CONTROL_TEMP_UNIT;
                $num_fields = $studyEquip->equipment->NB_TR;
                break;
            case ENTHALPY_VAR:
                // unit_ident = UnitsConverter . ENTHALPY_UNIT;
                $num_fields = $studyEquip->equipment->NB_TR;
                break;
            case EXHAUST_TEMP:
                // unit_ident = UnitsConverter . CONTROL_TEMP_UNIT;
                $num_fields = 1;
                break;
        }
        $studyEquipParams = StudEqpPrm::where('ID_STUDY_EQUIPMENTS', $studyEquip->ID_STUDY_EQUIPMENTS)
            ->where('VALUE_TYPE', '>=', $dataType)->where('VALUE_TYPE', '<', $dataType + 100)->pluck('VALUE')->toArray();
        
        $result = array_map('doubleval', $studyEquipParams);

        $data = [];
        foreach ($result as $row) {
            switch ($dataType) {
                case CONVECTION_SPEED:
                    $data[] = $this->convert->convectionSpeed($row);
                    break;

                case DWELLING_TIME:
                    $data[] = $this->convert->time($row);
                    break;
                
                case REGULATION_TEMP:
                case EXHAUST_TEMP:
                    $data[] = $this->convert->temperature($row);
                    break;

                case ENTHALPY_VAR:
                    $data[] = $this->convert->enthalpy($row);
                    break;
            }
        }

        return $data;
    }

    public function topOrQperBatch(StudyEquipment &$se)
    {
        /** @var App\Models\LayoutResults $lr */
        $lr = $se->layoutResults->first();
        $returnStr = "";
        if ($se->equipment->BATCH_PROCESS == 1) {
            $returnStr = ((!$lr) || !($se->equipment->CAPABILITIES & CAP_LAYOUT_ENABLE != 0)) ?
                "" :
                $this->convert->mass($lr->QUANTITY_PER_BATCH) .
                " " . $this->convert->massSymbol() .
                "/batch"; // @TODO: translate
        } else {
            $returnStr = ((!$lr) || !($se->equipment->CAPABILITIES & CAP_LAYOUT_ENABLE != 0)) ?
                "" : $this->convert->toc($lr->LOADING_RATE) . " %";
        }

        // if ((lg . getWidthInterval() != $this->value->INTERVAL_UNDEFINED)
        //     || (lg . getLengthInterval() != $this->value->INTERVAL_UNDEFINED)) {
        //     String simg = "<br><img src=\"/cryosoft/jspPages/img/icon_info.gif\" alt=\"\" border=\"0\">";
        //     out . println(simg);
        // }
        return $returnStr;
    }

    public function isAnalogicResults(StudyEquipment &$se) 
    {
        $results = DimaResults::where('ID_STUDY_EQUIPMENTS',$se->ID_STUDY_EQUIPMENTS)->get();

        return count($results)>0;
    }

    public function setInitialTempFromAnalogicalResults(StudyEquipments &$sequip, $shape, Product &$product, Production &$production)
    {
        $offset = [0, 0, 0];
        $bret = true;
        $dimaResults = null;
        $lfTemp = 0.0;

        try {		
            $dimaResults = DimaResults::where('ID_STUDY_EQUIPMENTS', $sequip->ID_STUDY_EQUIPMENTS)->orderBy('SETPOINT','desc')->get();
            
            $nIndex = 0;
            foreach ($dimaResults as $dimaResult) {
                if ($nIndex > $this->value->TR_INDEX) break;
                $lfTemp = $dimaResult->DIMA_TFP;
                $nIndex++;
            }
            
            $this->saveInitialTemperature($shape, $offset, $lfTemp, $product, $production);
        } catch (\Exception $e) {
            throw new Exception("Error while writing initial temp from analogical results");
        }

        return $bret;
    }

    // add new setInitialTempFromAnalogicalResults1 5 parameter by oriental
    public function setInitialTempFromAnalogicalResults1(StudyEquipments &$sequip, $shape, $offset, Product &$product, Production &$production)
    {
        $bret = true;
        $dimaResults = null;
        $lfTemp = 0.0;
        
        try {       
            $dimaResults = DimaResults::where('ID_STUDY_EQUIPMENTS', $sequip->ID_STUDY_EQUIPMENTS)->orderBy('SETPOINT','desc')->get();
                
            $nIndex = 0;
            foreach ($dimaResults as $dimaResult) {
                if ($nIndex > $this->value->TR_INDEX) break;
                $lfTemp = $dimaResult->DIMA_TFP;
                $nIndex++;
            }
            
            $this->saveInitialTemperature($shape, $offset, $lfTemp, $product, $production);
        } catch (\Exception $e) {
            throw new Exception("Error while writing initial temp from analogical results");
        }

        return $bret;
    }
    

    public function setInitialTempFromSimpleNumericalResults(StudyEquipment &$sequip, $shape, Product &$product, Production &$production)
    {
        $offset = [0, 0, 0];
        $bret = false;
        $dimaResults = null;

        $lfTemp = 0.0;
        
        // Increase value to show still alive
        // cryoRun . nextCRRStatus(true);

        try {		
            //get TFP from Dima Results
            // UnnamedObjectQuery query = new UnnamedObjectQuery(DimaResults . class,"WHERE ID_STUDY_EQUIPMENTS = ?"
            //     + " AND DIMA_TYPE = ?" ,"II")
            // ;
            // query . addParameter(sequip . getIdStudyEquipments());
            // query . addParameter(ValuesList . DIMA_TYPE_DHP_CHOSEN);
            $dimaResults = DimaResults::where('ID_STUDY_EQUIPMENTS', $sequip->ID_STUDY_EQUIPMENTS)
                ->where('DIMA_TYPE', $this->value->DIMA_TYPE_DHP_CHOSEN)->first();

            // TODO: Check if dima result exists before create child study

            // Increase value to show still alive
            // cryoRun . nextCRRStatus(true);

            $lfTemp = $dimaResults->DIMA_TFP;
            
            // save initial temperature
            $this->saveInitialTemperature($shape, $offset, $lfTemp, $product, $production);
        } catch (Exception $e) {
            // LOG . error("Error while writing initial temp from analogical results", e);
            throw new Exception("Error while writing initial temp from analogical results");
        }

        return $bret;
    }

    // add new setInitialTempFromSimpleNumericalResults1 5 paramester add by oriental
    public function setInitialTempFromSimpleNumericalResults1(StudyEquipment &$sequip, $shape, $offset, Product &$product, Production &$production)
    {
        $bret = false;
        $dimaResults = null;

        $lfTemp = 0.0;

        try {       
            $dimaResults = DimaResults::where('ID_STUDY_EQUIPMENTS', $sequip->ID_STUDY_EQUIPMENTS)
                ->where('DIMA_TYPE', $this->value->DIMA_TYPE_DHP_CHOSEN)->first();

            $lfTemp = $dimaResults->DIMA_TFP;
            
            // save initial temperature
            $this->saveInitialTemperature($shape, $offset, $lfTemp, $product, $production);
        } catch (Exception $e) {
            throw new Exception("Error while writing initial temp from analogical results");
        }

        return $bret;
    }

    public function setInitialTempFromNumericalResults (StudyEquipment &$sequip, $shape, Product &$product, Production &$production)
    {
        $offset = [0,0,0];
        $bret = true;
        $counter = 0;
        $NB_TEMP_FOR_NEXTSTATUS = 25;
        
        try {
            $recPos = RecordPosition::where('ID_STUDY_EQUIPMENTS', $sequip->ID_STUDY_EQUIPMENTS)
                ->orderBy('RECORD_TIME', 'DESC')->first();
            if ($recPos) {
                // get temp record data
                $tempRecordData = TempRecordData::where([
                    ['ID_REC_POS', $recPos->ID_REC_POS],
                    ['REC_AXIS_Z_POS', '0']
                ])->orderBy('REC_AXIS_X_POS')->orderBy('REC_AXIS_Y_POS')->get();

                if ($tempRecordData) {
                    $orientation = $sequip->layoutGenerations()->first()->PROD_POSITION;
                    $NbNodesZ = 0;
                    switch ($shape) {
                        case $this->value->SLAB:
                        case $this->value->CYLINDER_STANDING:
                        case $this->value->CYLINDER_LAYING:
                        case $this->value->SPHERE:
                        case $this->value->CYLINDER_CONCENTRIC_STANDING:
                        case $this->value->CYLINDER_CONCENTRIC_LAYING:
                            $NbNodesZ = 1;
                            break;
                        case $this->value->PARALLELEPIPED_STANDING:
                        case $this->value->PARALLELEPIPED_BREADED:
                            if ($orientation == $this->value->POSITION_PARALLEL) {
                                $NbNodesZ = $product->meshGenerations()->first()->MESH_1_NB;
                            } else {
                                $NbNodesZ = $product->meshGenerations()->first()->MESH_3_NB;
                                
                            }
                            break;
                        case $this->value->PARALLELEPIPED_LAYING:
                            $NbNodesZ = $product->meshGenerations()->first()->MESH_3_NB;
                            break;
                    }
    
                    // Increase value to show still alive
                    $listTemp = [];

                    foreach ($tempRecordData as $trd) {
                        $initTemp = new InitialTemperature();
                        $initTemp->ID_PRODUCTION  = $production->ID_PRODUCTION;
                        $initTemp->INITIAL_T = $trd->TEMP;
                        
                        // propagation temperature axe Z
                        for ($i = 0; $i < $NbNodesZ; $i++) {
                            switch ($shape) {
                                case $this->value->SLAB:
                                    $initTemp->MESH_1_ORDER =  $i;
                                    $initTemp->MESH_2_ORDER = ($trd->REC_AXIS_Y_POS +$offset[1]);
                                    $initTemp->MESH_3_ORDER =  $trd->REC_AXIS_X_POS;
                                    break;
                                case $this->value->PARALLELEPIPED_STANDING:
                                case $this->value->PARALLELEPIPED_BREADED:
                                    if ($orientation == $this->value->POSITION_PARALLEL) {
                                        $initTemp->MESH_1_ORDER = ($i + $offset[0]);
                                        $initTemp->MESH_2_ORDER = ($trd->REC_AXIS_Y_POS + $offset[1]);
                                        $initTemp->MESH_3_ORDER = ($trd->REC_AXIS_X_POS + $offset[2]);
                                    } else {
                                        $initTemp->MESH_1_ORDER = ($trd->REC_AXIS_X_POS + $offset[0]);
                                        $initTemp->MESH_2_ORDER = ($trd->REC_AXIS_Y_POS + $offset[1]);
                                        $initTemp->MESH_3_ORDER = ($i +$offset[2]);
                                    }
                                    break;
                                case $this->value->PARALLELEPIPED_LAYING:
                                    $initTemp->MESH_1_ORDER =  $trd->REC_AXIS_Y_POS;
                                    $initTemp->MESH_2_ORDER = ($trd->REC_AXIS_X_POS + $offset[1]);
                                    $initTemp->MESH_3_ORDER =  $i;
                                    break;
                                case $this->value->CYLINDER_STANDING:
                                case $this->value->CYLINDER_CONCENTRIC_LAYING:
                                    $initTemp->MESH_1_ORDER =  $trd->REC_AXIS_X_POS;
                                    $initTemp->MESH_2_ORDER = ($trd->REC_AXIS_Y_POS + $offset[1]);
                                    $initTemp->MESH_3_ORDER =  $i;
                                    break;

                                case $this->value->CYLINDER_LAYING:
                                case $this->value->CYLINDER_CONCENTRIC_STANDING:
                                    $initTemp->MESH_1_ORDER =  $trd->REC_AXIS_Y_POS;
                                    $initTemp->MESH_2_ORDER = ($trd->REC_AXIS_X_POS + $offset[1]);
                                    $initTemp->MESH_3_ORDER =  $i;
                                    break;

                                case $this->value->SPHERE:
                                    $initTemp->MESH_1_ORDER =  $trd->REC_AXIS_X_POS;
                                    $initTemp->MESH_2_ORDER = ($trd->REC_AXIS_Y_POS + $offset[1]);
                                    $initTemp->MESH_3_ORDER =  $i;
                                    break;
                            }
                            
                            //create initial temperature
                            // $initTemp->save();
                            array_push($listTemp, $initTemp->toArray());
                        } // end for
                        
                    } // end foreach tempRecordData

                    $slices = array_chunk($listTemp, 100);
                    foreach ($slices as $slice) {
                        InitialTemperature::insert($slice);
                    }

                    // update production to set avg initial temp
                    $production->AVG_T_INITIAL = $sequip->AVERAGE_PRODUCT_TEMP;
                    $production->save();
                    
                    // Increase value to show still alive
                } else {
                    $bret = false;
                }
            } else {
                $bret = false;
            }
        } catch (\Exception $e) {
            throw new \Exception("Error while writing initial temp from numerical results");
        }

        return $bret;
    }

    // new setInitialTempFromNumericalResults 5 parameter add by oriental
    public function setInitialTempFromNumericalResults1 (StudyEquipment &$sequip, $shape, $offset, Product &$product, Production &$production)
    {
        $bret = true;
        $counter = 0;

        try {
            $recPos = RecordPosition::where('ID_STUDY_EQUIPMENTS', $sequip->ID_STUDY_EQUIPMENTS)
                ->orderBy('RECORD_TIME', 'DESC')->first();
            if ($recPos) {
                // get temp record data
                $tempRecordData = TempRecordData::where([
                    ['ID_REC_POS', $recPos->ID_REC_POS],
                    ['REC_AXIS_Z_POS', '0']
                ])->orderBy('REC_AXIS_X_POS')->orderBy('REC_AXIS_Y_POS')->get();

                if ($tempRecordData) {
                    $orientation = $sequip->layoutGenerations()->first()->PROD_POSITION;
                    $NbNodesZ = 0;
                    switch ($shape) {
                        case $this->value->SLAB:
                        case $this->value->CYLINDER_STANDING:
                        case $this->value->CYLINDER_LAYING:
                        case $this->value->SPHERE:
                        case $this->value->CYLINDER_CONCENTRIC_STANDING:
                        case $this->value->CYLINDER_CONCENTRIC_LAYING:
                            $NbNodesZ = 1;
                            break;
                        case $this->value->PARALLELEPIPED_STANDING:
                        case $this->value->PARALLELEPIPED_BREADED:
                            if ($orientation == $this->value->POSITION_PARALLEL) {
                                $NbNodesZ = $product->meshGenerations()->first()->MESH_1_NB;
                            } else {
                                $NbNodesZ = $product->meshGenerations()->first()->MESH_3_NB;
                                
                            }
                            break;
                        case $this->value->PARALLELEPIPED_LAYING:
                            $NbNodesZ = $product->meshGenerations()->first()->MESH_3_NB;
                            break;
                    }
    
                    // Increase value to show still alive
                    $listTemp = [];

                    foreach ($tempRecordData as $trd) {
                        $initTemp = new InitialTemperature();
                        $initTemp->ID_PRODUCTION  = $production->ID_PRODUCTION;
                        $initTemp->INITIAL_T = $trd->TEMP;
                        
                        // propagation temperature axe Z
                        for ($i = 0; $i < $NbNodesZ; $i++) {
                            switch ($shape) {
                                case $this->value->SLAB:
                                    $initTemp->MESH_1_ORDER =  $i;
                                    $initTemp->MESH_2_ORDER = ($trd->REC_AXIS_Y_POS +$offset[1]);
                                    $initTemp->MESH_3_ORDER =  $trd->REC_AXIS_X_POS;
                                    break;
                                case $this->value->PARALLELEPIPED_STANDING:
                                case $this->value->PARALLELEPIPED_BREADED:
                                    if ($orientation == $this->value->POSITION_PARALLEL) {
                                        $initTemp->MESH_1_ORDER = ($i + $offset[0]);
                                        $initTemp->MESH_2_ORDER = ($trd->REC_AXIS_Y_POS + $offset[1]);
                                        $initTemp->MESH_3_ORDER = ($trd->REC_AXIS_X_POS + $offset[2]);
                                    } else {
                                        $initTemp->MESH_1_ORDER = ($trd->REC_AXIS_X_POS + $offset[0]);
                                        $initTemp->MESH_2_ORDER = ($trd->REC_AXIS_Y_POS + $offset[1]);
                                        $initTemp->MESH_3_ORDER = ($i +$offset[2]);
                                    }
                                    break;
                                case $this->value->PARALLELEPIPED_LAYING:
                                    $initTemp->MESH_1_ORDER =  $trd->REC_AXIS_Y_POS;
                                    $initTemp->MESH_2_ORDER = ($trd->REC_AXIS_X_POS + $offset[1]);
                                    $initTemp->MESH_3_ORDER =  $i;
                                    break;
                                case $this->value->CYLINDER_STANDING:
                                case $this->value->CYLINDER_CONCENTRIC_LAYING:
                                    $initTemp->MESH_1_ORDER =  $trd->REC_AXIS_X_POS;
                                    $initTemp->MESH_2_ORDER = ($trd->REC_AXIS_Y_POS + $offset[1]);
                                    $initTemp->MESH_3_ORDER =  $i;
                                    break;

                                case $this->value->CYLINDER_LAYING:
                                case $this->value->CYLINDER_CONCENTRIC_STANDING:
                                    $initTemp->MESH_1_ORDER =  $trd->REC_AXIS_Y_POS;
                                    $initTemp->MESH_2_ORDER = ($trd->REC_AXIS_X_POS + $offset[1]);
                                    $initTemp->MESH_3_ORDER =  $i;
                                    break;

                                case $this->value->SPHERE:
                                    $initTemp->MESH_1_ORDER =  $trd->REC_AXIS_X_POS;
                                    $initTemp->MESH_2_ORDER = ($trd->REC_AXIS_Y_POS + $offset[1]);
                                    $initTemp->MESH_3_ORDER =  $i;
                                    break;
                            }
                            
                            //create initial temperature
                            // $initTemp->save();
                            array_push($listTemp, $initTemp->toArray());
                        } // end for
                        
                    } // end foreach tempRecordData

                    $slices = array_chunk($listTemp, 100);
                    foreach ($slices as $slice) {
                        InitialTemperature::insert($slice);
                    }

                    // update production to set avg initial temp
                    $production->AVG_T_INITIAL = $sequip->AVERAGE_PRODUCT_TEMP;
                    $production->save();
                    
                    // Increase value to show still alive
                } else {
                    $bret = false;
                }
            } else {
                $bret = false;
            }
        } catch (\Exception $e) {
            throw new \Exception("Error while writing initial temp from numerical results");
        }

        return $bret;
    }

    private function saveInitialTemperature (/*int*/ $shape, array $offset, /*double*/ $lfTemp, Product &$product, Production &$production)
    {
        // // V4 : use oxymel connection to update
        // Transaction tx = dbmgr . getTransaction();
        // // V4 : use standard connection to insert data
        // Connection connection = null;

        // InitialTemperature initTemp = null;
        // long counter = 0;
        $initTemp = null;
        $counter = 0;
        
        // Increase value to show still alive
        // cryoRun . nextCRRStatus(true);

        try {
            // V4: use standard connection to insert data
            // connection = CryosoftDB . getDatasource() . getConnection();
            
            // dispatch this temp
            $nbNode1 = $product->meshGenerations->first()->MESH_1_NB;
            $nbNode2 = $product->meshGenerations->first()->MESH_2_NB;
            $nbNode3 = $product->meshGenerations->first()->MESH_3_NB;

            // short i, j, k;
            $i = $j = $k = 0;
            switch ($shape) {
                case $this->value->SLAB:
                case $this->value->SPHERE:
                    $nbNode1 = $nbNode3 = 1;
                    break;
                case $this->value->CYLINDER_STANDING:
                case $this->value->CYLINDER_CONCENTRIC_LAYING:
                case $this->value->CYLINDER_LAYING:
                case $this->value->CYLINDER_CONCENTRIC_STANDING:
                    $nbNode3 = 1;
                    break;
                case $this->value->PARALLELEPIPED_STANDING:
                case $this->value->PARALLELEPIPED_BREADED:
                case $this->value->PARALLELEPIPED_LAYING:
                    break;
            }

            $listTemp = [];

            for ($i = 0; $i < $nbNode1; $i ++) {
                for ($j = 0; $j < $nbNode2; $j ++) {
                    for ($k = 0; $k < $nbNode3; $k ++) {
                        $initTemp = new InitialTemperature();
                        $initTemp->ID_PRODUCTION = $production->ID_PRODUCTION;
                        $initTemp->INITIAL_T = $lfTemp;
                        $initTemp->MESH_1_ORDER = (($i + $offset[0]));
                        $initTemp->MESH_2_ORDER = (($j + $offset[1]));
                        $initTemp->MESH_3_ORDER = (($k + $offset[2]));
                        array_push($listTemp, $initTemp->toArray());
                        // CryosoftDB . create($initTemp, connection);
                        // $initTemp->save();

                        // if ((++counter % NB_TEMP_FOR_NEXTSTATUS) == 0) {
                        //     // Increase value to show still alive
                        //     cryoRun . nextCRRStatus(true);
                        // }
                    }
                }
            }
            
            $slices = array_chunk($listTemp, 100);
            foreach ($slices as $slice) {
                InitialTemperature::insert($slice);
            }
            
            // Increase value to show still alive
            // cryoRun . nextCRRStatus(true);
            
            // update production to set avg initial temp
            $production->AVG_T_INITIAL = $lfTemp;
            $production->save();
            
            // Increase value to show still alive
            // cryoRun . nextCRRStatus(true);
        } catch (Exception $e) {
            // LOG . error("Error while writing initial temp from analogical results", e);
            throw new Exception("Error while writing initial temp from analogical results");
        }
    }

    public function generateLayoutPreview() {
        $base64img = '';
        // Create an image with the specified dimensions
        $image = imageCreate(300, 200);
 
        // Create a color (this first call to imageColorAllocate
        //  also automatically sets the image background color)
        $colorRed = imageColorAllocate($image, 255, 0, 0);
        // Create another color
        $colorYellow = imageColorAllocate($image, 255, 255, 0);
        
        // Draw a rectangle
        imageFilledRectangle($image, 50, 50, 250, 150, $colorYellow);
        
        // Set type of image and send the output
        $base64img = base64_encode( imageJpeg($image) );
        
        // Release memory
        imageDestroy($image);
        return $base64img;
    }

    public function loadExhaustGasTemperature(&$studyEquipment)
    {
        if ($studyEquipment->STD == 1) {
            $idEquipSeries = $studyEquipment->ID_EQUIPSERIES;
        } else {
            $idEquipSeries = 0;

            $equipGenerations = EquipGeneration::where('ID_EQUIP', $studyEquipment->ID_EQUIP)->get();
            if (count($equipGenerations) > 0) {
                foreach ($equipGenerations as $equipGeneration) {
                    $equipment = Equipment::where('ID_EQUIP', $equipGeneration->ID_ORIG_EQUIP1)->first();
                    if ($equipment) {
                        if ($equipment->STD == 1) {
                            $idEquipSeries = $equipment->ID_EQUIPSERIES;
                        }
                    }
                }
            }
        }

        $tempExts = [];

        if ($idEquipSeries != 0) {
            $tempExts = TempExt::where('ID_EQUIPSERIES', $idEquipSeries)->get(); 
        }

        return $tempExts;
    }

    public function loadAlphaCoef(&$studyEquipment)
    {
        $alpha = new \SplFixedArray(6);
        $calcParams = $studyEquipment->calculationParameters->first();

        if ($calcParams) {
            if ($calcParams->STUDY_ALPHA_TOP_FIXED == true) {
                $alpha[0] = $this->convert->convectionCoeff($calcParams->STUDY_ALPHA_TOP);
            } else {
                $alpha[0] = $this->convert->convectionCoeff(0.0);
            }

            if ($calcParams->STUDY_ALPHA_BOTTOM_FIXED == true) {
                $alpha[1] = $calcParams->STUDY_ALPHA_BOTTOM;
            } else {
                $alpha[1] = $this->convert->convectionCoeff(0.0);
            }

            if ($calcParams->STUDY_ALPHA_LEFT_FIXED == true) {
                $alpha[2] = $calcParams->STUDY_ALPHA_LEFT;
            } else {
                $alpha[2] = $this->convert->convectionCoeff(0.0);
            }

            if ($calcParams->STUDY_ALPHA_RIGHT_FIXED == true) {
                $alpha[3] = $calcParams->STUDY_ALPHA_RIGHT;
            } else {
                $alpha[3] = $this->convert->convectionCoeff(0.0);
            }

            if ($calcParams->STUDY_ALPHA_FRONT_FIXED == true) {
                $alpha[4] = $calcParams->STUDY_ALPHA_FRONT;
            } else {
                $alpha[4] = $this->convert->convectionCoeff(0.0);
            }

            if ($calcParams->STUDY_ALPHA_REAR_FIXED == true) {
                $alpha[5] = $calcParams->STUDY_ALPHA_REAR;
            } else {
                $alpha[5] = $this->convert->convectionCoeff(0.0);
            }
        }

        return $alpha;
    }
}