<?php

require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/Movies.php';

$conn = null;
$conn = checkDbConnection();
$movies = new Movies($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

$error = [];
$returnData = [];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("moviesid", $_GET)) {

        checkPayload($data);
        $movies->movies_aid = $_GET['moviesid'];
        $movies->movies_is_active = trim($data["isActive"]);
        $movies->movies_datetime = date("Y-m-d H:i:s");

        checkId($movies->movies_aid);
        $query = checkActive($movies);
        http_response_code(200);
        returnSuccess($movies, "movies", $query);
    }

    checkEndpoint();
}

http_response_code(200);
checkAccess();

