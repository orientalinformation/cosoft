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
namespace App\Http\Controllers\Api1;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\Auth\Factory as Auth;

class TempProfiles extends Controller 
{
	/**
    * @var Illuminate\Contracts\Auth\Factory
    */
    protected $auth;

    protected $app;

    protected $value;
    
    public function __construct(\Laravel\Lumen\Application $app)
    {
        $this->app = $app;
        $this->auth = $app['Illuminate\\Contracts\\Auth\\Factory'];
        $this->value = $app['App\\Cryosoft\\ValueListService'];
    }

    public function getDataSvgTemperature()
    {
    	$svgXsize = 10;
    	
    	$array = [
    		'svgXsize' => $svgXsize,
    	];
    	return $array;
    }
}