const StudentModel = require("../database/models/StudentModel")
const TeacherModel = require("../database/models/TeacherModel")
const AdminModel = require("../database/models/AdminModel")
const tokenGenerator = require("../services/tokenGenerator")

module.exports = {
    async admin(request, h) {
        try {
            let {email, password} = request.payload
            const admin = await AdminModel.findOne({email})
            if(admin){
                if(admin.password === password){
                    return h.response({admin, token:tokenGenerator(email)})
                }else 
                    return h.code(401)
            }else {
                return h.code(404)
            }
        } catch (error) {
            return h.code(500)
        }
    },
    async teacher(request, h) {
        try {
            let {email, password} = request.payload
            const teacher = await TeacherModel.findOne({email})
            if(teacher){
                if(teacher.password === password){
                    return h.response({teacher, token:tokenGenerator(email)})
                }else 
                    return h.code(401)
            }else {
                return h.code(404)
            }
        } catch (error) {
            return h.code(500)
        }
    },
    async student(request, h) {
        try {
            let {email, password} = request.payload
            const student = await StudentModel.findOne({email})
            if(student){
                if(student.password === password){
                    return h.response({student, token:tokenGenerator(email)})
                }else 
                    return h.code(401)
            }else {
                return h.code(404)
            }
        } catch (error) {
            return h.code(500)
        }
    }
}