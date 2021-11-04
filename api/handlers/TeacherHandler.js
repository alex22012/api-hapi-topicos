const TeacherModel = require("../database/models/TeacherModel")
const createObjectId = require("../services/createObjectId")
const SubjectModel = require("../database/models/SubjectModel")

module.exports = {
    async getTeachers(request, h) {
        try {
            const resp = await TeacherModel.find({}).exec()
            return h.response(resp).code(200)
        } catch (error) {
            return h.response("Erro").code(500)
        }
    },
    async createTeacher(request, h) {
        try {
            const resp = await TeacherModel.create(request.payload)
            return h.response(resp._id).code(201)
        } catch (error) {
            return h.response("Erro").code(500)
        }
    },
    async getTeacher(request, h) {
        try {
            let {id} = request.params
            let _id = createObjectId(id)
            if(!_id){
                return h.response("ID").code(400)
            }else {
                const resp = await TeacherModel.findById(_id).exec()
                return h.response(resp).code(200)
            }
        } catch (error) {
            return h.response("Erro").code(500)
        }
    },
    async getTeacherSubjects(request, h){
        try {
            let {id} = request.params
            let _id = createObjectId(id)
            if(_id){
                const resp = await SubjectModel.find({teacherId:_id}).exec()
                return h.response(resp).code(200)
            }else 
                return h.code(400)
        } catch (error) {
            return h.code(400)
        }
    },
    async updateTeacher(request, h){
        try {
            let {id} = request.params
            let _id = createObjectId(id)
            if(!_id){
                return h.response("ID").code(400)
            }else {
                await TeacherModel.findByIdAndUpdate(_id).exec()
                return h.response("Atualizado com sucesso").code(204)
            }
        } catch (error) {
            return h.response("Erro").code(500)
        }
    },
    async deleteTeacher(request, h) {
        try {
            let {id} = request.params
            let _id = createObjectId(id)
            if(!_id){
                return h.response("ID").code(400)
            }else {
                await TeacherModel.findByIdAndDelete(_id).exec()
                return h.response("Removido com sucesso").code(204)
            }
        } catch (error) {
            return h.response("Erro").code(500)
        }
    }
}