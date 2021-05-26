const express =require('express')
const router = express.Router()
const doctorRoute = require('./doctorRoute')
const departmentRoute = require('./departmentRoute')
const assistantRoute = require('./assistantRoute')
const paitentRoute = require('./paitent/paitentRoute')


//main page
router.get('/',(req,res)=>{
    res.send('<h1>Welcome In this pandemic we are always here to help you</h1>')
})
//user route
router.use('/doctor',doctorRoute)
router.use('/departments',departmentRoute)
router.use('/assistants',assistantRoute)
router.use('/paitents',paitentRoute)

module.exports = router

