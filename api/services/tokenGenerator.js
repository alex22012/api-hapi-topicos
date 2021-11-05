const jwt = require("jsonwebtoken")
const JWTSECRET = require("./jwtsecret")

module.exports = function(email) {
    jwt.sign({email}, JWTSECRET, {expiresIn:"1h"}, (err, token) => {
        if(!err)
            return token
    })
}