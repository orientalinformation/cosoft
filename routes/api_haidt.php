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
$router->GET('/api/v1/admin/users', 'Api1\\Admin@getUsers');

/**
 * PUT add user
 * Summary:
 * Notes: add user
 * Output-Formats: [application/json]
 */
$router->PUT('/api/v1/admin/users', 'Api1\\Admin@newUser');

/**
 * POST updateUser
 * Summary:
 * Notes: update User
 * Output-Formats: [number]
 */
$router->POST('/api/v1/admin/users/{id}', 'Api1\\Admin@updateUser');

/**
 * GET deleteUser
 * Summary:
 * Notes: delete User
 * Output-Formats: [number]
 */
$router->DELETE('/api/v1/admin/users/{id}', 'Api1\\Admin@deleteUser');

/**
 * GET getConnectionUsers
 * Summary:
 * Notes: get list connection user
 * Output-Formats: [application/json]
 */
$router->GET('/api/v1/admin/connections/users', 'Api1\\Admin@loadConnectUsers');

/**
 * POST disconnectUser
 * Summary:
 * Notes: disconnect User
 * Output-Formats: [number]
 */
$router->POST('/api/v1/admin/connections/{id}', 'Api1\\Admin@disconnectUser');

/**
 * POST disconnectUser
 * Summary:
 * Notes: disconnect User
 * Output-Formats: [number]
 */
$router->GET('/api/v1/admin/connections', 'Api1\\Admin@loadConnections');


