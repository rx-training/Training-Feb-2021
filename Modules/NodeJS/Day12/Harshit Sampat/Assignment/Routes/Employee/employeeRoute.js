const router = require('express').Router()
const assignmentRouter = require('./Assignment/AssignmentRoute')
const {getAllEmployee,getEmployeebyId,addEmployee,updateEmployee,deleteEmployee}= require('../../controllers/emp')



//get employees
router.get('/',getAllEmployee) 


//get employee by id
router.get('/:id', getEmployeebyId)

//Create new employee
router.post('/', addEmployee)

//update employee
router.put('/:id',updateEmployee)

//delete employee by id
router.delete('/:id', deleteEmployee)

//child route

router.use('/:Emp_Id/child/assignments', senddata,assignmentRouter)

function senddata(req,res,next){    
    req.Emp_ID = req.params.Emp_ID
    next();

}
module.exports = router; 