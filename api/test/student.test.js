const chai = require("chai")
const request = require("request")
const expect = chai.expect

describe("Student test", () => {
    it("Get all students", done => {
        request.get({
            url:"http://localhost:8080/students"
        }, (err, res, body) => {
            let _body = JSON.parse(body)
            expect(res.statusCode).to.equal(200)
            expect(_body).to.have.length.at.least(0)
            done()
        })
    })
})