const jwt = require("jsonwebtoken")
const JWTSECRET = require("./jwtsecret")

module.exports = function(request, h){
    let authString = ""
    if(request.headers.authorization !== undefined)
        authString = request.headers.authorization.split(" ")
    else 
        return false
    if(authString[0] === "Bearer"){
        jwt.verify(authString[1], (err)=> {
            if(err){
                return false
            }else {
                return true
            }
        })
    }else 
        return false
}