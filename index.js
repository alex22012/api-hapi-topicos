const Hapi = require("@hapi/hapi")
const ActivityRoute = require("./api/routes/ActivityRoute")
const ClassRoute = require("./api/routes/ClassRoute")
const GradeRoute = require("./api/routes/GradeRoute")
const StudentRoute = require("./api/routes/StudentRoute")
const SubjectRoute = require("./api/routes/SubjectRoute")
const TeacherRoute = require("./api/routes/TeacherRoute")

const server = Hapi.server({
    host:"localhost",
    port:8080
})

server.route(ActivityRoute)
server.route(ClassRoute)
server.route(GradeRoute)
server.route(StudentRoute)
server.route(SubjectRoute)
server.route(TeacherRoute)

server.start()
.then(() => {
    console.log("OK")
})
.catch((err) => {
    console.log(err)
})