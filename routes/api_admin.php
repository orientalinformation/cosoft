<?php

/**
 * GET all is admin
 * Summary: 
 * Notes: get head balance result
 * Output-Formats: [application/json]
 */
$router->GET('/api/v1/admin/check', 'Api1\\Admin@checkIsAdmin');

/**
 * GET current user
 * Summary: 
 * Notes: get head balance result
 * Output-Formats: [application/json]
 */
$router->GET('/api/v1/user/current', 'Api1\\Users@getCurrentUser');