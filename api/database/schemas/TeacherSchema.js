const {Schema} = require("mongoose")

module.exports = new Schema({
    name:{
        type:String,
        required:true
    },
    birthDate: {
        type:Date,
        required:true
    },
    classId: {
        type:Schema.Types.ObjectId,
        ref:"Class",
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    }
})