//import modules
const router = require('express').Router(); 

const {getPatients} = require('../../../controllers/doctor/patientController');
const patients = require('./patientsReport');

const admin = require('../../../middlewares/admin');

//routes

//all patients
//GET http://localhost:3000/doctors/:docId/patients
router.get('/', getPatients);

//perticular patient patients
//GET http://localhost:3000/doctors/:docId/patients
router.get('/:id', getPatients);


//exports
module.exports = router;