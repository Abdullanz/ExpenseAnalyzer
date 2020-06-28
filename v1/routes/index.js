/**
 * Author: Abdullah Najjar
 * Date: 25 June, 2020
 * Description: To embed all routes of the application in here
 * filename: index.js
 */

var express = require("express");
var passport = require("passport");
var router = express.Router();


/**
 *  This route is for the Landing page
 */
router.get("/", (req, res) => {
    res.render("landing");
});


/**
 *  This route is for the Login page
 */
router.get("/login", (req, res) => {
    res.render("login");
});


/**
 *  This route is for handling Login logic
 */
router.post("/login", passport.authenticate("local", {
    successRedirect: "/form",
    failureRedirect: "/login"
}), function(req, res) {

});

/**
 *  This route is for Register page
 */
router.get("/register", (req, res) => {
    res.render("register");
});

/**
 *  This route is for Register logic
 */
router.post("/register", function(req, res) {
    var newUser = new User({ username: req.body.username });
    User.register(newUser, req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function() {
            res.redirect("/form");
        });
    });
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