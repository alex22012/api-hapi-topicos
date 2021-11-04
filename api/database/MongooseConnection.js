const mongoose = require("mongoose")

async function connect() {
    try {
        mongoose.Promise = global.Promise
        mongoose.set("runValidators", true)
        await mongoose.connect("mongodb+srv://alex:NhGVhmV7apnITrQE@cluster0.5ovhs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        console.log("Mongo ok")
    } catch (error) {
        console.log(error)
    }
}

connect()

module.exports = mongoose