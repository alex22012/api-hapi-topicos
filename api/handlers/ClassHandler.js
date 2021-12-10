const ClassModel = require("../database/models/ClassModel")
const createObjectId = require("../services/createObjectId")
const StudentModel = require("../database/models/StudentModel")
const SubjectModel = require("../database/models/SubjectModel")
const TeacherModel = require("../database/models/TeacherModel")
const ActivityModel = require('../database/models/ActivityModel')

module.exports = {
    async getClasses(request, h){
        try {
            const resp = await ClassModel.find({}).exec()
            return h.response(resp).code(200)
        } catch (error) {
            return h.code(500)
        }
    },
    async createClass(request, h) {
        try {
            const resp = await ClassModel.create(request.payload)
            return h.response(resp._id).code(201)
        } catch (error) {
            return h.code(500)
        }
    },
    async getClass(request, h){
        try {
            let {id} = request.params
            let _id = createObjectId(id)
            if(_id){
                const resp = await ClassModel.findById(_id).exec()
                return h.response(resp).code(200)
            }else 
                return h.code(400)
        } catch (error) {
            
        }
    },
    async getClassStudents(request, h){
        try {
            let {id} = request.params
            let _id = createObjectId(id)
            if(_id){
                const resp = await StudentModel.find({classId:_id})
                return h.response(resp).code(200)
            }else 
                return h.code(400)
        } catch (error) {
            return h.code(500)
        }
    },
    async getClassSubjects(request, h){
        try {
            let {id} = request.params
            let _id = createObjectId(id)
            if(_id){
                const resp = await SubjectModel.find({classId:_id})
                return h.response(resp).code(200)
            }else 
                return h.response("Id inválido").code(400)
        } catch (error) {
            return h.response(error).code(500)
        }
    },
    async getClassTeachers(request, h){
        try {
            let {id} = request.params
            let _id = createObjectId(id)
            if(_id){
                const resp = await TeacherModel.find({classId:_id})
                return h.response(resp).code(200)
            }else 
                return h.code(400)
        } catch (error) {
            return h.code(500)
        }
    },
    async getClassActivitys(request, h){
        try {
            let {id} = request.params
            let _id = createObjectId(id)
            if(_id){
                const resp = await ActivityModel.find({classId:_id})
                return h.response(resp).code(200)
            }else 
                return h.response().code(400)
        } catch (error) {
            return h.response().code(500)
        }  
    },
    async updateClass(request, h) {
        try {
            let {id} = request.params
            let _id = createObjectId(id)
            if(_id){
                await ClassModel.findByIdAndUpdate(_id, request.payload).exec()
                return h.code(204)
            }else 
                return h.code(400)
        } catch (error) {
            return h.code(500)
        }
    },
    async deleteClass(request, h) {
        //Vou precisar remover todos os alunos ou jogar eles em outra turma
        //Depois deleto
        try {
            let {id} = request.params
            let _id = createObjectId(id)
            if(_id){
                await ClassModel.findByIdAndDelete(_id).exec()
                return h.code(204)
            }else
                return h.code(400)
        } catch (error) {
            
        }
    }
}