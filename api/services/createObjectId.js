const mongoose = require("mongoose")

module.exports = (id) => {
    if(!mongoose.isValidObjectId(id))
        return null
    else {
        let _id = mongoose.mongo.ObjectId(id)
        return _id
    }
}