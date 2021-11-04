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
        required:true,
        ref:"Class"
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