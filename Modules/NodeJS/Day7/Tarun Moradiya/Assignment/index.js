const express = require('express')

const emps = require('./routes/emps')
const logger = require('./middlewares/logger')

const app = express()

//to parse json objects into req.body
app.use(express.json())

//custom middleware logger
app.use(logger)
//routes

//http://localhost:3000/emps
app.use('/emps', emps)

//listen to the port

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`server running on port ${port}`))



