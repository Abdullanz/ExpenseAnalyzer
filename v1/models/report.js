/**
 * Author: Abdullah Najjar
 * Date: 25 June, 2020
 * Description: 
 * filename: report.js
 */
var mongoose = require("mongoose");

/**
 * Report Schema
 */
var reportSchema = new mongoose.Schema({
    salary: Number,
    savings: Number,
    spendings: Number,
    debt: Number,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        username: String,
    },
});

/**
 * The model to be exported too.
 */
module.exports = mongoose.model("Report", reportSchema);