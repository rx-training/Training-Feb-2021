// import modules
const router = require('express').Router();

const assignmentsRouter = require('./assignments/index')

const Employees = require('../../models/employees')

// routes

// get all employees
// GET http://localhost:3000/employees
router.get('/', Employees.getEmpoyees);

// get an employee
// GET http://localhost:3000/employees/:id
router.get('/:id', Employees.getEmpoyees);

// add an employee
// POST http://localhost:3000/employees
router.post('/', Employees.addEmployee);

// update an employee
// PUT http://localhost:3000/employees/:id
router.put('/:id', Employees.updateEmployee);

// delete an employee
// DELETE http://localhost:3000/employees/:id
router.delete('/:id', Employees.deleteEmployee);

//child routes

// http://localhost:3000/employees/:empId/child/assignments
router.use('/:empId/child/assignments', (req, res, next) => {
    req.empId = req.params.empId
    next()
}, assignmentsRouter);

module.exports = router;