<?php
$conn = null;
$conn = checkDbConnection();

$movies = new Movies($conn);

if (array_key_exists("moviesid", $_GET)) {
    checkEndpoint();
}

checkPayload($data);

$movies->movies_title = checkIndex($data, "movies_title");
$movies->movies_year = checkIndex($data, "movies_year");
$movies->movies_genre = checkIndex($data, "movies_genre");
$movies->movies_rating = checkIndex($data, "movies_rating");
$movies->movies_duration = checkIndex($data, "movies_duration");
$movies->movies_summary = checkIndex($data, "movies_summary");
$movies->movies_cast = checkIndex($data, "movies_cast");
$movies->movies_image = checkIndex($data, "movies_image");
$movies->movies_category = checkIndex($data, "movies_category");



$movies->movies_is_active = 1;
$movies->movies_created = date("Y-m-d H:i:s");
$movies->movies_datetime = date("Y-m-d H:i:s");


isNameExist($movies, $movies->movies_title);

$query = checkCreate($movies);
returnSuccess($movies, "movies", $query);