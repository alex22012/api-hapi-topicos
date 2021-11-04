const ActivityHandler = require("../handlers/ActivityHandler")

module.exports = [
    {
        method:"POST",
        path:"/activity",
        handler:(request, h) => ActivityHandler.createActivity(request, h)
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