const express = require('express')
const jwt = require('jsonwebtoken')

global.config = require('./static/config')

const app = express()

const security =require('./middleware/security')
const login = require('./controller/login/login')
const emp = require('./controller/employee/employee')
const student = require('./controller/student/student')

app.use(express.json())
app.get('/',(req,res) => {
    res.send("Home Page !!")
})
app.use('/login',login)

//app.use(security)
app.use('/employee',emp)
app.use('/student',student)

app.listen(3000, () => {
    console.log("server is running on port 3000")
})