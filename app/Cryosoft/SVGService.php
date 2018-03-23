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

use App\Models\EquipCharact;

class SVGService
{
	/**
    * @var Illuminate\Contracts\Auth\Factory
    */
    protected $auth;

    protected $app;

    protected $value;

    protected $convert;
    
    public function __construct(\Laravel\Lumen\Application $app)
    {
        $this->app = $app;
        $this->auth = $app['Illuminate\\Contracts\\Auth\\Factory'];
        $this->value = $app['App\\Cryosoft\\ValueListService'];
        $this->convert = $app['App\\Cryosoft\\UnitsConverterService'];
    }

    public function getAxisOrigin() 
    {
    	$x = PROFILE_CHARTS_MARGIN_WIDTH;
    	$y = PROFILE_CHARTS_HEIGHT - PROFILE_CHARTS_MARGIN_HEIGHT;

    	$point = [
    		'x' => $x,
    		'y' => $y
    	];

    	return $point;
    }

	public function getAxisXPos($lfVal)
	{
		$pos = $minScaleX = 0;
		$maxScaleX = 100;

		if ($lfVal < $minScaleX) {
		  $lfVal = $minScaleX;
		} else if ($lfVal > $maxScaleX) {
		  $lfVal = $minScaleX;
		}

		$axisXLength = PROFILE_CHARTS_WIDTH - (2 * PROFILE_CHARTS_MARGIN_WIDTH);

		$pos = PROFILE_CHARTS_MARGIN_WIDTH + round((float)(($lfVal - $minScaleX) / ($maxScaleX - $minScaleX)) * $axisXLength);

		return $pos;
	}

	public function getAxisYPos($lfVal, $minScaleY, $maxScaleY)
	{
		$pos = 0;
		if ($lfVal < $minScaleY) {
		  $lfVal = $minScaleY;
		} else if ($lfVal > $maxScaleY) {
		  $lfVal = $maxScaleY;
		}

		$axisYLength = PROFILE_CHARTS_HEIGHT - (2 * PROFILE_CHARTS_MARGIN_HEIGHT);

		if ($minScaleY == $maxScaleY) {
			$pos = (PROFILE_CHARTS_HEIGHT - PROFILE_CHARTS_MARGIN_HEIGHT - 125);
		} else {
			$pos = (PROFILE_CHARTS_HEIGHT - PROFILE_CHARTS_MARGIN_HEIGHT) - round((float)(($lfVal - $minScaleY) / ($maxScaleY - $minScaleY)) * $axisYLength);
		}

		return $pos;
	}

	public function getAxisX()
	{
		$unitIdent = 10;
		$minScaleX = 0;
		$maxScaleX = 100;
    	$axisLength = (PROFILE_CHARTS_WIDTH - (2 * PROFILE_CHARTS_MARGIN_WIDTH)) + 20;
    	$nbFractionDigits = 0;
    	$axisOriginX = PROFILE_CHARTS_MARGIN_WIDTH;
    	$axisOriginY = PROFILE_CHARTS_HEIGHT - PROFILE_CHARTS_MARGIN_HEIGHT;
    	$nbOfGraduation = 11;
    	$axisMaxValue = 0.0;
    	$axisMinValue = 0.0;
    	$axisType = 0;
	}

	public function getSelectedProfile($ID_EQUIP, $profileType, $profileFace)
    {   
        $listOfPoints = $item = array();
        $equipCharacts = EquipCharact::where('ID_EQUIP', $ID_EQUIP)->get();
        if ($equipCharacts) {
            foreach ($equipCharacts as $equipCharact) {
                $item['X_POSITION'] = doubleval($equipCharact->X_POSITION);
                if ($profileType == 1) {
                    switch ($profileFace) {
                        case 0:
                            $item['Y_POINT'] = doubleval($equipCharact->ALPHA_TOP);
                            break;
                        case 1:
                            $item['Y_POINT'] = doubleval($equipCharact->ALPHA_BOTTOM);
                            break;
                        case 2:
                            $item['Y_POINT'] = doubleval($equipCharact->ALPHA_LEFT);
                            break;
                        case 3:
                            $item['Y_POINT'] = doubleval($equipCharact->ALPHA_RIGHT);
                            break;
                        case 4:
                            $item['Y_POINT'] = doubleval($equipCharact->ALPHA_FRONT);
                            break;
                        case 5:
                            $item['Y_POINT'] = doubleval($equipCharact->ALPHA_REAR);
                            break;
                        default:
                            # code..
                            break;
                    }
                } else {
                    switch ($profileFace) {
                        case 0:
                            $item['Y_POINT'] = doubleval($equipCharact->TEMP_TOP);
                            break;
                        case 1:
                            $item['Y_POINT'] = doubleval($equipCharact->TEMP_BOTTOM);
                            break;
                        case 2:
                            $item['Y_POINT'] = doubleval($equipCharact->TEMP_LEFT);
                            break;
                        case 3:
                            $item['Y_POINT'] = doubleval($equipCharact->TEMP_RIGHT);
                            break;
                        case 4:
                            $item['Y_POINT'] = doubleval($equipCharact->TEMP_FRONT);
                            break;
                        case 5:
                            $item['Y_POINT'] = doubleval($equipCharact->TEMP_REAR);
                            break;
                        default:
                            # code...
                            break;
                    }
                }
                array_push($listOfPoints, $item);
            }
        }

        return $listOfPoints;
    }

    public function getYPosition($min, $max, $profileType, $listOfPoints)
    {   
        array_multisort(array_column($listOfPoints, 'Y_POINT'), SORT_ASC, $listOfPoints);

        $result = $Y = $listPoints = array();
        $textX = 300;

        if ($min != null) {
            array_push($Y, $min);
        }

        for($i = 0; $i < count($listOfPoints); $i++) {
            if ($profileType == 1) {
                 if (!in_array($this->convert->convectionCoeff($listOfPoints[$i]['Y_POINT']), $Y)) {
                    array_push($Y, $this->convert->convectionCoeff($listOfPoints[$i]['Y_POINT'])); 
                 }
            } else {
                if (!in_array($this->convert->temperature($listOfPoints[$i]['Y_POINT']), $Y)) {
                    array_push($Y, $this->convert->temperature($listOfPoints[$i]['Y_POINT'])); 
                }
            }
        }

        if ($max != null) {
            array_push($Y, $max);
        }

        if (count($Y) > 12) {
            $newList = array();
            $count = 0;
            for ($i = 0; $i < count($Y); $i++) {
                $count++;
                if ($i == 0) {
                    array_push($newList, $Y[$i]);
                }

                if ($count == 4) {
                    array_push($newList, $Y[$i]);
                    $count = 0;
                }
            }
            $Y = $newList;
        }

        if (count($Y) > 0) {
            for($i = 0; $i < count($Y); $i++) {
                $item['position'] = floatval($Y[$i]);
                if ($i == 0) {
                    $item['textX'] = $textX;
                } else {
                    if (count($Y) == 8 || count($Y) == 9 || count($Y) == 10) {
                        $textX = $textX - 25;
                    } else if (count($Y) == 2) {
                        $textX = $textX - 250;
                    } else if (count($Y) > 10) {
                        $textX = $textX - 20;
                    }else {
                        $textX = $textX - 31;
                    }

                    $item['textX'] = $textX;
                }
                array_push($result, $item);
            }
        }

        return $result;
    }
}