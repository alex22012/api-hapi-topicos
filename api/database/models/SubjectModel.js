const mongoose = require("../MongooseConnection")
const SubjectSchema = require("../schemas/SubjectSchema")

module.exports = mongoose.model("Subject", SubjectSchema)