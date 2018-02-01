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
use App\Models\LineElmt;

class LineService
{
	public function __construct(\Laravel\Lumen\Application $app)
    {
        $this->app = $app;
        $this->auth = $app['Illuminate\\Contracts\\Auth\\Factory'];
        
    }

	public function getNameComboBox($elt_type,$insideDiameter, $coolingFamily, $sort) {
        if ($sort > 0) {
		    $sname = LineElmt::where('ID_USER', '!=', $this->auth->user()->ID_USER)
                ->join('Translation', 'ID_PIPELINE_ELMT', '=', 'Translation.ID_TRANSLATION')
                ->where('Translation.TRANS_TYPE', 27)->where('ELT_TYPE', '=', $elt_type)
                ->where('ELT_SIZE','=',$insideDiameter)->where('ID_COOLING_FAMILY', $coolingFamily)
                ->where('Translation.CODE_LANGUE', $this->auth->user()->CODE_LANGUE)->orderBy('LABEL', 'ASC')->skip($sort)->take($sort)->get();
        
            } else {
            $sname = LineElmt::where('ID_USER', '!=', $this->auth->user()->ID_USER)
                ->join('Translation', 'ID_PIPELINE_ELMT', '=', 'Translation.ID_TRANSLATION')
                ->where('Translation.TRANS_TYPE', 27)->where('ELT_TYPE', '=', $elt_type)
                ->where('ELT_SIZE','=',$insideDiameter)->where('ID_COOLING_FAMILY', $coolingFamily)
                ->where('Translation.CODE_LANGUE', $this->auth->user()->CODE_LANGUE)->orderBy('LABEL', 'ASC')->skip($sort)->take($sort)->first();
        }
        return $sname;
	}

	public function getNonLine($elt_type,$insideDiameter, $coolingFamily, $idIsolation, $sort) {
        if ($sort > 0) {
		    $nonName = LineElmt::where('ID_USER', '!=', $this->auth->user()->ID_USER)
                ->join('Translation', 'ID_PIPELINE_ELMT', '=', 'Translation.ID_TRANSLATION')
                ->where('Translation.TRANS_TYPE', 27)->where('ELT_TYPE', '=', $elt_type)
                ->where('ELT_SIZE',$insideDiameter)->where('ID_COOLING_FAMILY', $coolingFamily)
                ->where('INSULATION_TYPE', $idIsolation)->where('Translation.CODE_LANGUE', $this->auth->user()->CODE_LANGUE)->orderBy('LABEL', 'ASC')->get();
        } else {
            $nonName = LineElmt::where('ID_USER', '!=', $this->auth->user()->ID_USER)
                ->join('Translation', 'ID_PIPELINE_ELMT', '=', 'Translation.ID_TRANSLATION')
                ->where('Translation.TRANS_TYPE', 27)->where('ELT_TYPE', '=', $elt_type)
                ->where('ELT_SIZE',$insideDiameter)->where('ID_COOLING_FAMILY', $coolingFamily)
                ->where('INSULATION_TYPE', $idIsolation)->where('Translation.CODE_LANGUE', $this->auth->user()->CODE_LANGUE)->orderBy('LABEL', 'ASC')->first();
        }
        return $nonName;
    }
    
    public function getStatus() {
        $sname = LineElmt::select('LABEL', 'LINE_VERSION')->where('ID_USER', '!=', $this->auth->user()->ID_USER)
                ->join('Translation', 'ID_PIPELINE_ELMT', '=', 'Translation.ID_TRANSLATION')->where('ID_TRANSLATION', 3)
                ->where('Translation.TRANS_TYPE', 100)->where('Translation.CODE_LANGUE', $this->auth->user()->CODE_LANGUE)->orderBy('LABEL', 'ASC')->first();
        return $sname->LINE_VERSION. " " .$sname->LABEL;
    }

    public function getdiameter($coolingFamily, $insulationType) {
        $diameter = LineElmt::distinct()->select('ELT_SIZE')
        ->where('ID_COOLING_FAMILY ', $coolingFamily)->where('ELT_TYPE', '<>', 2)
        ->where('INSULATION_TYPE', $insulationType)->get();
        return $diameter;
    }

    public function getStorageTank($coolingFamily, $insulationType) {
        $storageTank = LineElmt::distinct()->select('ELT_SIZE')
        ->where('ID_COOLING_FAMILY ', $coolingFamily)->where('ELT_TYPE', '=', 2)
        ->where('INSULATION_TYPE', $insulationType)->get();
        return $storageTank;
    }
}