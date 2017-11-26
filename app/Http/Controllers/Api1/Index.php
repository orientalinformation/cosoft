<?php

namespace App\Http\Controllers\Api1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class Index extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request)
    {
        $this->input = $request->all();
    }

    //

    public function hello() {
        return [ 'message' => 'Hello '.$this->input['name'] . ' !'];
    }
}
