const GradeHandler = require("../handlers/GradeHandler")

module.exports = [
    {
        method:"POST",
        path:"/grade",
        handler:(request, h) => GradeHandler.createGrade(request, h)
    },
    {
        method:"PUT",
        path:"/grade/{id}",
        handler:(request, h) => GradeHandler.updateGrade(request, h)
    },
    {
        method:"DELETE",
        path:"/grade/{id}",
        handler:(request, h) => GradeHandler.deleteGrade(request, h)
    }
]