<?php

namespace App\Http\Controllers\Api1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\JWTAuth;
use App\Models\Connection;
use App\Models\User;
use App\Models\FailedLogins;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use App\Models\Tokens;

class Auth extends Controller
{
    /**
     * @var \Tymon\JWTAuth\JWTAuth
     */
    protected $jwt;

    /**
     * @var \Illuminate\Contracts\Auth\Factory
     */
    protected $auth;

    public function __construct(JWTAuth $jwt, \Illuminate\Contracts\Auth\Factory $auth)
    {
        $this->jwt = $jwt;
        $this->auth = $auth;
    }

    public function login(Request $request)
    {
        $this->validate($request, [
            'username'    => 'required|max:255',
            'password' => 'required',
        ]);

        $username = $request['username'];
        $countFailLogin = 0;
        $user = User::where('USERNAM', $username)->first();
        if ($user) {
            // $userFailedLogin = FailedLogins::where('ID_USER', $user->ID_USER)->where('IP_ADDRESS', $request->ip())->orderBy('ID_FAILED_LOGINS', 'DESC')->first();
            $userFailedLogin = FailedLogins::where('ID_USER', $user->ID_USER)->orderBy('ID_FAILED_LOGINS', 'DESC')->first();
            if ($userFailedLogin) {
                if ($userFailedLogin->FAILDED_COUNT < 5) {
                    $timeAttemp = $userFailedLogin->ATTEMPTED + pow(3, $userFailedLogin->FAILDED_COUNT) - time();
                } else {
                    $timeAttemp = $userFailedLogin->ATTEMPTED + 86400 - time();
                }

                if ($timeAttemp > 0) {
                    return response()->json(['Too much connection attempt. Please try again in '. $timeAttemp .' seconds.'], 429);
                }
            }
        }

        try {
            if (! $token = $this->jwt->attempt($request->only('username', 'password'))) {
                if ($user) {
                    $failedCount = 1;
                    // $failedLoginLast = FailedLogins::where('ID_USER', $user->ID_USER)->where('IP_ADDRESS', $request->ip())->orderBy('ID_FAILED_LOGINS', 'DESC')->first();
                    $failedLoginLast = FailedLogins::where('ID_USER', $user->ID_USER)->orderBy('ID_FAILED_LOGINS', 'DESC')->first();
                    if ($failedLoginLast) $failedCount = $failedLoginLast->FAILDED_COUNT + 1;
                    $failedLogin = new FailedLogins();
                    $failedLogin->IP_ADDRESS = $request->ip();
                    $failedLogin->ID_USER = $user->ID_USER;
                    $failedLogin->ATTEMPTED = time();
                    $failedLogin->FAILDED_COUNT = $failedCount;
                    $failedLogin->save();
                }

                return response()->json(['Username or Password is incorrect'], 404);
            }
        } catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['token_expired'], 500);
        } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['token_invalid'], 500);
        } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['token_absent' => $e->getMessage()], 500);
        }

        $connection = Connection::where('ID_USER', $this->auth->user()->ID_USER)
                        ->where('TYPE_DISCONNECTION', 0)->first();
        // if ($connection) {
        //     return response()->json(['User already connected'], 404);
        // }
        
        $current = Carbon::now();
        $current->timezone = 'Asia/Ho_Chi_Minh';

        $user = $this->auth->user();
        if ($user) {
            // reset count faild login
            $failedLoginLast = FailedLogins::where('ID_USER', $user->ID_USER)->where('IP_ADDRESS', $request->ip())->orderBy('ID_FAILED_LOGINS', 'DESC')->first();
            if ($failedLoginLast) {
                $failedLoginLast->FAILDED_COUNT = 0;
                $failedLoginLast->save();
            }

            $user->USERMAIL = null;
            $user->USERPRIO = null;

            $connection = new Connection();
            $connection->ID_USER = $user->ID_USER;
            $connection->DATE_CONNECTION = $current->toDateTimeString();
            $connection->DATE_DISCONNECTION = null;
            $connection->TYPE_DISCONNECTION = 0;
            $connection->save();
        }

        // add new table tokens
        $tokens = Tokens::where('ID_USER', $this->auth->user()->ID_USER)->first();
        if ($tokens) {
            $tokens->ID_USER = $this->auth->user()->ID_USER;
            $tokens->TOKEN = $token;
            $tokens->TYPE = 1;
            $tokens->save();
        } else {
            $tokens = new Tokens();
            $tokens->ID_USER = $this->auth->user()->ID_USER;
            $tokens->TOKEN = $token;
            $tokens->TYPE = 1;
            $tokens->save();
        }

        return response()->json(compact('token','user'));
    }

    public function logout()
    {
        $connections = null;
        $current = Carbon::now();
        $current->timezone = 'Asia/Ho_Chi_Minh';

        if ($this->auth->user()) {
            $connections = Connection::where('ID_USER', $this->auth->user()->ID_USER)
                            ->where('TYPE_DISCONNECTION', 0)->get();
        }

        if (count($connections) > 0) {
            foreach ($connections as $connection) {
                $connection->DATE_DISCONNECTION = $current->toDateTimeString();
                $connection->TYPE_DISCONNECTION = 2;
                $connection->update();
            }
        }

        if ($this->auth->user()) {
            $token = Tokens::where('ID_USER', $this->auth->user()->ID_USER)->first();
            if ($token) {
                $token->TOKEN = '';
                $token->TYPE = 0;
                $token->save();
            }
        }
    }
}
