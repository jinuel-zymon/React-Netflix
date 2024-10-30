<?php
$conn = null;
$conn = checkDbConnection();
$topmovies = new TopMovies($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("topmoviesid", $_GET)) {
    $topmovies->topmovies_aid = $_GET['topmoviesid'];
    checkId($topmovies->topmovies_aid);
    $query = checkReadById($topmovies);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($topmovies);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
