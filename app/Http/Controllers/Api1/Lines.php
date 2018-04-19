<?php

namespace App\Http\Controllers\Api1;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\Study;
use App\Models\LineElmt;
use App\Models\MinMax;
use App\Models\PipeGen;
use App\Models\StudyEquipment;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Factory as Auth;
use App\Kernel\KernelService;
use App\Cryosoft\UnitsConverterService;
use App\Cryosoft\ValueListService;
use App\Cryosoft\LineService;
use App\Cryosoft\MinMaxService;

class Lines extends Controller
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
     * @var App\Kernel\KernelService
     */
    protected $kernel;

    /**
     * @var App\Cryosoft\UnitsConverterService
     */
    protected $convert;

    /**
     * @var App\Cryosoft\ValueListService
     */
    protected $value;
    /**
     * @var App\Cryosoft\MinMaxService;
     */
    protected $minmax;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request, Auth $auth, KernelService $kernel, 
    UnitsConverterService $convert, ValueListService $value, LineService $lineE, MinMaxService $minmax)
    {
        $this->request = $request;
        $this->auth = $auth;
        $this->kernel = $kernel;
        $this->convert = $convert;
        $this->value = $value;
        $this->lineE = $lineE;
        $this->minmax = $minmax;
    }
	function eltTypeString($intType, $idIsolation) {
        switch ($intType) {
            case 1:
            if ($idIsolation != 0) {
                return 'insulatedline';
            } else {
                return 'non_insulated_line';
            }
            case 2:
                return 'storageTank';
            case 3:
                return 'tee';
            case 4:
                return 'elbows';
            case 5:
            if ($idIsolation != 0) {
                return 'insulatedlineval';
            } else {
                return 'non_insulated_valves';
            }
            default:
                break;
        }
        return false;
    }

    public function loadPipeline($id) {
		$study = Study::find($id);
        $user = $study->user;
        foreach ($study->studyEquipments as $studyEquip) {
            $pipeGen = $studyEquip->pipeGens->first();
            $coolingFamily = $studyEquip->ID_COOLING_FAMILY;
            if ($coolingFamily != 3) {
                $insulationParams = [0, 1, 2];
            } else {
                $insulationParams = [0, 1, 2, 3];
            }
            $lineElmts = [];
            if (count($pipeGen) > 0) {
                foreach ($pipeGen->lineDefinitions as $lineDef) {
                    $lineElmt = $lineDef->lineElmt;
                    $lineElmts[] = $lineElmt;
                }
                $diameterParam = $this->lineE->getdiameter($coolingFamily, $lineElmts[0]->INSULATION_TYPE, $study->ID_STUDY);
                $storageTankParam = $this->lineE->getStorageTank($coolingFamily, $lineElmts[0]->INSULATION_TYPE, $study->ID_STUDY);
                $insulineSubs = $this->lineE->getNameComboBox(1, $lineElmts[0]->ELT_SIZE, $coolingFamily, $lineElmts[0]->INSULATION_TYPE);
                $non_insullineSubs = $this->lineE->getNonLine(1, $lineElmts[0]->ELT_SIZE, $coolingFamily);
                $insullvalSubs = $this->lineE->getNameComboBox(5, $lineElmts[0]->ELT_SIZE, $coolingFamily, $lineElmts[0]->INSULATION_TYPE);
                $non_insul_valSubs = $this->lineE->getNonLine(5, $lineElmts[0]->ELT_SIZE, $coolingFamily);
                $teeSubs = $this->lineE->getNameComboBox(3, $lineElmts[0]->ELT_SIZE, $coolingFamily, $lineElmts[0]->INSULATION_TYPE);
                $elbowsSubs = $this->lineE->getNameComboBox(4, $lineElmts[0]->ELT_SIZE, $coolingFamily, $lineElmts[0]->INSULATION_TYPE);
                
                $insulSubLabel = [];
                $insulineSubValue = [];
                foreach ($insulineSubs as $insulineSub) {
                    $insulSubLabel[] = $insulineSub->LABEL ."-". $this->lineE->getStatus($insulineSub->LINE_RELEASE);
                    $insulineSubValue[] = $insulineSub->ID_PIPELINE_ELMT;
                }
                $non_insullineSubsLabel = [];
                $non_insullineSubsValue = [];
                foreach ($non_insullineSubs as $non_insullineSub) {
                    $non_insullineSubsLabel[] = $non_insullineSub->LABEL ."-". $this->lineE->getStatus($non_insullineSub->LINE_RELEASE);
                    $non_insullineSubsValue[] = $non_insullineSub->ID_PIPELINE_ELMT;
                }
                $insullvalSubsLabel = [];
                $insullvalSubsValue = [];
                foreach ($insullvalSubs as $insullvalSub) {
                    $insullvalSubsLabel[] = $insullvalSub->LABEL ."-". $this->lineE->getStatus($insullvalSub->LINE_RELEASE);
                    $insullvalSubsValue[] = $insullvalSub->ID_PIPELINE_ELMT;
                }
                $non_insul_valSubsLabel = [];
                $non_insul_valSubsValue = [];
                foreach ($non_insul_valSubs as $non_insul_valSub) {
                    $non_insul_valSubsLabel[] = $non_insul_valSub->LABEL ."-". $this->lineE->getStatus($non_insul_valSub->LINE_RELEASE);
                    $non_insul_valSubsValue[] = $non_insul_valSub->ID_PIPELINE_ELMT;
                }
                $teeSubsLabel = [];
                $teeSubsValue = [];
                foreach ($teeSubs as $teeSub) {
                    $teeSubsLabel[] = $teeSub->LABEL ."-". $this->lineE->getStatus($teeSub->LINE_RELEASE);
                    $teeSubsValue[] = $teeSub->ID_PIPELINE_ELMT;
                }
                $elbowsSubsLabel = [];
                $elbowsSubsValue = [];
                foreach ($elbowsSubs as $elbowsSub) {
                    $elbowsSubsLabel[] = $elbowsSub->LABEL ."-". $this->lineE->getStatus($elbowsSub->LINE_RELEASE);
                    $elbowsSubsValue[] = $elbowsSub->ID_PIPELINE_ELMT;
                }

                $arrPipeElmt = [];
                foreach ($lineElmts as $getIDlineElmt) {
                    $arrPipeElmt[] = $getIDlineElmt->ID_PIPELINE_ELMT;
                }
                $insul = $this->lineE->getIdlineElmtformLineDef($pipeGen->ID_PIPE_GEN, 1);
                $noninsul = $this->lineE->getIdlineElmtformLineDef($pipeGen->ID_PIPE_GEN, 2);
                $insulval = $this->lineE->getIdlineElmtformLineDef($pipeGen->ID_PIPE_GEN, 5);
                $noninsulval = $this->lineE->getIdlineElmtformLineDef($pipeGen->ID_PIPE_GEN, 6);
                $teeval = $this->lineE->getIdlineElmtformLineDef($pipeGen->ID_PIPE_GEN, 4);
                $elbowval = $this->lineE->getIdlineElmtformLineDef($pipeGen->ID_PIPE_GEN, 3);
                $arrLabel = [];
                $arrLabel["idPipeELMT"] = $arrPipeElmt;
                $arrLabel["idcooling"] = $coolingFamily;
                $arrLabel["insulationLineSub"] = !empty($insulSubLabel) ? $insulSubLabel : "";
                $arrLabel["non_insulated_lineSub"] = !empty($non_insullineSubsLabel) ? $non_insullineSubsLabel : "";
                $arrLabel["insulatedlinevalSub"] = !empty($insullvalSubsLabel) ? $insullvalSubsLabel : "";
                $arrLabel["non_insulated_valveSub"] = !empty($non_insul_valSubsLabel) ? $non_insul_valSubsLabel : "";
                $arrLabel["teeSub"] = !empty($teeSubsLabel) ? $teeSubsLabel : "";
                $arrLabel["elbowsSub"] = !empty($elbowsSubsLabel) ? $elbowsSubsLabel : "";
                $arrLabel["insulationLineValue"] = !empty($insulineSubValue) ? $insulineSubValue : "" ;
                $arrLabel["non_insulated_lineValue"] = !empty($non_insullineSubsValue) ? $non_insullineSubsValue : "" ;
                $arrLabel["insulatedlinevalValue"] = !empty($insullvalSubsValue) ? $insullvalSubsValue : "" ;
                $arrLabel["non_insulated_valValue"] = !empty($non_insul_valSubsValue) ? $non_insul_valSubsValue : "" ;
                $arrLabel["teeValue"] = !empty($teeSubsValue) ? $teeSubsValue : "" ;
                $arrLabel["elbowsValue"] = !empty($elbowsSubsValue) ? $elbowsSubsValue : "" ;
                $arrLabel["insul"] = !empty($insul) ? $insul->ID_PIPELINE_ELMT : "" ;
                $arrLabel["noninsul"] = !empty($noninsul) ? $noninsul->ID_PIPELINE_ELMT : "" ;
                $arrLabel["insulval"] = !empty($insulval) ? $insulval->ID_PIPELINE_ELMT : "" ;
                $arrLabel["noninsulval"] = !empty($noninsulval) ? $noninsulval->ID_PIPELINE_ELMT : "" ;
                $arrLabel["teeval"] = !empty($teeval) ? $teeval->ID_PIPELINE_ELMT : "" ;
                $arrLabel["elbowval"] = !empty($elbowval) ? $elbowval->ID_PIPELINE_ELMT : "" ;
                $arrLabel["insulationType"] = $lineElmts[0]->INSULATION_TYPE;
                $arrLabel["height"] = $this->convert->materialRise($pipeGen->HEIGHT);
                $arrLabel["pressuer"] = $this->convert->pressure($pipeGen->PRESSURE);
                $arrLabel["insulllenght"] = $this->convert->lineDimension($pipeGen->INSULLINE_LENGHT);
                $arrLabel["noninsullenght"] = $this->convert->lineDimension($pipeGen->NOINSULLINE_LENGHT);
                $arrLabel["insulvallenght"] = $pipeGen->INSUL_VALVES;
                $arrLabel["noninsulatevallenght"] = $pipeGen->NOINSUL_VALVES;
                $arrLabel["gastemp"] = $pipeGen->GAS_TEMP;
                $arrLabel["elbowsnumber"] = $pipeGen->ELBOWS;
                $arrLabel["teenumber"] = $pipeGen->TEES;

                $getLabels = [];
                foreach ($arrPipeElmt as $idPipeElmt) {
                    $getLabels = LineElmt::select('ELT_TYPE','INSULATION_TYPE','LABEL','ID_PIPELINE_ELMT','LINE_RELEASE')->where('ID_USER', '!=', $this->auth->user()->ID_USER)
                    ->join('Translation', 'ID_PIPELINE_ELMT', '=', 'Translation.ID_TRANSLATION')
                    ->where('Translation.TRANS_TYPE', 27)->where('ID_PIPELINE_ELMT', $idPipeElmt)
                    ->where('Translation.CODE_LANGUE', $this->auth->user()->CODE_LANGUE)->orderBy('LABEL', 'ASC')->get();
                }
                if (count($getLabels) > 0) {
                    foreach ($getLabels as $getLabelName) {
                        if ($getLabelName['ELT_TYPE'] !=2 ) {
                            $arrLabel[$this->eltTypeString($getLabelName['ELT_TYPE'],$getLabelName['INSULATION_TYPE'] )] = $getLabelName['LABEL'] ."-". $this->lineE->getStatus($getLabelName['LINE_RELEASE']);
                        } else {
                            $arrLabel[$this->eltTypeString($getLabelName['ELT_TYPE'],$getLabelName['INSULATION_TYPE'])] = $getLabelName['ID_PIPELINE_ELMT'];
                            $arrLabel['storageTankName'] = $getLabelName['LABEL'] ."-". $this->lineE->getStatus($getLabelName['LINE_RELEASE']);
                        }
                        if ($lineElmts[0]->ELT_TYPE != 2) {
                            $arrLabel["diameter"] = $this->convert->lineDimension($lineElmts[0]->ELT_SIZE);
                        } 
                    }
                }
                
                foreach ($diameterParam as $diameterParams) {
                    $arrLabel['diameterParam'][] = $this->convert->lineDimension($diameterParams['ELT_SIZE']); 
                }
                foreach ($insulationParams as $insulationParam) {
                    $arrLabel['insulationParam'][] = $insulationParam;
                }
                $stParams =[];
                foreach ($storageTankParam as $storageTankParams) {
                    $stParams[] = $storageTankParams->ELT_SIZE;
                }
                $storageTLabel =[];
                $storageTValue =[];
                foreach ($stParams as $stParam) {
                    $stLabels = $this->lineE->getNameComboBox(2,$stParam, $coolingFamily,$lineElmts[0]->INSULATION_TYPE);
                    foreach ($stLabels as $stLabel) {
                        $storageTLabel[] = $stLabel->LABEL . "-" .  $this->lineE->getStatus($stLabel->LINE_RELEASE);
                        $storageTValue[] = $stLabel->ID_PIPELINE_ELMT;
                    }
                } 
                $arrLabel['storageTankParam'] = $storageTLabel;
                $arrLabel['storageTankValue'] = $storageTValue;
            }
            
            $resultInsideDiameters= [];
            foreach ($insulationParams as $insulationType) {
                $resultInsideDiameters[] = $this->lineE->getdiameter($coolingFamily, $insulationType, $study->ID_STUDY);
				$storageTanks = $this->lineE->getStorageTank($coolingFamily, $insulationType, $study->ID_STUDY);
            }

            $resultInsideDia = [];
            foreach ($resultInsideDiameters as $value) {
                $item = [];
                foreach ($value as $value) {
                    $item[] = $value->ELT_SIZE;
                }
                $resultInsideDia[] = $item;
            }
            // return $resultInsideDia;
            $i = 0;
            $dataResult = [];
            $dataResultExist = [];
            foreach ($resultInsideDia as $res) {
                if (count($pipeGen) > 0) {
                    $dataResultExist = $arrLabel;
                    $dataResult[$arrLabel['insulationType']] = $this->getData($arrLabel['diameterParam'], $storageTanks, $coolingFamily, $arrLabel['insulationType']);                    
                    
                    if ($i < $arrLabel['insulationType']) {
                        $dataResult[$i] = $this->getData($res, $storageTanks, $coolingFamily, $i);
                    } else if ($i < 3) {
                        $key = $i + 1;
                        if ($key == 2) {
                            $dataResult[2] = $this->getData($resultInsideDia[2], $storageTanks, $coolingFamily, 2);
                        }
                        if ($key == 1) {
                            $dataResult[1] = $this->getData($resultInsideDia[1], $storageTanks, $coolingFamily, 1);
                        } 
                    }
                } else {
                    $dataResult[] = $this->getData($res, $storageTanks, $coolingFamily, $i);
                    
                }
                $i++;
            }
            // return $res;
            return compact("dataResult", "dataResultExist");
        }
    }


    public function getData($resultFirst, $storageTanks, $coolingFamily, $sort)
    {
        $item = [];
        foreach ($resultFirst as $diameter) {
            $insulllenght = 0;
            $noninsullenght = 0;
            $insulvallenght = 0;
            $noninsulatevallenght = 0;
            $teenumber = 0;
            $elbowsnumber = 0;
            $height = 0;
            $pressuer = 0;
            $gastemp = 0;
            $resStogeTs =[];
            foreach ($storageTanks as $vstorageTank) {
                $resStogeTs[] = $vstorageTank->ELT_SIZE;
            }
            
            $itemRes = [];
            $insulatedlines = $this->lineE->getNameComboBox(1, $diameter, $coolingFamily, $sort);
            $non_insulated_lines = $this->lineE->getNonLine(1, $diameter, $coolingFamily);
            $insulatedlinevals = $this->lineE->getNameComboBox(5, $diameter, $coolingFamily, $sort);
            $non_insulated_valves = $this->lineE->getNonLine(5, $diameter, $coolingFamily);
            $tees = $this->lineE->getNameComboBox(3, $diameter, $coolingFamily, $sort);
            $elbows = $this->lineE->getNameComboBox(4, $diameter, $coolingFamily, $sort);
            if (count($insulatedlines) > 0) {
                $insulatedlineLabel = [];
                $insulationlineValue = [];
                foreach ($insulatedlines as $insulatedline) {
                    $insulatedlineLabel[] = $insulatedline->LABEL ."-". $this->lineE->getStatus($insulatedline->LINE_RELEASE);
                    $insulationlineValue[] = $insulatedline->ID_PIPELINE_ELMT;
                } 
            } else {
                $insulatedlineLabel  = '';
                $insulationlineValue  = 0;
            }
            if (count($non_insulated_lines) > 0) {
                $non_insulated_lineLabel = [];
                $non_insulated_lineValue = [];
                foreach ($non_insulated_lines as $non_insulated_line) {
                    $non_insulated_lineLabel[] = $non_insulated_line->LABEL ."-". $this->lineE->getStatus($non_insulated_line->LINE_RELEASE);
                    $non_insulated_lineValue[] = $non_insulated_line->ID_PIPELINE_ELMT;
                }
            }else {
                $non_insulated_lineLabel = '';
                $non_insulated_lineValue = 0;
            }
            if (count($insulatedlinevals) > 0) {
                $insulatedlinevalLabel = [];
                $insulatedlinevalValue = [];
                foreach ($insulatedlinevals as $insulatedlineval) {
                    $insulatedlinevalLabel[] = $insulatedlineval->LABEL ."-". $this->lineE->getStatus($insulatedlineval->LINE_RELEASE);
                    $insulatedlinevalValue[] = $insulatedlineval->ID_PIPELINE_ELMT;
                }
            } else {
                $insulatedlinevalLabel = '';
                $insulatedlinevalValue = 0;
            }
            if (count($non_insulated_valves) > 0) {
                $non_insulated_valvesLabel = [];
                $non_insulated_valValue = [];
                foreach ($non_insulated_valves as $non_insulated_valve) {
                    $non_insulated_valvesLabel[] = $non_insulated_valve->LABEL ."-". $this->lineE->getStatus($non_insulated_valve->LINE_RELEASE);
                    $non_insulated_valValue[] = $non_insulated_valve->ID_PIPELINE_ELMT;
                }
            } else {
                $non_insulated_valvesLabel = '';
                $non_insulated_valValue = 0;
            } 

            if (count($tees) > 0) {
                $teeLabel = [];
                $teeValue = [];
                foreach ($tees as $tee) {
                    $teeLabel[] = $tee->LABEL ."-". $this->lineE->getStatus($tee->LINE_RELEASE);
                    $teeValue[] = $tee->ID_PIPELINE_ELMT;
                }
            } else {
                $teeLabel = '';
                $teeValue = 0;
            }
            if (count($elbows) > 0) {
                $elbowsLabel = [];
                $elbowsValue = [];
                foreach ($elbows as $elbow) {
                    $elbowsLabel[] = $elbow->LABEL ."-". $this->lineE->getStatus($elbow->LINE_RELEASE);
                    $elbowsValue[] = $elbow->ID_PIPELINE_ELMT;
                }
            } else {
                $elbowsLabel = '';
                $elbowsValue = 0;
            }
            $itemResult = [];
            $itemResultVal = [];
            foreach ($resStogeTs as $resStogeT) {
                $itemRes = $this->lineE->getNameComboBox(2, $resStogeT, $coolingFamily, $sort);
                foreach ($itemRes as $rowItem) {
                    $itemResult[] = $rowItem->LABEL ."-". $this->lineE->getStatus($rowItem->LINE_RELEASE);
                    $itemResultVal[] = $rowItem->ID_PIPELINE_ELMT;
                }
            }
            $storageTank = $itemResult;
            $storageTankValue = $itemResultVal;
            // $filterDiameter = LineElmt::where('ELT_SIZE', $diameter)->where('INSULATION_TYPE', $sort)->count();
            $item['diameter'] = $this->convert->lineDimension($diameter);
            $item['insulationType'] = $sort;
            $item['idcooling'] = $coolingFamily;
            $item['insulatedline'] = $insulatedlineLabel;
            $item['non_insulated_line'] = $non_insulated_lineLabel;
            $item['insulatedlineval'] = $insulatedlinevalLabel;
            $item['non_insulated_valves'] = $non_insulated_valvesLabel;
            $item['tee'] = $teeLabel;
            $item['elbows'] = $elbowsLabel;
            $item['insulationlineValue'] = $insulationlineValue;
            $item['non_insulated_lineValue'] = $non_insulated_lineValue;
            $item['insulatedlinevalValue'] = $insulatedlinevalValue;
            $item['non_insulated_valValue'] = $non_insulated_valValue;
            $item['teeValue'] = $teeValue;
            $item['elbowsValue'] = $elbowsValue;
            $item['storageTankParam'] = $storageTank;
            $item['storageTankValue'] = $storageTankValue;
            $item['height'] = $height;
            $item['pressuer'] = $pressuer;
            $item['insulllenght'] = $insulllenght;
            $item['noninsullenght'] = $noninsullenght;
            $item['insulvallenght'] = $insulvallenght;
            $item['noninsulatevallenght'] = $noninsulatevallenght;
            $item['elbowsnumber'] = $elbowsnumber;
            $item['teenumber'] = $teenumber;
            $item['gastemp'] = $gastemp;
            // if ($filterDiameter) {
                $data[] = $item;
            // }
        }
        return $data;
    }

    public function savePipelines() {
        $input = $this->request->all();
        $id = $input['ID_STUDY'];
        $insulatedLine = $input['INSULATED_LINE'];
        $nonInsulatedLine = $input['NON_INSULATED_LINE'];
        $insulatedValves = $input['INSULATED_VALVES'];
        $nonInsulatedValves = $input['NON_INSULATED_VALVES'];
        $tees = $input['TEESVALUE'];
        $elbows = $input['ELBOWSVALUE'];
        $storageTank = $input['STORAGE_TANK'];
        $insulatedLineLength = ($input['INSULLINE_LENGHT'] == 0) ? 0 : $this->convert->lineDimensionSave($input['INSULLINE_LENGHT']);
        $nonInsulatedLineLength = ($input['NOINSULLINE_LENGHT'] == 0) ? 0 : $this->convert->lineDimensionSave($input['NOINSULLINE_LENGHT']);
        $insulatedValvesQuantity = $input['INSUL_VALVES'];
        $nonInsulatedValvesQuantity = $input['NOINSUL_VALVES'];
        $elbowsQuantity = $input['ELBOWS'];
        $teesQuantity = $input['TEES'];
        $height = ($input['HEIGHT'] == 0) ? 0 : $this->convert->materialRiseSave($input['HEIGHT']);
        $pressure = ($input['PRESSURE'] == 0) ? 0 : $this->convert->pressureSave($input['PRESSURE']);
        // $storageTankCapacity = $input['storageTankCapacity'];
        $gasTemperature = ($input['GAS_TEMP'] == 0) ? 0 : $this->convert->exhaustTemperature($input['GAS_TEMP']);
        
        $study = Study::find($id);
        foreach ($study->studyEquipments as $studyEquip) {
            $pipeGen = $studyEquip->pipeGens->first();
            $coolingFamily = $studyEquip->ID_COOLING_FAMILY;
            if ($pipeGen == null) {
                $pipegen = new PipeGen();
            } else {
                $pipegen = PipeGen::where('ID_PIPE_GEN',$pipeGen->ID_PIPE_GEN)->first();
            }
        
            $pipegen->GAS_TEMP = $gasTemperature;
            $pipegen->FLUID = $coolingFamily;
            $pipegen->MATHIGHER = 0;
            
            $checkValueInsulllenght = $this->minmax->checkMinMaxValue($insulatedLineLength, $this->value->MIN_MAX_STUDY_LINE_INSULATEDLINE_LENGHT); 
            $checkValueNoninsullenght = $this->minmax->checkMinMaxValue($nonInsulatedLineLength, $this->value->MIN_MAX_STUDY_LINE_NON_INSULATEDLINE_LENGHT); 
            $checkValueInsulvallenght = $this->minmax->checkMinMaxValue($insulatedValvesQuantity, $this->value->MIN_MAX_STUDY_LINE_INSULATEDVALVE_NUMBER); 
            $checkValueNoninsulatevallenght  = $this->minmax->checkMinMaxValue($nonInsulatedValvesQuantity, $this->value->MIN_MAX_STUDY_LINE_NON_INSULATEDVALVE_NUMBER); 
            $checkValueTee = $this->minmax->checkMinMaxValue($teesQuantity, $this->value->MIN_MAX_STUDY_LINE_TEES_NUMBER); 
            $checkValueElbow = $this->minmax->checkMinMaxValue($elbowsQuantity, $this->value->MIN_MAX_STUDY_LINE_ELBOWS_NUMBER); 
            $checkValuePressure = $this->minmax->checkMinMaxValue($pressure ,$this->value->MIN_MAX_STUDY_LINE_PRESSURE); 
            $checkValueHeight = $this->minmax->checkMinMaxValue($height, $this->value->MIN_MAX_STUDY_LINE_HEIGHT); 
        
            if ($pressure == "") {
                return response("Enter a value in Tank pressure !", 406);
            } 
            
            if ($storageTank == 0) {
                return response("A Storage Tank is Obligatory1", 406); // Status code here
            }
            
            if ($checkValueInsulllenght) {
                if (is_int($insulatedLineLength) && $insulatedLineLength != "") {
                    return response("Not a valid number in Length !" ,406);
                } else {
                    $pipegen->INSULLINE_LENGHT = $insulatedLineLength;
                }
            } else {
                $mm = $this->minmax->getMinMaxNoneLine($this->value->MIN_MAX_STUDY_LINE_INSULATEDLINE_LENGHT);
                return response("Value out of range in Length (" . $mm->LIMIT_MIN . " : " . $mm->LIMIT_MAX . ") !" , 406); // Status code here
            }

            if ($checkValueNoninsullenght) {
                if (is_int($nonInsulatedLineLength) && $nonInsulatedLineLength != "") {
                    return response("Not a valid number in Length !" ,406);
                } else {
                    $pipegen->NOINSULLINE_LENGHT = $nonInsulatedLineLength;
                }
            } else {
                $mm = $this->minmax->getMinMaxLineDimention($this->value->MIN_MAX_STUDY_LINE_NON_INSULATEDLINE_LENGHT);
                return response("Value out of range in Length (" . $mm->LIMIT_MIN . " : " . $mm->LIMIT_MAX . ") !" , 406); // Status code here
            }

            if ($checkValueInsulvallenght) {
                if (filter_var($insulatedValvesQuantity , FILTER_VALIDATE_INT) === false) {
                    return response("Not a valid number in Number !" ,406);
                } else {
                    $pipegen->INSUL_VALVES = $insulatedValvesQuantity;
                }
            } else {
                $mm = $this->minmax->getMinMaxNoneLine($this->value->MIN_MAX_STUDY_LINE_INSULATEDVALVE_NUMBER);
                return response("Value out of range in Number(" . $mm->LIMIT_MIN . " : " . $mm->LIMIT_MAX . ") !" , 406); // Status code here
            }

            if ($checkValueNoninsulatevallenght) {
                if (filter_var($nonInsulatedValvesQuantity , FILTER_VALIDATE_INT) === false) {
                    return response("Not a valid number in Number !" ,406);
                } else {
                    $pipegen->NOINSUL_VALVES = $nonInsulatedValvesQuantity;
                }
            } else {
                $mm = $this->minmax->getMinMaxLineDimention($this->value->MIN_MAX_STUDY_LINE_NON_INSULATEDVALVE_NUMBER);
                return response("Value out of range in Number (" . $mm->LIMIT_MIN . " : " . $mm->LIMIT_MAX . ") !" , 406); // Status code here
            }

            if ($checkValueTee) {
                if (filter_var($teesQuantity , FILTER_VALIDATE_INT) === false) {
                    return response("Not a valid number in Number !" ,406);
                } else {
                    $pipegen->TEES = $teesQuantity;
                }
            } else {
                $mm = $this->minmax->getMinMaxLineDimention($this->value->MIN_MAX_STUDY_LINE_TEES_NUMBER);
                return response("Value out of range in Number (" . $mm->LIMIT_MIN . " : " . $mm->LIMIT_MAX . ") !" , 406); // Status code here
            }

            if ($checkValueElbow) {
                if (filter_var($elbowsQuantity , FILTER_VALIDATE_INT) === false) {
                    return response("Not a valid number in Number !" ,406);
                } else {
                    $pipegen->ELBOWS = $elbowsQuantity;
                }
            } else {
                $mm = $this->minmax->getMinMaxLineDimention($this->value->MIN_MAX_STUDY_LINE_ELBOWS_NUMBER);
                return response("Value out of range in Number (" . $mm->LIMIT_MIN . " : " . $mm->LIMIT_MAX . ") !" , 406); // Status code here
            }

            if ($checkValuePressure) {
                if (!is_string($pressure) || $pressure == 0) {
                    $pipegen->PRESSURE = $pressure;
                } else {
                    return response("Not a valid number in Number !" ,406);
                }
            } else {
                $mm = $this->minmax->getMinMaxPressure($this->value->MIN_MAX_STUDY_LINE_PRESSURE);
                return response("Value out of range in Tank pressure (" . $mm->LIMIT_MIN . " : " . $mm->LIMIT_MAX . ") !" , 406); // Status code here
            }

            if ($checkValueHeight) {
                if (is_int($height) && $height != 0) {
                    return response("Not a valid number in Number !" ,406);
                } else {
                    $pipegen->HEIGHT = $height;
                }
            } else {
                $mm = $this->minmax->getMinMaxHeight($this->value->MIN_MAX_STUDY_LINE_HEIGHT);
                return response("Value out of range in Tank pressure (" . $mm->LIMIT_MIN . " : " . $mm->LIMIT_MAX . ") !" , 406); // Status code here
            }
            
            if ($pipegen->ID_STUDY_EQUIPMENTS == null) {
                $pipegen->ID_STUDY_EQUIPMENTS =  $studyEquip->ID_STUDY_EQUIPMENTS;
                $pipegen->save();
                
            } else {
                $pipegen->save();
            }
            if (($insulatedLine != 0) && ($insulatedLineLength != 0.0)) {
                $this->lineE->createLineDefinition($pipegen->ID_PIPE_GEN, $insulatedLine, 1);
            } else if (($insulatedLine == 0) || ($insulatedLineLength == 0.0)) {
                $this->lineE->deleteLineDefinition($pipegen->ID_PIPE_GEN, 1);
            }
            if (($nonInsulatedLine != 0) && ($nonInsulatedLineLength != 0.0)) {
                $this->lineE->createLineDefinition($pipegen->ID_PIPE_GEN, $nonInsulatedLine, 2);
            } else if (($nonInsulatedLine == 0) || ($nonInsulatedLineLength == 0.0)) {
                $this->lineE->deleteLineDefinition($pipegen->ID_PIPE_GEN, 2);
            }
            if (($insulatedValves != 0) && ($insulatedValvesQuantity != 0)) {
                $this->lineE->createLineDefinition($pipegen->ID_PIPE_GEN, $insulatedValves, 5);
            } else if (($insulatedValves == 0) || ($insulatedValvesQuantity == 0)) {
                $this->lineE->deleteLineDefinition($pipegen->ID_PIPE_GEN, 5);
            }
            if (($nonInsulatedValves != 0) && ($nonInsulatedValvesQuantity != 0)) {
                $this->lineE->createLineDefinition($pipegen->ID_PIPE_GEN, $nonInsulatedValves, 6);
            } else if (($nonInsulatedValves == 0) || ($nonInsulatedValvesQuantity == 0)) {
                $this->lineE->deleteLineDefinition($pipegen->ID_PIPE_GEN, 6);
            }
            if (($elbows != 0) && ($elbowsQuantity != 0)) {
                $this->lineE->createLineDefinition($pipegen->ID_PIPE_GEN, $elbows, 3);
            } else if (($elbows == 0) || ($elbowsQuantity == 0)) {
                $this->lineE->deleteLineDefinition($pipegen->ID_PIPE_GEN, 3);
            }
            if (($tees != 0) && ($teesQuantity != 0)) {
                $this->lineE->createLineDefinition($pipegen->ID_PIPE_GEN, $tees, 4);
            } else if (($tees == 0) || ($teesQuantity == 0)) {
                $this->lineE->deleteLineDefinition($pipegen->ID_PIPE_GEN, 4);
            } 
            if ($storageTank != 0) {
                $this->lineE->createLineDefinition($pipegen->ID_PIPE_GEN, $storageTank, 7);
            } else {
                $this->lineE->deleteLineDefinition($pipegen->ID_PIPE_GEN, 7);
            }
        }
    }
}