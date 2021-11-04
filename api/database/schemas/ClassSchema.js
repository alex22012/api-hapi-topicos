const {Schema} = require("mongoose")

module.exports = new Schema({
    name:{
        type:String,
        required:true
    },
    grade: {
        type:Number,
        required:true
    }
})