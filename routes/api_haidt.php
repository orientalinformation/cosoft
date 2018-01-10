<?php
/**
 * GET getFamilyTranslations
 * Summary:
 * Notes: get list family
 * Output-Formats: [application/json]
 */
$router->GET('/api/v1/referencedata/{lang}/family', 'Api1\\ReferenceData@getFamilyTranslations');

/**
 * GET getUsers
 * Summary:
 * Notes: get list user
 * Output-Formats: [application/json]
 */
$router->GET('/api/v1/admin/loadusers', 'Api1\\Admin@loadUsers');

/**
 * GET getConnectionUsers
 * Summary:
 * Notes: get list connection user
 * Output-Formats: [application/json]
 */
$router->GET('/api/v1/admin/{iduser}/loadconnectusers', 'Api1\\Admin@loadConnectUsers');

/**
 * GET deleteUser
 * Summary:
 * Notes: delete User
 * Output-Formats: [application/json]
 */
$router->DELETE('/api/v1/admin/{iduser}/delete', 'Api1\\Admin@deleteUser');

/**
 * GET updateUser
 * Summary:
 * Notes: update User
 * Output-Formats: [application/json]
 */
$router->PUT('/api/v1/admin/users', 'Api1\\Admin@updateUser');