<?php

require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/TopSeries.php';

$conn = null;
$conn = checkDbConnection();
$topseries = new TopSeries($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

$error = [];
$returnData = [];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("topseriesid", $_GET)) {

        checkPayload($data);
        $topseries->topseries_aid = $_GET['topseriesid'];
        $topseries->topseries_is_active = trim($data["isActive"]);
        $topseries->topseries_datetime = date("Y-m-d H:i:s");

        checkId($topseries->topseries_aid);
        $query = checkActive($topseries);
        http_response_code(200);
        returnSuccess($topseries, "topseries", $query);
    }

    checkEndpoint();
}

http_response_code(200);
checkAccess();

