<?php

/**
 * GET getMeshView
 * Summary: 
 * Notes: get mesh view of product
 * Output-Formats: [application/json]
 */
$router->GET('/api/v1/products/{id}/meshView', 'Api1\\Products@getMeshView');

/**
 * PATCH saveStudy
 * Summary:
 * Notes:
 * Output-Formats: [application/json]
 */
$router->PATCH('/api/v1/studies/{id}', 'Api1\\Studies@saveStudy');

/**
 * PATCH saveProduction
 * Summary:
 * Notes:
 * Output-Formats: [application/json]
 */
$router->PATCH('/api/v1/productions/{id}', 'Api1\\Productions@saveProduction');