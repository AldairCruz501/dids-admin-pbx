<?php
$token = 'Bearer inb-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnQUFBQUFCb05rVEdnRGpUOHNHWmpnOFBSeXRFa1lvYlJSQThsbzIySWd1S3JkYldGVDdHMHk5d2xOdUNhNGdwQU9TcGd2WU5VQ3p5UEdyeUozTWIxNTE2cjJablI0QmlXUT09Iiwid2htY3MiOiJnQUFBQUFCb05rVEdfUEQyRlJRMHQ3WVJDZkg0bFdZNHl0b3podDZDUDNUYUtQdDhuYjh6VkNmVkxrNlhybnBjei1aRGpTU25RaUROLVJXRm12Vm1sSHNLb011SllxYUU1UT09IiwiaWF0IjoxNzQ4MzY1NDE0fQ.hP6K36wuE3ric0T641hCb4OPuu_aNCV5brQP0y39R2U'; // Usa el token completo

// Reenvía los parámetros
$params = http_build_query($_GET);
$url = "https://api.cero208.mx/did?$params";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
  "Authorization: $token",
  "Accept: application/json"
]);
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

http_response_code($httpCode);
header('Content-Type: application/json');
echo $response;
