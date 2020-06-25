/**
 * Author: Abdullah Najjar
 * Date: 25 June, 2020
 * Description: User Schema for the database
 * filename: users.js
 */
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");


//User Schema
var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    isAdmin: { type: Boolean, default: false }
});

//Middleware
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);