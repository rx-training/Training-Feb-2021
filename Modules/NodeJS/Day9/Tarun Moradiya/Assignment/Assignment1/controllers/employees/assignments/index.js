// import modules
const router = require('express').Router();

const Employees = require('../../../models/employees')

// routes

// get all assignments
// GET http://localhost:3000/employees/:empId/child/assignments
router.get('/', Employees.getAssignments);

// get an assignment
// GET http://localhost:3000/employees/:empId/child/assignments/:id
router.get('/:id', Employees.getAssignments);

// add an assignment
// POST http://localhost:3000/employees/:empId/child/assignments/:id
router.post('/', Employees.addAssignment);

// update an assignment
// PUT http://localhost:3000/employees/:empId/child/assignments/:id
router.put('/:id', Employees.updateAssignment);

// delete an assignment
// DELETE http://localhost:3000/employees/:empId/child/assignments/:id
router.delete('/:id', Employees.deleteAssignment);

// export
module.exports = router;