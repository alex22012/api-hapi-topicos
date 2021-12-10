const {Schema} = require("mongoose")

module.exports = new Schema({
    name:{
        type:String,
        required:true
    },
    //Ano da turma
    grade: {
        type:Number,
        required:true
    }
})