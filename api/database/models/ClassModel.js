const mongoose = require("../MongooseConnection")
const ClassSchema = require("../schemas/ClassSchema")

module.exports = mongoose.model("Class", ClassSchema)