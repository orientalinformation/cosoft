<?php

namespace App\Cryosoft;

use App\Models\StudyEquipment;
use App\Models\LayoutGeneration;
use App\Models\StudEqpPrm;
use App\Models\LayoutResults;

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

    public function calculateEquipmentParams(StudyEquipment &$stdEquip) {
        
    }

    /**
     * @return \App\Models\LayoutGeneration
     */
    public function getStudyEquipmentLayoutGen(StudyEquipment &$sEquip) {
        $layoutGen = LayoutGeneration::where('ID_STUDY_EQUIPMENTS', $sEquip->ID_STUDY_EQUIPMENTS)->first();
        if (!$layoutGen) {
            $layoutGen = new LayoutGeneration();
            $layoutGen->ID_STUDY_EQUIPMENTS = $sEquip->ID_STUDY_EQUIPMENTS;
            $layoutGen->PROD_POSITION = $position;

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
        $equip['TExt'] = $this->loadEquipmentData($studyEquipment, EXHAUST_TEMP)[0];

        $equip['top_or_QperBatch'] = $this->topOrQperBatch($studyEquipment);
        return $equip;
    }

    public function findStudyEquipmentsByStudy(&$study)
    {
        $studyEquipments = StudyEquipment::where('ID_STUDY', $study->ID_STUDY)->with('equipment')->get();
        // var_dump($study);die;
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

        // if ((lg . getWidthInterval() != ValuesList . INTERVAL_UNDEFINED)
        //     || (lg . getLengthInterval() != ValuesList . INTERVAL_UNDEFINED)) {
        //     String simg = "<br><img src=\"/cryosoft/jspPages/img/icon_info.gif\" alt=\"\" border=\"0\">";
        //     out . println(simg);
        // }
        return $returnStr;
    }
}