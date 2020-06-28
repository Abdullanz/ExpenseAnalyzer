/**
 * Author: Abdullah Najjar
 * Date: 25 June, 2020
 * Description: To embed all the middleware functions
 * filename: index.js
 */


//all middleware goes here
var Report = require("../models/report");



var middlewareObj = {};

//middleware function to verify if the user is logged in or not
middlewareObj.isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = middlewareObj;