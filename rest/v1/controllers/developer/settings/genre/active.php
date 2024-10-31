<?php

require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/settings/Genre.php';

$conn = null;
$conn = checkDbConnection();
$genre = new Genre($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

$error = [];
$returnData = [];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("genreid", $_GET)) {

        checkPayload($data);
        $genre->genre_aid = $_GET['genreid'];
        $genre->genre_is_active = trim($data["isActive"]);
        $genre->genre_datetime = date("Y-m-d H:i:s");

        checkId($genre->genre_aid);
        $query = checkActive($genre);
        http_response_code(200);
        returnSuccess($genre, "genre", $query);
    }

    checkEndpoint();
}

http_response_code(200);
checkAccess();

