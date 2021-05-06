// import modules
const router = require('express').Router();

const feesRoute = require('./fees/index');
const resultsRoute = require('./results/index');

const Students = require('../../models/students')

// routes

// get all students
// GET http://localhost:3000/students
router.get('/', Students.getStudents);

// get a student
// GET http://localhost:3000/students/:id
router.get('/:id', Students.getStudents);

// add a student
// POST http://localhost:3000/students
router.post('/', Students.addStudent);

// update a student
// PUT http://localhost:3000/students/:id
router.put('/:id', Students.updateStudent);

// delete a student
// DELETE http://localhost:3000/students/:id
router.delete('/:id', Students.deleteStudent);

// child routes

// http://localhost:3000/students/:id/fees
router.use('/:id/fees', sendData, feesRoute);

// http://localhost:3000/students/:id/result
router.use('/:id/result', sendData, resultsRoute);

// functions

// send data
function sendData(req, res, next) {
    req.studId = req.params.id;
    next();
}

// export
module.exports = router;