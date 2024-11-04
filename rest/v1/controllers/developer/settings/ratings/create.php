<?php
$conn = null;
$conn = checkDbConnection();

$ratings = new Ratings($conn);

if (array_key_exists("ratingsid", $_GET)) {
    checkEndpoint();
}

checkPayload($data);

$ratings->ratings_title = checkIndex($data, "ratings_title");
$ratings->ratings_is_active = 1;
$ratings->ratings_created = date("Y-m-d H:i:s");
$ratings->ratings_datetime = date("Y-m-d H:i:s");


isNameExist($ratings, $ratings->ratings_title);

$query = checkCreate($ratings);
returnSuccess($ratings, "ratings", $query);