const {Schema} = require("mongoose")

module.exports = new Schema({
    name:{
        Type:String,
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
        required:true,
        ref:"Class"
    },
    enrollment: {
        type:Number,
        required:true
    }
})