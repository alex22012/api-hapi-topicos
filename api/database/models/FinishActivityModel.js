const mongoose = require("../MongooseConnection")
const FinishActivitySchema = require("../schemas/FinishActivitySchema")

module.exports = mongoose.model("FinishActivity", FinishActivitySchema)