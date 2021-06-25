var express =require('express')
var router =express.Router()
//var authenticationRouter = require('./controllers/Authentication/verifyToken')
var employeeRouter =require('./Employee/employeeRoute')
var student = require('./Student/Studentroute')

//main page
router.get('/',(req,res)=>{
    res.send('Hello you are in Noded application change link to get another respo')
})


//child route
router.use('/emps',employeeRouter)
router.use('/students',student) 

module.exports =router