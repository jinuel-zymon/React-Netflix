<?php
$conn = null;
$conn = checkDbConnection();

$genre = new Genre($conn);

if (array_key_exists("genreid", $_GET)) {
    checkEndpoint();
}

checkPayload($data);

$genre->genre_title = checkIndex($data, "genre_title");
$genre->genre_is_active = 1;
$genre->genre_created = date("Y-m-d H:i:s");
$genre->genre_datetime = date("Y-m-d H:i:s");


isNameExist($genre, $genre->genre_title);

$query = checkCreate($genre);
returnSuccess($genre, "genre", $query);