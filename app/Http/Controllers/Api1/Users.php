<?php

namespace App\Http\Controllers\Api1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Factory as Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class Users extends Controller
{
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

    public function changePassword($id)
    {
        $input = $this->request->all();

        if (!isset($input['oldPass']) || !isset($input['newPass']))
            throw new \Exception("Error Processing Request", 1);

        $oldPass = $input['oldPass'];
        $newPass = $input['newPass'];
        // $hashOldPass = Hash::make($oldPass);
        $hashNewPass = Hash::make($newPass);

        $user = User::find($id);
        // var_dump($user->USERPASS);
        // var_dump($hashOldPass);
        // die;
        if (!Hash::check($oldPass, $user->USERPASS)) {
            return -1;
        }
        User::where('ID_USER', $id)
        ->update(['USERPASS' => $hashNewPass]);

        return 1;
    }
}
