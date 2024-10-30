<?php

$conn = null;
$conn = checkDbConnection();
$topmovies = new TopMovies($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("topmoviesid", $_GET)) {
    checkPayload($data);

    $topmovies->topmovies_aid = $_GET['topmoviesid'];
    $topmovies->topmovies_title = checkIndex($data, "topmovies_title");
    $topmovies->topmovies_year = checkIndex($data, "topmovies_year");
    $topmovies->topmovies_genre = checkIndex($data, "topmovies_genre");
    $topmovies->topmovies_rating = checkIndex($data, "topmovies_rating");
    $topmovies->topmovies_duration = checkIndex($data, "topmovies_duration");
    $topmovies->topmovies_summary = checkIndex($data, "topmovies_summary");
    $topmovies->topmovies_cast = checkIndex($data, "topmovies_cast");
    $topmovies->topmovies_image = checkIndex($data, "topmovies_image");
    $topmovies->topmovies_category = checkIndex($data, "topmovies_category");
    $topmovies->topmovies_datetime = date("Y-m-d H:i:s");
    
    $topmovies_title_old = strtolower($data["topmovies_title_old"]);

    checkId($topmovies->topmovies_aid);

    compareName($topmovies, $topmovies_title_old, $topmovies->topmovies_title);

    $query = checkUpdate($topmovies);
    returnSuccess($topmovies, "topmovies", $query);
}

checkEndpoint();

