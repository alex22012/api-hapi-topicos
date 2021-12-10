const TeacherHandler = require("../handlers/TeacherHandler")

module.exports = [
    {
        method:"GET",
        path:"/teachers",
        handler:(request, h) => TeacherHandler.getTeachers(request, h)
    },
    {
        method:"POST",
        path:"/teacher",
        handler:(request, h) => TeacherHandler.createTeacher(request, h)
    },
    {
        method:"GET",
        path:"/teacher/{id}",
        handler:(request, h) => TeacherHandler.getTeacher(request, h)
    },
    {
        method:"GET",
        path:"/teacher/{id}/subject",
        handler:(request, h) => TeacherHandler.getTeacherSubject(request, h)
    },
    {
        method:"GET",
        path:"/teacher/{id}/class",
        handler:(request, h) => TeacherHandler.getTeacherClass(request, h)
    },
    {
        method:"PUT",
        path:"/teacher/{id}",
        handler:(request, h) => TeacherHandler.updateTeacher(request, h)
    },
    {
        method:"DELETE",
        path:"/teacher/{id}",
        handler:(request, h) => TeacherHandler.deleteTeacher(request, h)
    }
]