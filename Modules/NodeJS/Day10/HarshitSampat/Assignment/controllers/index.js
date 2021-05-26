var express =require('express')
var router =express.Router()
//var authenticationRouter = require('./controllers/Authentication/verifyToken')
var employeeRouter =require('./Employee/emp')
var student = require('./Student/index')


router.use('/emps',employeeRouter)
router.use('/students',student) 

module.exports =router