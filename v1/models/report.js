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
    name: String,
    investment: String,
    description: String,
    createdAt: { type: Date, default: Date.now },
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