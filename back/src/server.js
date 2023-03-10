const express = require("express")
const server = express();
const PORT = 3001;
const router = require("./routes/index")
const cors = require("cors")

server.use(cors())
server.use(express.json())

server.use('/', router)

server.listen(PORT, () => {
    console.log(`server on - port ${PORT}`)
})

module.exports = express;