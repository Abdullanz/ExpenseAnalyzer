/**
 * Author: Abdullah Najjar
 * Date: 25 June, 2020
 * Description: To embed all routes of the application in here
 * filename: index.js
 */

var express = require("express");
var passport = require("passport");
var middleware = require("../middleware");
var User = require("../models/user");
var Report = require("../models/report");
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
 *  This route is for the form
 */
router.get("/form", middleware.isLoggedIn, (req, res) => {
    res.render("form");
});

/**
 *  CREATE - add new report to DB
 */
router.post("/form", middleware.isLoggedIn, (req, res) => {
    //need to add the posted information to the db array -> do it tomorrow!!!

    // get data from form and add to campgrounds array
    var salary = req.body.salary;
    var savings = req.body.savings;
    var spendings = req.body.spendings;
    var debt = req.body.debt;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newReport = { salary: salary, savings: savings, spendings: spendings, debt: debt, author: author }
        // Create a new campground and save to DB
    Report.create(newReport, function(err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            //redirect back to results page
            res.redirect("/results");
        }
    });

});



/**
 *  This route is generated to show the results of analyzing the form
 */
router.get("/results", middleware.isLoggedIn, (req, res) => {
    // Report.findById(req.params.id, function(err, foundRepo) {
    //     res.render("results", { report: foundRepo });
    // });
    res.render("results");
});


/**
 * LOGOUT ROUTE
 */
router.get("/logout", function(req, res) {
    req.logOut();
    res.redirect("/");
});

module.exports = router;