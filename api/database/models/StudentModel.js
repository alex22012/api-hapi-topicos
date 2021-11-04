const mongoose = require("../MongooseConnection")
const StudentSchema = require("../schemas/StudentSchema")

module.exports = mongoose.model("Student", StudentSchema)