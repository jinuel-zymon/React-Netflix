<?php
$conn = null;
$conn = checkDbConnection();
$movies = new Movies($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("moviesid", $_GET)) {
    $movies->movies_aid = $_GET['moviesid'];
    checkId($movies->movies_aid);
    // isAssociated($movies);
    $query = checkDelete($movies);
    returnSuccess($movies, "movies", $query);
}

checkEndpoint();

