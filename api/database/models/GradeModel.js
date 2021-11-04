const mongoose = require("../MongooseConnection")
const GradeSchema = require("../schemas/GradeSchema")

module.exports = mongoose.model("Grade", GradeSchema)