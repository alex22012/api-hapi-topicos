const LoginHandler = require("../handlers/LoginHandler")

module.exports = [
    //Login do adm
    {
        method:"POST",
        path:"/admin/login",
        handler:(request, h) => LoginHandler.admin(request, h)
    },
    //Login do professor
    {
        method:"POST",
        path:"/teacher/login",
        handler:(request, h) => LoginHandler.teacher(request, h)
    },
    //Login do aluno
    {
        method:"POST",
        path:"/student/login",
        handler:(request, h) => LoginHandler.student(request, h)
    }
]