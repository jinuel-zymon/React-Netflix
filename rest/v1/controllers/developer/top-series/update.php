<?php

$conn = null;
$conn = checkDbConnection();
$topseries = new TopSeries($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("topseriesid", $_GET)) {
    checkPayload($data);

    $topseries->topseries_aid = $_GET['topseriesid'];
    $topseries->topseries_title = checkIndex($data, "topseries_title");
    $topseries->topseries_year = checkIndex($data, "topseries_year");
    $topseries->topseries_genre = checkIndex($data, "topseries_genre");
    $topseries->topseries_rating = checkIndex($data, "topseries_rating");
    $topseries->topseries_duration = checkIndex($data, "topseries_duration");
    $topseries->topseries_summary = checkIndex($data, "topseries_summary");
    $topseries->topseries_cast = checkIndex($data, "topseries_cast");
    $topseries->topseries_image = checkIndex($data, "topseries_image");
    $topseries->topseries_ranking = checkIndex($data, "topseries_ranking");
    $topseries->topseries_datetime = date("Y-m-d H:i:s");
    
    $topseries_title_old = strtolower($data["topseries_title_old"]);

    checkId($topseries->topseries_aid);

    compareName($topseries, $topseries_title_old, $topseries->topseries_title);

    $query = checkUpdate($topseries);
    returnSuccess($topseries, "topseries", $query);
}

checkEndpoint();

