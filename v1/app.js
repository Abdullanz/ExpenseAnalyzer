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
var port = 3000;


var indexRoutes = require("./routes/index");

/**
 *  Init the setup
 */
app.use(indexRoutes);
app.use(bodyParser.urlencoded({ extended: true })); //To set up body parser
app.set("view engine", "ejs"); //To setup the ejs file types
app.use(express.static(__dirname + "/public")); //To access styling sheets



//For debugging
var cl = console.log.bind(console); //shortens the debugging process a bit :)


/**
 *  To init the server
 */
app.listen(port, () => {
    cl("Server has started!");
});