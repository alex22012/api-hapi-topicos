const {Schema} = require('mongoose')

module.exports = new Schema({
    grade: {
        type:Number,
        required:true
    },
    studentId: {
        type:Schema.Types.ObjectId,
        required:true,
        ref:"Student"
    },
    subjectId: {
        type:Schema.Types.ObjectId,
        required:true,
        ref:"Subject"
    },
})