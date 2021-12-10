const Hapi = require("@hapi/hapi")
const ActivityRoute = require("./api/routes/ActivityRoute")
const ClassRoute = require("./api/routes/ClassRoute")
const GradeRoute = require("./api/routes/GradeRoute")
const StudentRoute = require("./api/routes/StudentRoute")
const SubjectRoute = require("./api/routes/SubjectRoute")
const TeacherRoute = require("./api/routes/TeacherRoute")
const LoginRoute = require("./api/routes/LoginRoute")

const server = Hapi.server({
    host:"192.168.0.107",
    port:8080,
    routes: {
        cors:true
    }
})

server.route(ActivityRoute)
server.route(ClassRoute)
server.route(GradeRoute)
server.route(StudentRoute)
server.route(SubjectRoute)
server.route(TeacherRoute)
server.route(LoginRoute)

server.start()
.then(() => {
    console.log("OK")
})
.catch((err) => {
    console.log(err)
})