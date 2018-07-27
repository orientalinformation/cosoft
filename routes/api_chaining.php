<?php

/**
 * GET all chaining
 * Summary: 
 * Notes: get head balance result
 * Output-Formats: [application/json]
 */
$router->GET('/api/v1/chaining/{id}', 'Api1\\Chaining@getAllChaining');

/**
 * GET all chaining
 * Summary: 
 * Notes: get head balance result
 * Output-Formats: [application/json]
 */
$router->GET('/api/v1/chaining/overview/{id}', 'Api1\\Chaining@getOverViewChaining');