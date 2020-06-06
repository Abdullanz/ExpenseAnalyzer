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