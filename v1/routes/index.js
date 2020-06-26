/**
 * Author: Abdullah Najjar
 * Date: 25 June, 2020
 * Description: To embed all routes of the application in here
 * filename: index.js
 */

var express = require("express");
var router = express.Router();


/**
 *  This route is for the landing page
 */
router.get("/", (req, res) => {
    res.render("landing");
});


/**
 *  This route is for filling the form
 */
router.get("/login", (req, res) => {
    res.render("login");
});



/**
 *  This route is for filling the form
 */
router.get("/signup", (req, res) => {
    res.render("signup");
});



/**
 *  This route is for filling the form
 */
router.get("/form", (req, res) => {
    res.render("form");
});

/**
 *  This route is generated to show the results of analyzing the form
 */
router.get("/results", (req, res) => {
    res.render("results");
});

/**
 * To post the information from the form to the results page
 */
router.post("", (req, res) => {
    res.send("yes!");
});


module.exports = router;