<?php

require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/TopMovies.php';

$conn = null;
$conn = checkDbConnection();
$topmovies = new TopMovies($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

$error = [];
$returnData = [];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("topmoviesid", $_GET)) {

        checkPayload($data);
        $topmovies->topmovies_aid = $_GET['topmoviesid'];
        $topmovies->topmovies_is_active = trim($data["isActive"]);
        $topmovies->topmovies_datetime = date("Y-m-d H:i:s");

        checkId($topmovies->topmovies_aid);
        $query = checkActive($topmovies);
        http_response_code(200);
        returnSuccess($topmovies, "topmovies", $query);
    }

    checkEndpoint();
}

http_response_code(200);
checkAccess();

