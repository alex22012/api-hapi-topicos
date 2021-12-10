const ActivityModel = require("../database/models/ActivityModel")
const createObjectId = require("../services/createObjectId")

module.exports = {
    async createActivity(request, h){
        try {
            const resp = await ActivityModel.create(request.payload)
            return h.response(resp._id).code(201)
        } catch (error) {
            console.log(error)
            return h.response().code(500)
        }
    },
    async getActivity(request, h) {
        try {
            let {id} = request.params
            let _id = createObjectId(id)
            if(_id){
                const resp = await ActivityModel.findById(_id).exec()
                return h.response(resp).code(200)
            }else 
                return h.code(400)
        } catch (error) {
            return h.response().code(500)
        }
    },
    async updateActivity(request, h){
        try {
            let {id} = request.params
            let _id = createObjectId(id)
            if(_id){
                await ActivityModel.findByIdAndUpdate(_id, request.payload).exec()
                return h.response().code(204)
            }else 
                return h.code(400)
        } catch (error) {
            return h.code(500)
        }
    },
    async deleteActivity(request, h){
        try {
            let {id} = request.params
            let _id = createObjectId(id)
            if(_id) {
                await ActivityModel.findByIdAndDelete(_id).exec()
                return h.code(204)
            }else 
                return h.code(400)
        } catch (error) {
            return h.code(500)
        }
    }
}