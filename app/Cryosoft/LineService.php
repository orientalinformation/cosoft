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

	public function getNameComboBox($elt_type,$insideDiameter, $coolingFamily) {
		$sname = LineElmt::select('LABEL')->where('ID_USER', '!=', $this->auth->user()->ID_USER)
                ->join('Translation', 'ID_PIPELINE_ELMT', '=', 'Translation.ID_TRANSLATION')
                ->where('Translation.TRANS_TYPE', 27)->where('ELT_TYPE', '=', $elt_type)->where('ELT_SIZE',$insideDiameter)->where('ID_COOLING_FAMILY', $coolingFamily)->where('Translation.CODE_LANGUE', $this->auth->user()->CODE_LANGUE)->orderBy('LABEL', 'ASC')->get();
        return $sname;
	}

	public function getNonLine($elt_type,$insideDiameter, $coolingFamily) {
		$nonName = LineElmt::select('LABEL')->where('ID_USER', '!=', $this->auth->user()->ID_USER)
                ->join('Translation', 'ID_PIPELINE_ELMT', '=', 'Translation.ID_TRANSLATION')
                ->where('Translation.TRANS_TYPE', 27)->where('ELT_TYPE', '=', $elt_type)->where('ELT_SIZE',$insideDiameter)->where('ID_COOLING_FAMILY', $coolingFamily)->where('Translation.CODE_LANGUE', $this->auth->user()->CODE_LANGUE)->orderBy('LABEL', 'ASC')->first();
        return $nonName;
	}
}