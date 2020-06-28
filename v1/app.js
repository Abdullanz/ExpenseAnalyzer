/**
 *  File Name: app.js
 *  Description:
 *  Date: 25 June, 2020
 *  Author: Abdullah Najjar
 * TODO: Add all the libraries needed and setup to the routes.
 */
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var passport = require("passport");
var methodOverride = require("method-override");
var LocalStrategy = require("passport-local");

//Models
var Report = require("./models/report.js");
var User = require("./models/user.js");

//Routing
var indexRoutes = require("./routes/index");



/**
 * To conncet to local database
 */
mongoose.connect("mongodb://localhost/ExpenseAnalyzer", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});




/**
 *  Init the setup
 */
app.use(bodyParser.urlencoded({ extended: true })); //To set up body parser
app.set("view engine", "ejs"); //To setup the ejs file types
app.use(express.static(__dirname + "/public")); //To access styling sheets
app.use(methodOverride("_method"));

var cl = console.log.bind(console); //shortens the debugging process a bit :)


/**
 * PASSPORT CONFIGURATION
 */
app.use(
    require("express-session")({
        secret: "Abdu is the best",
        resave: false,
        saveUninitialized: false,
    })
);


/**
 * Inits to use libraries as a middleware
 */
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//To use the routes
app.use(indexRoutes);


/**
 *  To init the server
 */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}..`));


module.exports = app;