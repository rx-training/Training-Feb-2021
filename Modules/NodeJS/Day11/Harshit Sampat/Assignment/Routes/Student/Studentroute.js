const router = require('express').Router()
const feesrouter = require('./Fees/feesroute')
const Resultrouter = require('./Result/resultRoute')

const {getStudent,getStudentById,Addstudent,DeleteStudent,updateStudent} = require('../../controllers/student')

//get all student
router.get('/',getStudent)

//getstudent by id
router.get('/:id',getStudentById)

//add new Student
router.post('/',Addstudent)

//update Student
router.put('/:id',updateStudent)

//delete Studednt
router.delete('/:id',DeleteStudent)

//child routes
//fees
router.use('/:id/fees',senddata,feesrouter)

//result
router.use('/:id/result',senddata,Resultrouter)

//senddata
function senddata(req,res,next){
    req.studentID = req.params.id
    next();      
}

//exports router
module.exports = router


