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

/**
 * GET equipment by id
 * Summary: 
 * Notes: get head balance result
 * Output-Formats: [application/json]
 */
$router->GET('/api/v1/referencedata/equipment/{id}', 'Api1\\EquipmentReference@getEquipment');