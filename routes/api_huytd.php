<?php
/**
 * GET findLines
 * Summary: 
 * Notes: Get a list of line
 * Output-Formats: [application/json]
 */
$router->GET('/api/v1/lines/{id}/getListLine', 'Api1\\Lines@loadPipeline');

/**
 * PUT savePipeline
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
$router->POST('/api/v1/lines/saveLines', 'Api1\\Lines@savePipelines');

/**
 * GET filterRef
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
$router->GET('/api/v1/translations/filterRef', 'Api1\\Translations@filterRef');

/**
 * GET filterTrans
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
$router->GET('/api/v1/translations/filterTrans', 'Api1\\Translations@filterTrans');

/**
 * POST changeLabels
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
$router->POST('/api/v1/translations/update', 'Api1\\Translations@changeLabels');



