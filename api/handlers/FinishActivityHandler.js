const FinishActivityModel = require("../database/models/FinishActivityModel")
const createObjectId = require("../services/createObjectId")

module.exports = {
    async finish(request, h) {
        let {studentId, activityId, date} = request.payload
        let _studentId = createObjectId(studentId)
        let _activityId = createObjectId(activityId)
        if(_studentId && _activityId){
            try {
                const resp = await FinishActivityModel.create({activityId, studentId, date})
                return h.response(resp).code(201)
            } catch (error) {
                console.log(error)
                return h.response().code(500)
            }
        }else {
            return h.response().code(400)
        }
    },
    async checkActivityConclusion(request, h) {
        let {studentId, activityId} = request.payload
        let _studentId = createObjectId(studentId)
        let _activityId = createObjectId(activityId)
        if(_studentId && _activityId){
            try {
                const resp = await FinishActivityModel.findOne({studentId:_studentId, activityId:_activityId})
                if(resp === null){
                    //Ele pode inserir a atividade
                    return h.response().code(204)
                }else {
                    return h.response("atividade ja existe").code(200)
                }
            } catch (error) {
                return h.response(error).code(500)
            }
        }else {
            return h.response().code(400)
        }
    }
}