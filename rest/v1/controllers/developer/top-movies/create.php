<?php
$conn = null;
$conn = checkDbConnection();

$topmovies = new TopMovies($conn);

if (array_key_exists("topmoviesid", $_GET)) {
    checkEndpoint();
}

checkPayload($data);

$topmovies->topmovies_title = checkIndex($data, "topmovies_title");
$topmovies->topmovies_year = checkIndex($data, "topmovies_year");
$topmovies->topmovies_genre = checkIndex($data, "topmovies_genre");
$topmovies->topmovies_rating = checkIndex($data, "topmovies_rating");
$topmovies->topmovies_duration = checkIndex($data, "topmovies_duration");
$topmovies->topmovies_summary = checkIndex($data, "topmovies_summary");
$topmovies->topmovies_cast = checkIndex($data, "topmovies_cast");
$topmovies->topmovies_image = checkIndex($data, "topmovies_image");
$topmovies->topmovies_ranking = checkIndex($data, "topmovies_ranking");



$topmovies->topmovies_is_active = 1;
$topmovies->topmovies_created = date("Y-m-d H:i:s");
$topmovies->topmovies_datetime = date("Y-m-d H:i:s");


isNameExist($topmovies, $topmovies->topmovies_title);

$query = checkCreate($topmovies);
returnSuccess($topmovies, "topmovies", $query);