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
    email:{
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    classId: {
        type:Schema.Types.ObjectId,
        ref:"Class",
        required:true
    },
    enrollment: {
        type:Number,
        required:true
    }
})