const ActivityHandler = require("../handlers/ActivityHandler")
const FinishActivityHandler = require("../handlers/FinishActivityHandler")

module.exports = [
    {
        method:"POST",
        path:"/activity",
        handler:(request, h) => ActivityHandler.createActivity(request, h)
    },
    {
        method:"POST",
        path:"/activity/check-conclusion",
        handler:(request, h) => FinishActivityHandler.checkActivityConclusion(request, h)
    },
    {
        method:"GET",
        path:"/activity/{id}",
        handler:(request, h) => ActivityHandler.getActivity(request, h)
    },
    {
        method:"PUT",
        path:"/activity/{id}",
        handler:(request, h) => ActivityHandler.updateActivity(request, h)
    },
    {
        method:"DELETE",
        path:"/activity/{id}",
        handler:(request, h) => ActivityHandler.deleteActivity(request, h)
    }
]