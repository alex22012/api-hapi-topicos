const SubjectHandler = require("../handlers/SubjectHandler")

module.exports = [
    {
        method:"GET",
        path:"/subjects",
        handler:(request, h) => SubjectHandler.getSubjects(request, h)
    },
    {
        method:"POST",
        path:"/subject",
        handler:(request, h) => SubjectHandler.createSubject(request, h)
    },
    {
        method:"GET",
        path:"/subject/{id}",
        handler:(request, h) => SubjectHandler.getSubject(request, h)
    },
    {
        method:"GET",
        path:"/subject/{id}/activitys",
        handler:(request, h) => SubjectHandler.getSubjectActivitys(request, h)
    },
    {
        method:"GET",
        path:"/subject/{id}/pending-activitys",
        handler:(request, h) => SubjectHandler.getPendingActivitys(request, h)
    }
]