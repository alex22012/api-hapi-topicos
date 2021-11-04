const {Schema} = require("mongoose")

module.exports = new Schema({
    classId: {
        type:Schema.Types.ObjectId,
        ref:"Class",
        required:true
    },
    subjectId: {
        type:Schema.Types.ObjectId,
        ref:"Subject",
        required:true
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