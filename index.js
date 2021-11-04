const Hapi = require("@hapi/hapi")

const server = Hapi.server({
    host:"localhost",
    port:8080
})

server.start()
.then(() => {
    console.log("OK")
})
.catch((err) => {
    console.log(err)
})