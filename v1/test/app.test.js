/**
 *  File Name: app.test.js
 *  Description: To test the project
 *  Date: 25 June, 2020
 *  Author: Abdullah Najjar
 */

var expect = require("chai").expect;
var request = require("request");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
describe("Server!", () => {
    it("welcomes user to the api", (done) => {
        chai
            .request(app)
            .get("/")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.status).to.equals("success");
                expect(res.body.message).to.equals("Welcome To Testing API");
                done();
            });
    });
});