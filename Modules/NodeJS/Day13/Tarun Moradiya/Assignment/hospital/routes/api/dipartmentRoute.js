//import modules
const router = require('express').Router(); 

const {getDepartments, addDepartment} = require('../../controllers/departmentController')
//routes

//get deparments
//GET http://localhost:3000/departments
router.get('/', getDepartments);

//add deparment
//POST http://localhost:3000/departments
router.post('/', addDepartment);

//exports
module.exports = router;