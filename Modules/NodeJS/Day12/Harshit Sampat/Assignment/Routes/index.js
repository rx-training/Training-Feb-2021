var express =require('express')
var router =express.Router()
var Authenticate = require('../Authentication/verifyToken')
var employeeRouter =require('./Employee/employeeRoute')
var student = require('./Student/Studentroute')
var userRouter  = require('./user/user')

//main page
router.get('/',(req,res)=>{
    res.send('Hello you are in Noded application change link to get another respo')
})



//child route
//user
router.use('/user',userRouter)

//employee
router.use('/emps',Authenticate,employeeRouter)

//student
router.use('/students',Authenticate,student) 

module.exports =router