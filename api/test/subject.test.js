const chai = require("chai")
const request = require("request")
const expect = chai.expect

const Base_URL = "http://localhost:8080"

describe("Subject test", () => {
    it("Get all subjects", done => {
        request.get({
            url:Base_URL + "/subjects"
        }, (err, res, body) => {
            let _body = JSON.parse(body)
            expect(res.statusCode).to.equal(200)
            expect(_body).to.have.length.at.least(0)
            done()
        })
    })
})