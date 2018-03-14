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
use App\Models\TempRecordPts;
use App\Models\TempRecordPtsDef;

class InputInitial extends Controller 
{
	/**
	 * @var Illuminate\Http\Request
	 */
	protected $request;

	/**
	 * @var Illuminate\Contracts\Auth\Factory
	 */
	protected $auth;

	public function __construct(Request $request, Auth $auth)
	{
		$this->request = $request;
		$this->auth = $auth;
	}

	public function initTempRecordPts($idStudy, $shape)
	{
		$percent = $offset = 0;
		$idUser = $this->auth->user()->ID_USER;
		$tempRecordPtsDef = TempRecordPtsDef::where('ID_USER', $idUser)->first();
		$tempRecordPts = TempRecordPts::where('ID_STUDY', $idStudy)->first();

		$listAxis1 = $this->initListPoints($idStudy, 1);
		$listAxis2 = $this->initListPoints($idStudy, 2);
		$listAxis3 = $this->initListPoints($idStudy, 3);

		$sizeList1 = count($listAxis1);
		$sizeList2 = count($listAxis2);
		$sizeList3 = count($listAxis3);

		if ($sizeList1 == 0) {
			array_push($listAxis1, 0.0);
			$sizeList1 = count($listAxis1);
		}

		if ($sizeList3 == 0) {
			array_push($listAxis3, 0.0);
			$sizeList3 = count($listAxis3);
		}

		if (($tempRecordPtsDef != null) && ($tempRecordPts != null) && 
			$sizeList1 > 0 && $sizeList2 > 0 && $sizeList3 > 0) {
			
		}
	}

	private function initListPoints($idStudy, $axe)
	{
		$product = Product::where('ID_STUDY', $idStudy)->first();
        $productElmt = null;
        $meshPositions = null;

        if ($product != null) {
            $idProd = $product->ID_PROD;
            $productElmt = ProductElmt::where('ID_PROD', $idProd)->first();
            if ($productElmt != null) {
                $idProductElmt = $productElmt->ID_PRODUCT_ELMT;
                $meshPositions = MeshPosition::select('MESH_AXIS_POS')
                    ->where('MESH_AXIS', '=', $axe)
                    ->where('ID_PRODUCT_ELMT', '=', $idProductElmt)
                    ->orderBy("MESH_AXIS_POS", "ASC")->distinct()->get();
            }
        }

       return $meshPositions;
	}
}