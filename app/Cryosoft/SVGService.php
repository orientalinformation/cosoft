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

class SVGService
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
}