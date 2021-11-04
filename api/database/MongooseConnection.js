const mongoose = require("mongoose")

async function connect() {
    try {
        mongoose.Promise = global.Promise
        await mongoose.connect("mongodb+srv://alex:aganinha220@cluster0.5ovhs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    } catch (error) {
        console.log(error)
    }
}

connect()

module.exports = mongoose