<?php

/**
 * GET all is admin
 * Summary: 
 * Notes: get head balance result
 * Output-Formats: [application/json]
 */
$router->GET('/api/v1/admin/check', 'Api1\\Admin@checkIsAdmin');