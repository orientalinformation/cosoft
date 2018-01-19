<?php

namespace App\Http\Controllers\Api1;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\Auth\Factory as Auth;
use Illuminate\Http\Request;
use App\Models\Translation;

class ReferenceData extends Controller
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
    public function __construct(Request $request, Auth $auth)
    {
        $this->request = $request;
        $this->auth = $auth;
    }

    public function getFamilyTranslations($transType)
    {
        $translations = Translation::where('TRANS_TYPE', $transType)
            ->where('CODE_LANGUE', $this->auth->user()->CODE_LANGUE)
            ->get();

        for ($i = 0; $i < $translations->count(); $i++) {
            $translations[$i]->LABEL = \mb_convert_encoding($translations[$i]->LABEL, "UTF-8");
        }
        
        return $translations;
    }

    public function getDataComponent()
    {
        $productFamily = $this->getFamilyTranslations(14);
        $subFamily = $this->getFamilyTranslations(16);
        $productNature = $this->getFamilyTranslations(15);
        $conductivity = $this->getFamilyTranslations(9);
        $fatType = $this->getFamilyTranslations(12);

        $COMP_COMMENT = $COM_NAME = '';
        $LIPID = $GLUCID = $PROTID = $WATER = $FREEZE_TEMP = $COMP_VERSION = 0;
        $SALT = $AIR = $NON_FROZEN_WATER = 0;
        $release = 1;

        $array = [
            'productFamily' => $productFamily,
            'subFamily' => $subFamily,
            'productNature' => $productNature,
            'Conductivity' => $conductivity,
            'FatType' => $fatType,
            'COM_NAME' => $COM_NAME,
            'COMP_COMMENT' => $COMP_COMMENT,
            'COMP_VERSION' => $COMP_VERSION,
            'FREEZE_TEMP' => $FREEZE_TEMP,
            'WATER' => $WATER,
            'PROTID' => $PROTID,
            'LIPID' => $LIPID,
            'GLUCID' => $GLUCID,
            'SALT' => $SALT,
            'AIR' => $AIR,
            'NON_FROZEN_WATER' => $NON_FROZEN_WATER,
            'release' => $release,
        ];

        return $array;
    }
}