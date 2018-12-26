<?php
/**
 * POST downLoadPDF
 * Summary: 
 * Notes: 
 * Output-Formats:
 */
$router->POST('/api/v1/reports/{id}/downLoadPDF', 'Api1\\Reports@downLoadPDF');

/**
 * POST downLoadHtmlToPDF
 * Summary: 
 * Notes: 
 * Output-Formats: 
 */
$router->POST('/api/v1/reports/{id}/downLoadHtmlToPDF', 'Api1\\Reports@downLoadHtmlToPDF');

/**
 * GET processingReport
 * Summary: 
 * Notes: 
 * Output-Formats: 
 */
$router->GET('/api/v1/reports/{id}/processingReport', 'Api1\\Reports@processingReport');

