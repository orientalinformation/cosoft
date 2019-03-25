<?php

/**
 * GET all is admin
 * Summary: 
 * Notes: get head balance result
 * Output-Formats: [application/json]
 */
$router->GET('/api/v1/info/o', 'Api1\\Admin@checkIsAdmin');

/**
 * GET current user
 * Summary: 
 * Notes: get head balance result
 * Output-Formats: [application/json]
 */
$router->GET('/api/v1/user/current', 'Api1\\Users@getCurrentUser');

/**
 * GET current token
 * Summary: 
 * Notes: get head balance result
 * Output-Formats: [application/json]
 */
$router->GET('/api/v1/login/tokens', 'Api1\\Admin@getcurrentToken');