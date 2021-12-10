const GradeModel = require("../database/models/GradeModel")
const createObjectId = require("../services/createObjectId")

module.exports = {
    async createGrade(request, h){
        try {
            console.log(request.payload)
            const resp = await GradeModel.create(request.payload)
            return h.response(resp).code(201)
        } catch (error) {
            console.log(error)
            return h.response().code(500)
        }
    },
    async updateGrade(request, h) {
        try {
            let {id} = request.params
            let _id = createObjectId(id)
            if(_id){
                await GradeModel.findByIdAndUpdate(_id, request.payload).exec()
                return h.code(204)
            }else
                return h.code(400)
        } catch (error) {
            return h.code(500)
        }
    },
    async deleteGrade(request, h) {
        try {
            let {id} = request.params
            let _id = createObjectId(id)
            if(_id){
                await GradeModel.findByIdAndDelete(_id).exec()
            }else 
                return h.code(400)
        } catch (error) {
            return h.code(500)
        }
    }
}