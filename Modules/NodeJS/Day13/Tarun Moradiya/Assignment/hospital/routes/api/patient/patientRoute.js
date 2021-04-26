//import modules
const router = require('express').Router(); 

const {getPatient, addPatient, updatePatient, deletePatient} = require('../../../controllers/patientController');
const reportRoute = require('./reportRoute'); 

//routes

//get all patients
//GET http://localhost:3000/patients
router.get('/', getPatient);

//get patient
//GET http://localhost:3000/patients/:id
router.get('/:id', getPatient);

//add patient
//POST http://localhost:3000/patients
router.post('/', addPatient);

//update patient
//PUT http://localhost:3000/patients
router.put('/:id', updatePatient);

//delete patient
//DELETE http://localhost:3000/patients
router.delete('/:id', deletePatient);

//child routes

//get patient report
//GET http://localhost:3000/patients/:id/reports
router.use('/:id/reports', (req, res, next) => {
    req.patientId = req.params.id;
    next();
}, reportRoute);

//exports
module.exports = router;