<?php
$conn = null;
$conn = checkDbConnection();
$genre = new Genre($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("genreid", $_GET)) {
    $genre->genre_aid = $_GET['genreid'];
    checkId($genre->genre_aid);
    // isAssociated($genre);
    $query = checkDelete($genre);
    returnSuccess($genre, "genre", $query);
}

checkEndpoint();

