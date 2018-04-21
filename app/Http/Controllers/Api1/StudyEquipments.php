<?php

namespace App\Http\Controllers\Api1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Factory as Auth;
use App\Models\StudyEquipment;
use App\Models\LayoutGeneration;
use App\Models\RecordPosition;
use App\Cryosoft\EquipmentsService;
use App\Cryosoft\UnitsConverterService;
use App\Cryosoft\BrainCalculateService;

class StudyEquipments extends Controller
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
    public function __construct(Request $request, Auth $auth, EquipmentsService $equip, UnitsConverterService $unit, BrainCalculateService $brain)
    {
        $this->request = $request;
        $this->auth = $auth;
        $this->equip = $equip;
        $this->unit = $unit;
        $this->brain = $brain;
    }

    public function getStudyEquipmentById($id)
    {
        $studyEquipment = \App\Models\StudyEquipment::find($id);
        return $studyEquipment;
    }

    public function getstudyEquipmentProductChart($idStudy)
    {
        $studyEquipments = \App\Models\StudyEquipment::where("ID_STUDY", $idStudy)->orderBy("ID_STUDY_EQUIPMENTS", "ASC")->get();
        $returnStudyEquipments = [];

        foreach ($studyEquipments as $studyEquipment) {
            if ($studyEquipment->BRAIN_TYPE == 4) {
                $equip = [
                    'ID_STUDY_EQUIPMENTS' => $studyEquipment->ID_STUDY_EQUIPMENTS,
                    'EQUIP_NAME' => $studyEquipment->EQUIP_NAME,
                    'ID_EQUIP' => $studyEquipment->ID_EQUIP,
                    'EQP_LENGTH' => $studyEquipment->EQP_LENGTH,
                    'EQP_WIDTH' => $studyEquipment->EQP_WIDTH,
                    'EQUIP_VERSION' => $studyEquipment->EQUIP_VERSION,
                ];
                $layoutGen = LayoutGeneration::where('ID_STUDY_EQUIPMENTS', $studyEquipment->ID_STUDY_EQUIPMENTS)->first();
                if (!$layoutGen) continue;

                $equip['ORIENTATION'] = $layoutGen->PROD_POSITION;
                $equip['displayName'] = $this->equip->getResultsEquipName($studyEquipment->ID_STUDY_EQUIPMENTS);
                
                array_push($returnStudyEquipments, $equip);
            }
        }

        return $returnStudyEquipments;
    }

    public function getstudyEquipmentByStudyId($idStudy)
    {
        $studyEquipments = \App\Models\StudyEquipment::where("ID_STUDY", $idStudy)->orderBy("ID_STUDY_EQUIPMENTS", "ASC")->get();
        $returnStudyEquipments = [];

        foreach ($studyEquipments as $studyEquipment) {
            $equip = [
                'ID_STUDY_EQUIPMENTS' => $studyEquipment->ID_STUDY_EQUIPMENTS,
                'EQUIP_NAME' => $studyEquipment->EQUIP_NAME,
                'ID_EQUIP' => $studyEquipment->ID_EQUIP,
                'EQP_LENGTH' => $studyEquipment->EQP_LENGTH,
                'EQP_WIDTH' => $studyEquipment->EQP_WIDTH,
                'EQUIP_VERSION' => $studyEquipment->EQUIP_VERSION,
            ];
            $equip['displayName'] = $this->equip->getSpecificEquipName($studyEquipment->ID_STUDY_EQUIPMENTS);
            
            array_push($returnStudyEquipments, $equip);
        }

        return $returnStudyEquipments;
    }

    public function getRecordPosition($id)
    {
        $recordPosition = RecordPosition::where('ID_STUDY_EQUIPMENTS', $id)->orderBy('RECORD_TIME', 'ASC')->get();

        $result = [];
        if (count($recordPosition)) {
            foreach ($recordPosition as $key => $value) {
                $result[] = $value;
                $result[$key]['RECORD_TIME'] = $this->unit->time($result[$key]['RECORD_TIME']);
            }
        }

        return $recordPosition;
    }

    public function saveEquipSizing($id)
    {
        $input = $this->request->all();
        $width = $input['width'];
        $length = $input['length'];

        $studyEquipment = StudyEquipment::where('ID_STUDY_EQUIPMENTS', $id)->first();
        $studyEquipment->STDEQP_WIDTH = $this->unit->equipDimension($width, ['save' => true]);
        $studyEquipment->STDEQP_LENGTH = $this->unit->equipDimension($length, ['save' => true]);
        $studyEquipment->save();

        $layoutGeneration = $studyEquipment->layoutGenerations->first();
        $layoutResult = $studyEquipment->layoutResults->first();
        $layoutGeneration->LENGTH_INTERVAL = -2;
        $layoutGeneration->WIDTH_INTERVAL = -2;
        $layoutGeneration->save();

        $layoutResult->LEFT_RIGHT_INTERVAL = 0;
        $layoutResult->NUMBER_IN_WIDTH = 0;
        $layoutResult->NUMBER_PER_M = 0;
        $layoutResult->save();

        //runSizingCalculator
        return 1;
    }

    public function getOperatingSetting($id)
    {
        $studyEquipment = StudyEquipment::where('ID_STUDY_EQUIPMENTS', $id)->first();
        $vc = $this->brain->getVc();
        $tr = $this->brain->getListTr();
        $ts = $this->brain->getListTs();

        return compact('vc', 'tr', 'ts');
    }
}
