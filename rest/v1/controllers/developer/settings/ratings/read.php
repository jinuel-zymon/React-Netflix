<?php
$conn = null;
$conn = checkDbConnection();
$ratings = new Ratings($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("ratingsid", $_GET)) {
    $ratings->ratings_aid = $_GET['ratingsid'];
    checkId($ratings->ratings_aid);
    $query = checkReadById($ratings);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($ratings);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
