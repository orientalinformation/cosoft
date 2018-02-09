<?php

namespace App\Http\Controllers\Api1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Factory as Auth;
use App\Cryosoft\UnitsConverterService;
use App\Cryosoft\ValueListService;
use App\Models\Report;
use App\Models\StudyEquipment;
use App\Models\ProductElmt;


class Reports extends Controller
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
     * @var App\Cryosoft\UnitsConverterService
     */
    protected $convert;

    /**
     * @var App\Cryosoft\ValueListService
     */
    protected $value;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request, Auth $auth, UnitsConverterService $convert, ValueListService $value)
    {
        $this->request = $request;
        $this->auth = $auth;
        $this->convert = $convert;
        $this->value = $value;
    }

    public function getReport($id)
    {
        $report = Report::where('ID_STUDY', $id)->first();
        $report->consumptionSymbol = $this->convert->consumptionSymbolUser(2, 1);

        $report->isSizingValuesChosen = ($report->SIZING_VALUES & 0);
        $report->isSizingValuesMax = ($report->SIZING_VALUES & 16);
        $studyEquip = StudyEquipment::where('ID_STUDY', $id)->where('BRAIN_TYPE', 4)->get();

        if (count($studyEquip) > 0) {
            $report->isThereCompleteNumericalResults = true;
        } else {
            $report->isThereCompleteNumericalResults = false;
        }

        $productElmt = ProductElmt::where('ID_STUDY', $id)->first();
        $report->productElmt = $productElmt;
        $report->temperatureSymbol = $this->convert->temperatureSymbolUser();
        $report->CONTOUR2D_TEMP_MIN = $this->convert->prodTemperature($report->CONTOUR2D_TEMP_MIN);
        $report->CONTOUR2D_TEMP_MAX = $this->convert->prodTemperature($report->CONTOUR2D_TEMP_MAX);

        return $report;
    }
}