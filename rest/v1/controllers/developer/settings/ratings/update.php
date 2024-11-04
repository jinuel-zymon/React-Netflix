<?php

$conn = null;
$conn = checkDbConnection();
$ratings = new Ratings($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("ratingsid", $_GET)) {
    checkPayload($data);

    $ratings->ratings_aid = $_GET['ratingsid'];
    $ratings->ratings_title = checkIndex($data, "ratings_title");
    $ratings->ratings_datetime = date("Y-m-d H:i:s");    
    $ratings_title_old = strtolower($data["ratings_title_old"]);

    checkId($ratings->ratings_aid);

    compareName($ratings, $ratings_title_old, $ratings->ratings_title);

    $query = checkUpdate($ratings);
    returnSuccess($ratings, "ratings", $query);
}

checkEndpoint();

