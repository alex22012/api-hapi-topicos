const {Schema} = require("mongoose")

module.exports = new Schema({
    email: {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})