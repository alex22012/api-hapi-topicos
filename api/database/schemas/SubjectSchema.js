const {Schema} = require("mongoose")

module.exports = new Schema({
    subjectName: {
        type:String,
        required:true
    },
    teacherId: {
        type:Schema.Types.ObjectId,
        ref:"Teacher",
        required:true
    },
    classId: {
        type:Schema.Types.ObjectId,
        ref:"Class",
        required:true
    }
})