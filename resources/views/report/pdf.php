<?php
$filename = '439.pdf';
$file = 'reports/31/' . $filename;
$pdf = base64_encode(file_get_contents($file));
$data = base64_decode($pdf);
header('Content-Type: application/pdf');
echo $data;
?>