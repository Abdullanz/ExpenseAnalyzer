/**
 *  File Name: app.js
 *  Description:
 *  Date:
 *  Author: Abdullah Najjar
 * TODO: Add all the libraries needed and setup to the routes.
 */
var express = require("express");
var app = express();
//var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var url = "http://localhost/";
var port = 3000;


/**
 *  Init the setup
 */
app.use(bodyParser.urlencoded({ extended: true })); //To set up body parser
app.set("view engine", "ejs"); //To setup the ejs file types
app.use(express.static(__dirname + "/public")); //To access styling sheets

var cl = console.log.bind(console); //shortens the debugging process a bit :)



/**
 *  This route is for the landing page
 */
app.get("/", function(req, res) {
    res.render("landing");
});


/**
 *  This route is for filling the form
 */
app.get("/form", function(req, res) {
    res.render("form");
});


/**
 *  This route is generated to show the results of analyzing the form
 */
app.get("/result", function(req, res) {
    res.render("results");
});


/**
 * To post the information from the form to the results page
 */
app.post("", function(req, res) {});


/**
 *  To init the server
 */
app.listen(port, function() {
    cl("Server has started!");
});