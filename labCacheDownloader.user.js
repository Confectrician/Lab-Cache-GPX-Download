// ==UserScript==
// @name        Lab GPX Download
// @author      Jerome Luckenbach
// @namespace   confectrician.de
// @description Adds a Download Button to Geocaching Lab Pages to easily downlad the gpx files
// @include     https://labs.geocaching.com/Adventures/Details/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @version     1.0
// @grant       none
// ==/UserScript==

$(function(){
    /*
     * Get current Path and extract Lab guid
     */
    pathName = window.location.pathname;
    pathValues = pathName.split("/");
    downloadPath = "/Adventures/DetailsAsGPX/" + pathValues[3];

    /*
     * Move existing Link to the Left
     */
    $('#leaderboard').css({
        "margin-right" : "0px",
        "padding-right": "9px",
        "padding-left" : "9px",
        "right"        : "206px"
    });

    /*
     * Create Download Link
     */
    $('#leaderboard').parent().append(
        '<a id="dl_link" class="link-leaderboard" href="' + downloadPath + '" style="padding-left: 9px;">Download‌ as‌ GPX‌ File</a>'
    );
});