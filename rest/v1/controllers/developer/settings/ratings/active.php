<?php

require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/settings/Ratings.php';

$conn = null;
$conn = checkDbConnection();
$ratings = new Ratings($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

$error = [];
$returnData = [];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("ratingsid", $_GET)) {

        checkPayload($data);
        $ratings->ratings_aid = $_GET['ratingsid'];
        $ratings->ratings_is_active = trim($data["isActive"]);
        $ratings->ratings_datetime = date("Y-m-d H:i:s");

        checkId($ratings->ratings_aid);
        $query = checkActive($ratings);
        http_response_code(200);
        returnSuccess($ratings, "ratings", $query);
    }

    checkEndpoint();
}

http_response_code(200);
checkAccess();

