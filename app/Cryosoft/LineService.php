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
use App\Models\StudyEquipments;
use App\Models\LineElmt;
use App\Models\LineDefinition;

class LineService 
{
	public function queryListLineElmtFromType($typeElmt, $idCoolingFamily, $idIsolation, 
		$diameter, $id_user, $idStudy) {
		$elt_type = -1;

		switch ($typeElmt) {
            case 1:
                $elt_type = 1;
                break;

            case 2:
                $elt_type = 1;
                $idIsolation = 0;
                break;

            case 3:
                $elt_type = 4;
                break;

            case 4:
                $elt_type = 3;
                break;

            case 5:
                $elt_type = 5;
                break;

            case 6:
                $elt_type = 5;
                $idIsolation = 0;
                break;

            case 7:
                $elt_type = 2;
                break;
        }

        if ($elt_type > 0) {
        	$query = LineElmt::where('ELT_TYPE', $elt_type)
        	->where('ID_COOLING_FAMILY', $idCoolingFamily)
        	->where('INSULATION_TYPE', $idIsolation)
        	->where('ELT_SIZE', ($typeElmt != 7 ? $diameter : 'ELT_SIZE')
            ->where('ELT_IMP_ID_STUDY', $idStudy)->orWhere('ELT_IMP_ID_STUDY', 0)
            ->whereRaw("(LINE_RELEASE = 3 OR LINE_RELEASE = 4 OR (LINE_RELEASE = 2) AND (ID_USER = $id_user))")
            ->get();
		}
        return $query;
         
         
        }
    }
	
	public function getIdCoolingFamily($idStudy) {
        $studyEquipCurr = StudyEquipments::where('ID_STUDY', $idStudy)->first();
        return $studyEquipCurr->ID_COOLING_FAMILY;
	}

	public function getListLineDiametre($idCoolingFamily, $idIsolation) {
		$lineElmt = LineElmt::distinct()->select('ELT_SIZE')->where('ID_COOLING_FAMILY ',$idCoolingFamily)->where('INSULATION_TYPE', $idIsolation)->where('ELT_TYPE', '<>', 2)->get();
            $rLineElmt = new LineElmt();
            $rLineElmt->ELT_SIZE = $lineElmt->ELT_SIZE;
        return $rLineElmt->ELT_SIZE ;
	}

	public function getListLineDefinition($idPipegen) {
		$pipeGen = LineDefinition::where('ID_PIPE_GEN', $idPipegen)->get();
        return $pipeGen;
	}

	public function getComboLineElmt($typeElmt, $lang, $idCoolingFamily, 
		$idIsolation, $diameter, $id_user, $idStudy) {

	}
}



	 