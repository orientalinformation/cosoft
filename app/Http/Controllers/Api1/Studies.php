<?php

namespace App\Http\Controllers\Api1;

use App\Http\Controllers\Controller;

class Studies extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    //
    public function findStudies()
    {
        return ['studies'=>[]];
    }

    public function deleteStudyById($id)
    {

    }

    public function getStudyById($id)
    {

    }
}
