// import modules
const router = require('express').Router();
const {getAssignments, addAssignment, updateAssignment, deleteAssignment} = require('../../../controllers/employeeController');

// routes

// get all assignments
// GET http://localhost:3000/employees/:empId/child/assignments
router.get('/', getAssignments);

// get an assignment
// GET http://localhost:3000/employees/:empId/child/assignments/:id
router.get('/:id', getAssignments);

// add an assignment
// POST http://localhost:3000/employees/:empId/child/assignments/:id
router.post('/', addAssignment);

// update an assignment
// PUT http://localhost:3000/employees/:empId/child/assignments/:id
router.put('/:id', updateAssignment);

// delete an assignment
// DELETE http://localhost:3000/employees/:empId/child/assignments/:id
router.delete('/:id', deleteAssignment);

// export
module.exports = router;