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
use App\Models\Equipment;
use App\Models\Study;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Factory as Auth;
use App\Models\StudyEquipment;

class CheckWarnings extends Controller 
{
	protected $request;
    protected $auth;

    public function __construct(\Laravel\Lumen\Application $app)
    {
        $this->app = $app;
        $this->auth = $app['Illuminate\\Contracts\\Auth\\Factory'];
        $this->request = $app['Illuminate\\Http\\Request'];
    }

    public function checkWarningEquipment()
    {
    	$message = 1;
    	$check = false;
    	if ($check) {
    		$message = 'This equipment does not allow to use the assistant of calculation of the couple
						"dwelling time/temperature setpoint". 
						Displayed values are default values of couple "dwelling time/temperature setpoint"';
			return [
				'Message' => $message,
			];
    	}
    	return $message;
    }
}