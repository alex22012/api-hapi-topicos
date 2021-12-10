const mongoose = require("../MongooseConnection")
const AdminSchema = require("../schemas/AdminSchema")

module.exports = mongoose.model("Admin", AdminSchema)