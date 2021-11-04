const createObjectId = require("../services/createObjectId")
const StudentModel = require("../database/models/StudentModel")
const GradeModel = require("../database/models/GradeModel")

module.exports = {
    async getStudents(request, h) {
        try {
            const resp = await StudentModel.find({}).exec()
            return h.response(resp).code(200)
        } catch (error) {
            return h.response("An error has occurred in the server").code(500)
        }
    },
    async createStudent(request, h) {
        try {
            const resp = await StudentModel.create(request.payload)
            return h.response(resp._id).code(201)    
        } catch (error) {
            return h.response("An error has occurred in the server").code(500)
        }
    },
    async getStudent(request, h) {
        try {
            let {id} = request.params
            let _id = createObjectId(id)
            if(!_id){
                return h.response("The id is malformated")
            }else {
                const resp = await StudentModel.findById(_id).exec()
                return h.response(resp).code(200)
            }
        } catch (error) {
            return h.response("An error has occurred in the server").code(500)
        }
    },
    async getStudentGrades(request, h){
        try {
            let {id} = request.params
            let _id = createObjectId(id)
            if(_id){
                const resp = await GradeModel.find({studentId:_id}).exec()
                return h.response(resp).code(200)
            }else 
                return h.code(400)
        } catch (error) {
            
        }
    },
    async updateStudent(request, h){
        try {
            let {id} = request.params
            let _id = createObjectId(id)
            if(!_id){
                return h.response("The id is malformated")
            }else {
                const resp = await StudentModel.findByIdAndUpdate(_id, request.payload).exec()
                return h.response(resp).code(200)
            }
        } catch (error) {
            return h.response("An error has occurred in the server").code(500)
        }
    },
    async deleteStudent(request, h){
        try {
            let {id} = request.params
            let _id = createObjectId(id)
            if(!_id){
                return h.response("The id is malformated")
            }else {
                const resp = await StudentModel.findByIdAndDelete(_id).exec()
                return h.response(resp).code(200)
            }
        } catch (error) {
            return h.response("An error has occurred in the server").code(500)
        }
    }
}