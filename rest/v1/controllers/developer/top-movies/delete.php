<?php
$conn = null;
$conn = checkDbConnection();
$topmovies = new TopMovies($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("topmoviesid", $_GET)) {
    $topmovies->topmovies_aid = $_GET['topmoviesid'];
    checkId($topmovies->topmovies_aid);
    // isAssociated($topmovies);
    $query = checkDelete($topmovies);
    returnSuccess($topmovies, "topmovies", $query);
}

checkEndpoint();

