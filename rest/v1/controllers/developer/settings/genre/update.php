<?php

$conn = null;
$conn = checkDbConnection();
$genre = new Genre($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("genreid", $_GET)) {
    checkPayload($data);

    $genre->genre_aid = $_GET['genreid'];
    $genre->genre_title = checkIndex($data, "genre_title");
    $genre->genre_datetime = date("Y-m-d H:i:s");    
    $genre_title_old = strtolower($data["genre_title_old"]);

    checkId($genre->genre_aid);

    compareName($genre, $genre_title_old, $genre->genre_title);

    $query = checkUpdate($genre);
    returnSuccess($genre, "genre", $query);
}

checkEndpoint();

