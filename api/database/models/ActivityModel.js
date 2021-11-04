const mongoose = require("../MongooseConnection")
const ActivitySchema = require("../schemas/ActivitySchema")

module.exports = mongoose.model("Activity", ActivitySchema)