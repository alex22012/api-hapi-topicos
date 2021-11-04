const StudentHandler = require("../handlers/StudentHandler")

module.exports = [
    {
        method:"GET",
        path:"/students",
        handler:(request, h) => StudentHandler.getStudents(request, h)
    },
    {
        method:"POST",
        path:"/student",
        handler:(request, h) => StudentHandler.createStudent(request, h)
    },
    {
        method:"GET",
        path:"/student/{id}",
        handler:(request, h) => StudentHandler.getStudent(request, h)
    },
    {
        method:"GET",
        path:"/student/{id}/grades",
        handler:(request, h) => StudentHandler.getStudentGrades(request, h)
    },
    {
        method:"PUT",
        path:"/student/{id}",
        handler:(request, h) => StudentHandler.updateStudent(request, h)
    },
    {
        method:"DELETE",
        path:"/student/{id}",
        handler:(request, h) => StudentHandler.deleteStudent(request, h)
    }
]