<?php

namespace App\Http\Controllers\Api1;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\Auth\Factory as Auth;
use Illuminate\Http\Request;
use App\Models\Translation;
use App\Models\Component;
use App\Cryosoft\UnitsConverterService;
use App\Cryosoft\ValueListService;
use Carbon\Carbon;
use App\Models\Compenth;
use App\Models\MinMax;
use App\Models\Language;
use App\Models\User;

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
     * @var App\Cryosoft\ValueListService
     */
    protected $value;

    /**
     * @var App\Cryosoft\UnitsConverterService
     */
    protected $convert;

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
        $others = null;

        $mine = Component::where('ID_USER', $this->auth->user()->ID_USER)
        ->join('Translation', 'ID_COMP', '=', 'Translation.ID_TRANSLATION')
        ->where('Translation.TRANS_TYPE', 1)->where('Translation.CODE_LANGUE', $this->auth->user()->CODE_LANGUE)
        ->orderBy('LABEL', 'ASC')->get();

        $others = Component::join('Ln2user', 'Ln2user.ID_USER', '=', 'Component.ID_USER')
            ->join('Translation', 'Component.ID_COMP', '=', 'Translation.ID_TRANSLATION')
            ->where('Translation.TRANS_TYPE', 1)->where('Translation.CODE_LANGUE', $this->auth->user()->CODE_LANGUE)
            ->where('Component.ID_USER', '!=', $this->auth->user()->ID_USER)
            ->orderBy('LABEL', 'ASC')->get();   


        $COMP_COMMENT = $COMP_NAME = '';
        $LIPID = $GLUCID = $PROTID = $WATER = $FREEZE_TEMP = $COMP_VERSION = $CONDUCT_TYPE = 0;
        $SALT = $AIR = $NON_FROZEN_WATER = $PRODUCT_TYPE = $SUB_TYPE = $FATTYPE = 0;
        $release = $NATURE_TYPE = 1;

        $array = [
            'mine' => $mine,
            'others' => $others,
            'productFamily' => $productFamily,
            'PRODUCT_TYPE' => $PRODUCT_TYPE,
            'subFamily' => $subFamily,
            'SUB_TYPE' => $SUB_TYPE,
            'productNature' => $productNature,
            'NATURE_TYPE' => $NATURE_TYPE,
            'Conductivity' => $conductivity,
            'CONDUCT_TYPE' => $CONDUCT_TYPE,
            'FatType' => $fatType,
            'FATTYPE' => $FATTYPE,
            'COMP_NAME' => $COMP_NAME,
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

    public function saveDataComponent()
    {
        $input = $this->request->all();

        $COMP_COMMENT = $COMP_NAME = '';
        $LIPID = $GLUCID = $PROTID = $WATER = $FREEZE_TEMP = $COMP_VERSION = $CONDUCT_TYPE = 0;
        $SALT = $AIR = $NON_FROZEN_WATER = $PRODUCT_TYPE = $SUB_TYPE = $FATTYPE = $DENSITY = $HEAT = 0;
        $release = $NATURE_TYPE = 1;
        $tempertures = array();
        $current = Carbon::now('Asia/Ho_Chi_Minh');

        if (isset($FREEZE_TEMP)) $FREEZE_TEMP = (float) $this->convert->unitConvert($this->value->TEMPERATURE, floatval($input['FREEZE_TEMP']));
        if (isset($input['COMP_COMMENT'])) $COMP_COMMENT = $input['COMP_COMMENT'];
        if (isset($input['COMP_NAME'])) $COMP_NAME = $input['COMP_NAME'];
        if (isset($input['NON_FROZEN_WATER'])) $NON_FROZEN_WATER = floatval($input['NON_FROZEN_WATER']);
        if (isset($input['WATER'])) $WATER = floatval($input['WATER']);
        if (isset($input['AIR'])) $AIR = floatval($input['AIR']);
        if (isset($input['SALT'])) $SALT = floatval($input['SALT']);
        if (isset($input['PROTID'])) $PROTID = floatval($input['PROTID']);
        if (isset($input['GLUCID'])) $GLUCID = floatval($input['GLUCID']);
        if (isset($input['LIPID'])) $LIPID = floatval($input['LIPID']);
        if (isset($input['CONDUCT_TYPE'])) $CONDUCT_TYPE = intval($input['CONDUCT_TYPE']);
        if (isset($input['COMP_VERSION'])) $COMP_VERSION = intval($input['COMP_VERSION']);
        if (isset($input['FATTYPE'])) $FATTYPE = intval($input['FATTYPE']);
        if (isset($input['NATURE_TYPE'])) $NATURE_TYPE = intval($input['NATURE_TYPE']);
        if (isset($input['PRODUCT_TYPE'])) $PRODUCT_TYPE = intval($input['PRODUCT_TYPE']);
        if (isset($input['SUB_TYPE'])) $SUB_TYPE = intval($input['SUB_TYPE']);
        if (isset($input['Temperatures'])) $temperatures = $input['Temperatures'];
        if (isset($input['release'])) $release = intval($input['release']);

        $comment = 'Created on ' . $current->toDateTimeString() . ' by '. $this->auth->user()->USERNAM;
        $commentTrue = $COMP_COMMENT . "\n". $comment;

        $minMaxDensity = $this->getMinMax($this->value->MIN_MAX_DENSITY);
        $DENSITY = $minMaxDensity->DEFAULT_VALUE;

        $minMaxHeat = $this->getMinMax($this->value->MIN_MAX_HEAT);
        $HEAT = $minMaxHeat->DEFAULT_VALUE;

        $component = new Component();
        $component->ID_USER = $this->auth->user()->ID_USER;
        $component->COMP_COMMENT = ($COMP_COMMENT == '') ? $comment : $commentTrue;
        // $component->COMP_DATE = $current->toDateTimeString();
        $component->COMP_VERSION = $COMP_VERSION;
        $component->COMP_RELEASE = $release;
        $component->COMP_NATURE = $NATURE_TYPE;
        $component->FAT_TYPE = $FATTYPE;
        $component->CLASS_TYPE = $PRODUCT_TYPE;
        $component->SUB_FAMILY = $SUB_TYPE;
        $component->AIR = $AIR;
        $component->WATER = $WATER;
        $component->GLUCID = $GLUCID;
        $component->LIPID = $LIPID;
        $component->PROTID = $PROTID;
        $component->SALT = $SALT;
        $component->FREEZE_TEMP = $FREEZE_TEMP;
        $component->NON_FROZEN_WATER = $NON_FROZEN_WATER;
        $component->DENSITY = $DENSITY;
        $component->SPECIFIC_HEAT = $HEAT;
        $component->COND_DENS_MODE = $CONDUCT_TYPE;
        $component->COMP_GEN_STATUS = 0;
        $component->COMP_IMP_ID_STUDY = 0;
        $component->OPEN_BY_OWNER = 0;
        $component->BLS_CODE = '';
        $component->save();

        Component::where('ID_COMP', $component->ID_COMP)->update(['COMP_DATE' => $current->toDateTimeString()]);

        if (count($temperatures) > 0) {
            for ($i = 0; $i < count($temperatures); $i++) { 
                $compenth = new Compenth();
                $compenth->ID_COMP = $component->ID_COMP;
                $compenth->COMPTEMP = floatval($temperatures[$i]['temperature']);
                $compenth->COMPENTH = 0;
                $compenth->COMPCOND = 0;
                $compenth->COMPDENS = 0;
                $compenth->save();
            }
        }

        $languages = Language::all();

        for ($i = 0; $i < count($languages); $i++) {
            $translation = new Translation();
            $translation->TRANS_TYPE = 1;
            $translation->ID_TRANSLATION = $component->ID_COMP;
            $translation->LABEL = $COMP_NAME;
            $translation->CODE_LANGUE = $languages[$i]->CODE_LANGUE;
            $translation->save();
        }

        return 1;
    }

    public function getMinMax($limitItem) 
    {
        return MinMax::where('LIMIT_ITEM', $limitItem)->first();
    }
}