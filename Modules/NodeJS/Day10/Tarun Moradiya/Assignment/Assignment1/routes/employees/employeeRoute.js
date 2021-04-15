// import modules
const router = require('express').Router();

const assignmentsRouter = require('./assignments/assignmentRoute')
const {getEmployees, addEmployee, updateEmployee, deleteEmployee} = require('../../controllers/employeeController');

// routes

// get all employees
// GET http://localhost:3000/employees
router.get('/', getEmployees);

// get an employee
// GET http://localhost:3000/employees/:id
router.get('/:id', getEmployees);

// add an employee
// POST http://localhost:3000/employees
router.post('/', addEmployee);

// update an employee
// PUT http://localhost:3000/employees/:id
router.put('/:id', updateEmployee);

// delete an employee
// DELETE http://localhost:3000/employees/:id
router.delete('/:id', deleteEmployee);

//child routes

// http://localhost:3000/employees/:empId/child/assignments
router.use('/:empId/child/assignments', (req, res, next) => {
    req.empId = req.params.empId
    next()
}, assignmentsRouter);

module.exports = router;