<?php
$conn = null;
$conn = checkDbConnection();
$topseries = new TopSeries($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("topseriesid", $_GET)) {
    $topseries->topseries_aid = $_GET['topseriesid'];
    checkId($topseries->topseries_aid);
    // isAssociated($topseries);
    $query = checkDelete($topseries);
    returnSuccess($topseries, "topseries", $query);
}

checkEndpoint();

