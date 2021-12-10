const TeacherModel = require("../database/models/TeacherModel")
const createObjectId = require("../services/createObjectId")
const SubjectModel = require("../database/models/SubjectModel")
const ClassModel = require("../database/models/ClassModel")

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
            console.log(request.payload)
            const resp = await TeacherModel.create(request.payload)
            return h.response(resp._id).code(201)
        } catch (error) {
            console.log(error)
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
    async getTeacherSubject(request, h){
        try {
            let {id} = request.params
            let _id = createObjectId(id)
            //Pego o professor
            const teacher = await TeacherModel.findById(_id).exec()
            const subjectId = teacher.subjectId
            if(_id){
                const resp = await SubjectModel.find({_id:subjectId})
                return h.response(resp).code(200)
            }else 
                return h.response().code(400)
        } catch (error) {
            return h.response().code(500)
        }
    },
    async getTeacherClass(request, h){
        try {
            let {id} = request.params
            let _id = createObjectId(id)
            if(_id){
                const teacher = await TeacherModel.findById(_id).exec()
                const classId = teacher.classId
                const resp = await ClassModel.findOne({_id:classId})
                return h.response(resp).code(200)
            }else 
                return h.response().code(400)
        } catch (error) {
            return h.response().code(500)
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