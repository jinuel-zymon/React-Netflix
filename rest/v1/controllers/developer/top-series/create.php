<?php
$conn = null;
$conn = checkDbConnection();

$topseries = new TopSeries($conn);

if (array_key_exists("topseriesid", $_GET)) {
    checkEndpoint();
}

checkPayload($data);

$topseries->topseries_title = checkIndex($data, "topseries_title");
$topseries->topseries_year = checkIndex($data, "topseries_year");
$topseries->topseries_genre = checkIndex($data, "topseries_genre");
$topseries->topseries_rating = checkIndex($data, "topseries_rating");
$topseries->topseries_duration = checkIndex($data, "topseries_duration");
$topseries->topseries_summary = checkIndex($data, "topseries_summary");
$topseries->topseries_cast = checkIndex($data, "topseries_cast");
$topseries->topseries_image = checkIndex($data, "topseries_image");
$topseries->topseries_ranking = checkIndex($data, "topseries_ranking");



$topseries->topseries_is_active = 1;
$topseries->topseries_created = date("Y-m-d H:i:s");
$topseries->topseries_datetime = date("Y-m-d H:i:s");


isNameExist($topseries, $topseries->topseries_title);

$query = checkCreate($topseries);
returnSuccess($topseries, "topseries", $query);