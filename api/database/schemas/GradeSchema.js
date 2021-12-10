const {Schema} = require('mongoose')

module.exports = new Schema({
    grade: {
        type:Number,
        required:true
    },
    studentId: {
        type:Schema.Types.ObjectId,
        ref:"Student",
        required:true
    },
    subjectId: {
        type:Schema.Types.ObjectId,
        ref:"Subject",
        required:true
    },
    activityId: {
        type:Schema.Types.ObjectId,
        ref:"Activity",
        required:true
    },
    activityName: {
        type:String,
        required:true
    }
})