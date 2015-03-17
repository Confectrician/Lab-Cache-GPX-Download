// ==UserScript==
// @name        Lab GPX Download
// @author      Jerome Luckenbach
// @namespace   confectrician.de
// @description Adds a Download Button to Geocaching Lab Pages to easily downlad the gpx files
// @include     https://labs.geocaching.com/Adventures/Details/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @updateURL   https://greasyfork.org/scripts/8624-lab-gpx-download/code/Lab%20GPX%20Download.user.js
// @version     1.1
// @grant       none
// ==/UserScript==

$(function(){
    /*
     * removing -> background-image: -moz-linear-gradient(left center , rgba(157, 178, 81, 0) 0%, #9db251 100%);
     * This gets a clearer view, if more than one Navigation Button is Displayed
     */
    document.styleSheets[1].cssRules[384].style['background-image'] = "none";

    /*
     * Example Path for Site      /Adventures/Details/90ced6d4-0a22-4c19-a491-7ae17d489c60
     * Example Path for Download  /Adventures/DetailsAsGPX/90ced6d4-0a22-4c19-a491-7ae17d489c60
     *
     * Get current Path with GUID and create download Path
     */
    pathName = window.location.pathname;
    pathValues = pathName.split("/");
    downloadPath = "/Adventures/DetailsAsGPX/" + pathValues[3];

    /*
     * Move existing Leaderboard Button to the left
     */
    $('#leaderboard').css({
        "margin-right" : "0px",
        "padding-right": "9px",
        "padding-left" : "9px",
        "right"        : "184px"
    });

    /*
     * Create new Button with Download Link
     */
    $('#leaderboard').parent().append(
        '<a id="dl_link" class="link-leaderboard" href="' + downloadPath + '" style="padding-left: 9px;">Download‌ as‌ GPX‌ File</a>'
    );
});