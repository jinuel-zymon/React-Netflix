<?php
$conn = null;
$conn = checkDbConnection();
$genre = new Genre($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("genreid", $_GET)) {
    $genre->genre_aid = $_GET['genreid'];
    checkId($genre->genre_aid);
    $query = checkReadById($genre);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($genre);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
