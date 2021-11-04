const {Schema} = require("mongoose")

module.exports = new Schema({
    subjectName: {
        type:String,
        required:true
    },
    teacherId: {
        type:Schema.Types.ObjectId,
        required:true,
        ref:"Teacher"
    },
    classId: {
        type:Schema.Types.ObjectId,
        required:true,
        ref:"Class"
    }
})