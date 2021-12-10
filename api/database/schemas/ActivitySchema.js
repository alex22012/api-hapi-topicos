const {Schema} = require("mongoose")

module.exports = new Schema({
    classId: {
        type:Schema.Types.ObjectId,
        ref:"Class",
        required:true
    },
    body: {
        type:String,
        required:true
    },
    subjectId: {
        type:Schema.Types.ObjectId,
        ref:"Subject",
        required:true
    },
    startDate: {
        type:Date,
        required:true
    },
    endDate: {
        type:Date,
        required:true
    },
    isTest: {
        type:Boolean,
        required:true
    },
    isCorrected: {
        type:Boolean,
        required:true
    },
   
})