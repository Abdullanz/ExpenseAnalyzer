/**
 *  File Name: app.test.js
 *  Description: To test the project
 *  Date: 25 June, 2020
 *  Author: Abdullah Najjar
 */

// var request = require("request");
const chaiHttp = require("chai-http");
var chai = require("chai");
const router = require("../routes");
const app = require("../app");


var expect = chai.expect;
var assert = chai.assert;


chai.use(chaiHttp);

//To check on the status of the app on the web
describe("Server", () => {
    it("App is running okay", (done) => {
        chai
            .request(app)
            .get("/")
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });
});