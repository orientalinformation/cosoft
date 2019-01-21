<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Factory as Auth;

class Authenticate
{
    /**
     * The authentication guard factory instance.
     *
     * @var \Illuminate\Contracts\Auth\Factory
     */
    protected $auth;

    /**
     * Create a new middleware instance.
     *
     * @param  \Illuminate\Contracts\Auth\Factory  $auth
     * @return void
     */
    public function __construct(Auth $auth)
    {
        $this->auth = $auth;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        $xsrfToken = $request->header('X-XSRF-TOKEN');
        if ($this->auth->guard($guard)->guest()) {
            return response('Unauthorized.', 401);
        }

        if (getenv('APP_ENV') != 'local' && empty($xsrfToken)) {
            return response('Unauthorized.', 401);
        }

        $response = $next($request);
        // $response->headers->set('X-Frame-Options', 'SAMEORIGIN', false);
        return $response;
    }
}
