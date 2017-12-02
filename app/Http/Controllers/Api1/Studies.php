<?php

namespace App\Http\Controllers\Api1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Factory as Auth;

class Studies extends Controller
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

    //
    public function findStudies()
    {
        $studies = $this->auth->user()->studies;
        return $studies;
    }

    public function deleteStudyById($id)
    {

    }

    public function getStudyById($id)
    {
        $study = \App\Models\Study::find($id);
        return $study;
    }
}
