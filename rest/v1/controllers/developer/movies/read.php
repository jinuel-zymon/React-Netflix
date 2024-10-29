<?php
$conn = null;
$conn = checkDbConnection();
$movies = new Movies($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("moviesid", $_GET)) {
    $movies->movies_aid = $_GET['moviesid'];
    checkId($movies->movies_aid);
    $query = checkReadById($movies);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($movies);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
