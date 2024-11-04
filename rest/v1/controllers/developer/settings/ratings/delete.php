<?php
$conn = null;
$conn = checkDbConnection();
$ratings = new Ratings($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("ratingsid", $_GET)) {
    $ratings->ratings_aid = $_GET['ratingsid'];
    checkId($ratings->ratings_aid);
    // isAssociated($ratings);
    $query = checkDelete($ratings);
    returnSuccess($ratings, "ratings", $query);
}

checkEndpoint();

