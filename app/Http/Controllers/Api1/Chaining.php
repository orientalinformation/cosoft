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
use App\Models\Study;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Factory as Auth;
use App\Models\StudyEquipment;
use App\Models\Product;
use App\Models\ProductElmt;
use App\Models\Equipment;

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

      $parents  = $this->getParentChaining($id);
      if (count($parents) > 0) {
        foreach ($parents as $parent) {
          array_push($chaining, $parent);
        }
      }

      $childrens = $this->getChildChaining($id);
      if (count($childrens) > 0) {
        foreach ($childrens as $child) {
          array_push($chaining, $child);
        }
      }

      array_multisort(array_column($chaining, 'ID_STUDY'), SORT_ASC, $chaining); 

      return $chaining;
    }

    public function getOverViewChaining($id)
    {
      $study = Study::findOrFail($id);

      $idStudies = $chainings = [];

      array_push($idStudies, intval($id));

      $parents  = $this->getParentOverviewChaining($id);
      if (count($parents) > 0) {
        foreach ($parents as $parent) {
          array_push($idStudies, $parent);
        }
      }

      $childrens = $this->getChildOverviewChaining($id);
      if (count($childrens) > 0) {
        foreach ($childrens as $child) {
          array_push($idStudies, $child);
        }
      }
      sort($idStudies);

      foreach ($idStudies as $idStudy) {
        $item['ID_STUDY'] = $idStudy;
        $item['hasSEquipment'] = 1;

        $prod = Product::where('ID_STUDY', $idStudy)->first();
        if ($prod) {
          $prodEmlts = ProductElmt::where('ID_PROD', $prod->ID_PROD)->get();
          $item['imgComp'] = count($prodEmlts);
        }

        $studyEquipments = StudyEquipment::where('ID_STUDY', $idStudy)->get();
        if (count($studyEquipments) > 0) {
          $nameEquipments = [];
          foreach ($studyEquipments as $sequip) {
            $equipment = Equipment::find($sequip->ID_EQUIP);
            $iname['name'] = $equipment->EQUIP_NAME;
            array_push($nameEquipments, $iname);
          }
          $item['StudyEquipment'] = $nameEquipments;
        }

        array_push($chainings, $item);
      }

      return $chainings;
    }

    private function getParentChaining($idStudy, $chaining = [])
    {
      $study = Study::findOrFail($idStudy);
      $parent = null;
      if ($study->PARENT_ID != 0) {
          $parent = Study::findOrFail($study->PARENT_ID);
          $chain['studyName'] = $parent->STUDY_NAME;
          $chain['ID_STUDY'] = $parent->ID_STUDY;
          $chain['active'] = 0;
          array_push($chaining, $chain);

          $chaining = $this->getParentChaining($study->PARENT_ID, $chaining);
      }

      return $chaining;
    }

    private function getParentOverviewChaining($idStudy, $chaining = []) 
    {
      $study = Study::findOrFail($idStudy);
      $parent = null;
      if ($study->PARENT_ID != 0) {
        $parent = Study::findOrFail($study->PARENT_ID);

        array_push($chaining, $parent->ID_STUDY);

        $chaining = $this->getParentOverviewChaining($study->PARENT_ID, $chaining);
      }

      return $chaining;
    }

    private function getChildChaining($idStudy, $chaining = [])
    {
      $study = Study::findOrFail($idStudy);
      $children = null;
      if ($study->HAS_CHILD != 0) {
          $children = Study::where('PARENT_ID', $study->ID_STUDY)->first();
          if (count($children) > 0) {
              array_push($chaining, [
                  'studyName' => $children->STUDY_NAME,
                  'ID_STUDY' => $children->ID_STUDY,
                  'active' => 0
              ]);

              $chaining = $this->getChildChaining($children->ID_STUDY, $chaining);
          }
      }
      return $chaining;
    }

    private function getChildOverviewChaining($idStudy, $chaining = [])
    {
      $study = Study::findOrFail($idStudy);
      $children = null;
      if ($study->HAS_CHILD != 0) {
          $children = Study::where('PARENT_ID', $study->ID_STUDY)->first();
          if (count($children) > 0) {
              array_push($chaining, $children->ID_STUDY);

              $chaining = $this->getChildOverviewChaining($children->ID_STUDY, $chaining);
          }
      }
      return $chaining;
    }
}