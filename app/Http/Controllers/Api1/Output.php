<?php

namespace App\Http\Controllers\Api1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Factory as Auth;

use App\Models\Study;
use App\Models\StudyEquipment;
use App\Models\Production;
use App\Models\Product;

use App\Cryosoft\UnitsConverterService;

class Output extends Controller
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
    public function __construct(Request $request, Auth $auth, UnitsConverterService $unit)
    {
        $this->request = $request;
        $this->auth = $auth;
        $this->unit = $unit;
    }

    public function getHeadBalanceResult($idStudy)
    {
        $idUser = $this->auth->user()->ID_USER;

        $study = Study::find($idStudy);
        $production = Production::where("ID_STUDY", $idStudy)->first();
        $product = Product::where("ID_STUDY", $idStudy)->first();

        $prodFlowRate = $production->PROD_FLOW_RATE;
        $avgTInitial = $production->AVG_T_INITIAL;
        $prodElmtRealweight = $product->PROD_REALWEIGHT;


        $calculationMode = $study->CALCULATION_MODE;

        // get Symbol
        $productFlowSymbol = $this->unit->productFlowSymbol();
        $massSymbol = $this->unit->massSymbol();
        $temperatureSymbol = $this->unit->temperatureSymbol();
        $percentSymbol = "%";
        $timeSymbol = $this->unit->timeSymbol();

        $symbol = compact("productFlowSymbol", "massSymbol", "temperatureSymbol", "percentSymbol", "timeSymbol");

        //get study equipment
        $studyEquipments = StudyEquipment::where("ID_STUDY_EQUIPMENTS", $idStudy)->orderBy("ID_STUDY_EQUIPMENTS", "ASC")->get();

        return compact("prodFlowRate", "avgTInitial", "prodElmtRealweight", "calculationMode", "symbol");
    }
}
