const SubjectModel = require("../database/models/SubjectModel")
const createObjectId = require("../services/createObjectId")
const ActivityModel = require("../database/models/ActivityModel")

module.exports = {
    async getSubjects(request, h) {
        try {
            const resp = await SubjectModel.find({}).exec()
            return h.response(resp).code(200)
        } catch (error) {
            return h.response("Erro").code(500)
        }
    },
    async createSubject(request, h){
        try {
            const resp = await SubjectModel.create(request.payload)
            return h.response(resp._id).code(201)
        } catch (error) {
            return h.code(500)
        }
    },
    async getSubject(request, h){
        try {
            let {id} = request.params
            let _id = createObjectId(id)
            if(_id) {
                const resp = await SubjectModel.findById(_id).exec()
            }else 
                return h.code(400)
        } catch (error) {
            return h.code(500)
        }
    },
    async getSubjectActivitys(request, h){
        try {
            let {id} = request.params
            let _id = createObjectId(id)
            if(_id) {
                const resp = await ActivityModel.find({subjectId:_id}).exec()
                return h.response(resp).code(200)
            }else 
                return h.code(400)
        } catch (error) {
            return h.code(500)
        }
    }
}