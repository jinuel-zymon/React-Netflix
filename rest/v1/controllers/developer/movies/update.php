<?php

$conn = null;
$conn = checkDbConnection();
$movies = new Movies($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("moviesid", $_GET)) {
    checkPayload($data);

    $movies->movies_aid = $_GET['moviesid'];
    $movies->movies_title = checkIndex($data, "movies_title");
    $movies->movies_year = checkIndex($data, "movies_year");
    $movies->movies_genre = checkIndex($data, "movies_genre");
    $movies->movies_rating = checkIndex($data, "movies_rating");
    $movies->movies_duration = checkIndex($data, "movies_duration");
    $movies->movies_summary = checkIndex($data, "movies_summary");
    $movies->movies_cast = checkIndex($data, "movies_cast");
    $movies->movies_image = checkIndex($data, "movies_image");
    $movies->movies_category = checkIndex($data, "movies_category");
    $movies->movies_datetime = date("Y-m-d H:i:s");
    
    $movies_title_old = strtolower($data["movies_title_old"]);

    checkId($movies->movies_aid);

    compareName($movies, $movies_title_old, $movies->movies_title);

    $query = checkUpdate($movies);
    returnSuccess($movies, "movies", $query);
}

checkEndpoint();

