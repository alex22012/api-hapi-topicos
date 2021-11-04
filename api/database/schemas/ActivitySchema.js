const {Schema} = require("mongoose")

module.exports = new Schema({
    classId: {
        type:Schema.Types.ObjectId,
        required:true,
        ref:"Class"
    },
    subjectId: {
        type:Schema.Types.ObjectId,
        required:true,
        ref:"Subject"
    },
    date: {
        type:Date,
        required:true
    },
    isTest: {
        type:Boolean,
        required:true
    }
})