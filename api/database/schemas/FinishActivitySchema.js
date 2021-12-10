const {Schema} = require("mongoose")

module.exports = new Schema({
    activityId: {
        type:Schema.Types.ObjectId,
        ref:"Activity",
        required:true
    },
    studentId: {
        type:Schema.Types.ObjectId,
        ref:"Student",
        required:true
    },
    date: {
        type:Date,
        required:true
    }
})