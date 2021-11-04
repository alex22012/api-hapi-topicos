const ClassHandler = require("../handlers/ClassHandler")

module.exports = [
    {
        method:"GET",
        path:"/classes",
        handler:(request, h) => ClassHandler.getClasses(request, h)
    },
    {
        method:"POST",
        path:"/class",
        handler:(request, h) => ClassHandler.createClass(request, h)
    },
    {
        method:"GET",
        path:"/class/{id}",
        handler:(request, h) => ClassHandler.getClass(request, h)
    },
    {
        method:"GET",
        path:"/class/{id}/students",
        handler:(request, h) => ClassHandler.getClassStudents(request, h)
    },
    {
        method:"GET",
        path:"/class/{id}/subjects",
        handler:(request, h) => ClassHandler.getClassSubjects(request, h)
    },
    {
        method:"GET",
        path:"/class/{id}/teachers",
        handler:(request, h) => ClassHandler.getClassTeachers(request, h)
    },
    {
        method:"GET",
        path:"/class/{id}/activitys",
        handler:(request, h) => ClassHandler.getClassActivitys(request, h)
    },
    {
        method:"PUT",
        path:"/class/{id}",
        handler:(request, h) => ClassHandler.updateClass(request, h)
    },
    {
        method:"DELETE",
        path:"/class/{id}",
        handler:(request, h) => ClassHandler.deleteClass(request, h)
    }
]

