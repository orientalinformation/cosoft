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

class Chaining extends Controller 
{
	protected $request;
    protected $auth;
    protected $equip;
    protected $kernel;
    protected $unit;
    protected $value;
    protected $converts;

    public function __construct(\Laravel\Lumen\Application $app)
    {
        $this->app = $app;
        $this->auth = $app['Illuminate\\Contracts\\Auth\\Factory'];
        $this->request = $app['Illuminate\\Http\\Request'];
        $this->equip = $app['App\\Cryosoft\\EquipmentsService'];
        $this->kernel = $app['App\\Kernel\\KernelService'];
        $this->units = $app['App\\Cryosoft\\UnitsService'];
        $this->values = $app['App\\Cryosoft\\ValueListService'];
        $this->converts = $app['App\\Cryosoft\\UnitsConverterService'];

    }

    public function getAllChaining($id) 
    {
    	$study = Study::findOrFail($id);

    	$chaining = $chain = [];

        $chain['studyName'] = $study->STUDY_NAME;
        $chain['ID_STUDY'] = $id;
        $chain['active'] = 1;
        array_push($chaining, $chain);

        $parent = null;
        if ($study->PARENT_ID != 0) {
            $parent = Study::findOrFail($study->PARENT_ID);
            $chain['studyName'] = $parent->STUDY_NAME;
            $chain['ID_STUDY'] = $parent->ID_STUDY;
            $chain['active'] = 0;
            array_push($chaining, $chain);
        }

        $children = null;
        if ($study->HAS_CHILD != 0) {
            $children = Study::where('PARENT_ID', $study->ID_STUDY)->get();
            if (count($children) > 0) {
                foreach ($children as $child) {
                    array_push($chaining, [
                        'studyName' => $child->STUDY_NAME,
                        'ID_STUDY' => $child->ID_STUDY,
                        'active' => 0
                    ]);
                }
            }
        }

        return $chaining;
    }
}