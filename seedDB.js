var mongoose = require("mongoose");
var Report = require("./models/report");
var User = require("./models/user");


/**
 * To seed the database
 */
var seeds = [{}];




/**
 * To seed the database with default information
 */
async function seedDB() {
    try {
        //await means waiting for this event until it finishes
        //so we wait until the campgrounds & comments are removed
        await Report.deleteMany({});
        console.log("Reports removed!!");
        await User.deleteMany({});
        console.log("Users removed!!");
    } catch (err) {
        console.log(err);
    }
}

module.exports = seedDB;