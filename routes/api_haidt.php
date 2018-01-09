<?php
/**
 * GET getFamilyTranslations
 * Summary:
 * Notes: get list family
 * Output-Formats: [application/json]
 */
$router->GET('/api/v1/referencedata/{lang}/family', 'Api1\\ReferenceData@getFamilyTranslations');