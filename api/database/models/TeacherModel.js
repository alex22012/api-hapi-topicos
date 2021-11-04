const mongoose = require("../MongooseConnection")
const TeacherSchema = require("../schemas/TeacherSchema")

module.exports = mongoose.model("Teacher", TeacherSchema)