<?php

namespace App\Http\Controllers\Api1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class Translations extends Controller
{
    /**
     * @var Illuminate\Http\Request
     */
    protected $request;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    //

    public function getComponentTranslations($lang)
    {
        $langIds = [
            'en' => 1,
            'fr' => 2,
            'es' => 3,
            'de' => 4,
            'it' => 5
        ];
        $translations = \App\Models\Translation::where('TRANS_TYPE',1)
            ->where('CODE_LANGUE',$langIds[$lang])
            ->get();
        
        // @TODO: Use mutator or other more efficient way to decode the languages
        for ($i=0; $i < $translations->count(); $i++) {
            $translations[$i]->LABEL = \mb_convert_encoding($translations[$i]->LABEL, "UTF-8", "ISO-8859-1");
        }

        return $translations;
    }

    public function getPackingTranslations($lang)
    {
        $langIds = [
            'en' => 1,
            'fr' => 2,
            'es' => 3,
            'de' => 4,
            'it' => 5
        ];
        $translations = \App\Models\Translation::where('TRANS_TYPE',3)
            ->where('CODE_LANGUE',$langIds[$lang])
            ->get();
        
        // @TODO: Use mutator or other more efficient way to decode the languages
        // for ($i=0; $i < $translations->count(); $i++) {
        //     $translations[$i]->LABEL = \mb_convert_encoding($translations[$i]->LABEL, "UTF-8");
        // }

        return $translations;
    }

    public function filterRef() {
        $langIDs = \App\Models\Language::Select('CODE_LANGUE','LANG_NAME')->get();
        foreach ($langIDs as $langID) {
            $referenceLangs[$langID->CODE_LANGUE] = \App\Models\Translation::where('CODE_LANGUE', $langID->CODE_LANGUE)
            ->orderBy('TRANS_TYPE', 'ASC')->get();
        }
        foreach ($langIDs as $langID) {
            $translationLangs[$langID->CODE_LANGUE] = \App\Models\Translation::where('CODE_LANGUE', $langID->CODE_LANGUE)
            ->orderBy('TRANS_TYPE', 'ASC')->get();
        }
        return compact("referenceLangs", "translationLangs", "langIDs"); 
    }

    public function changeLabels() {
        $inputs = $this->request->all();
        // return $inputs;
        foreach ($inputs['translationLangs'] as $input) {
            $langID = $input['CODE_LANGUE'];
            $id_trans = $input['ID_TRANSLATION'];
            $trans_type = $input['TRANS_TYPE'];
            $label = $input['LABEL'];
            $getLabels = \App\Models\Translation::where('CODE_LANGUE', $langID)->where('ID_TRANSLATION', $id_trans)
            ->where('TRANS_TYPE', $trans_type)->first();
            $getLabels->LABEL = $label;
            $getLabels->save();
        }
    }

    public function filterTrans() {
        $input = $this->request->all();
        $id = $input['id'];
        $idtrans = $input['idtrans'];
        $referenceLangs = \App\Models\Translation::where('CODE_LANGUE', $id)->orderBy('TRANS_TYPE', 'ASC')->get();      
        if (count($referenceLangs) > 0) {
            foreach ($referenceLangs as $referenceLang) {
                $translations = \App\Models\Translation::where('ID_TRANSLATION', $referenceLang->ID_TRANSLATION)
                ->where('TRANS_TYPE', $referenceLang->TRANS_TYPE)->where('CODE_LANGUE', $idtrans)->orderBy('TRANS_TYPE', 'ASC')->first();
                // return $translation;
                if ($translations) {
                    $translation[] = $translations;
                } else {
                    $translation[] = $referenceLang;
                }
            }
            return compact("translation", "referenceLangs");
        }
    }
}
