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
        $array = [
            'productFamily' => $productFamily,
        ];

        return $array;
    }
}