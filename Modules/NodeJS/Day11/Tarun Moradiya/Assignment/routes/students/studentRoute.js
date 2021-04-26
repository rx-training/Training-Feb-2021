// import modules
const router = require('express').Router();

const feesRoute = require('./fees/feesRoute');
const resultsRoute = require('./results/resultRoute');

const {getStudents, addStudent, deleteStudent, updateStudent} = require('../../controllers/studentController')

// routes

// get all students
// GET http://localhost:3000/students
router.get('/', getStudents);

// get a student
// GET http://localhost:3000/students/:id
router.get('/:id', getStudents);

// add a student
// POST http://localhost:3000/students
router.post('/', addStudent);

// update a student
// PUT http://localhost:3000/students/:id
router.put('/:id', updateStudent);

// delete a student
// DELETE http://localhost:3000/students/:id
router.delete('/:id', deleteStudent);

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