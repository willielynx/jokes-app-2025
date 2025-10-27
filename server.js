// Install express
const express = require("express")
// Make an instance of express
const server = express()
// Create your port
const PORT = process.env.PORT || 3001
const router = require('./routes/router')

server.use('/', router)
server.set('view engine', 'ejs')


// Listen
server.listen(PORT, ()=> console.log(`Server is listening at http://localhost:${PORT}`))