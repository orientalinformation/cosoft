<?php

/**
 * GET getComponentTranslations
 * Summary: 
 * Notes: 
 * Output-Formats: [application/json]
 */
$router->GET('/api/v1/translations/{lang}/components', 'Api1\\Translations@getComponentTranslations');