const jwt = require("jsonwebtoken")
const JWTSECRET = require("./jwtsecret")

module.exports = function(request, h){
    let authString = request.headers.authorization.split(" ")
    if(authString[0] === "Bearer"){
        try {
            jwt.verify(authString[1], (err)=> {
                if(err){
                    return false
                }else {
                    return true
                }
            })
        } catch (error) {
            return false
        }
    }else 
        return false
}