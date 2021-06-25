//import modules
const router = require('express').Router(); 

const {getDoctors, addDoctor, updateDoctor, deleteDoctor} = require('../../../controllers/doctorController');
const patients = require('./patientsReport');

const admin = require('../../../middlewares/admin');

//routes

//get all doctors
//GET http://localhost:3000/doctors
router.get('/', getDoctors);

//get doctor
//GET http://localhost:3000/doctors/:id
router.get('/:id', getDoctors);

//add doctor
//POST http://localhost:3000/doctors
router.post('/', addDoctor);

//update doctor
//PUT http://localhost:3000/doctors/:id
router.put('/:id', admin, updateDoctor);

//delete doctor
//DELETE http://localhost:3000/doctors/:id
router.delete('/:id', admin, deleteDoctor);


//child routes

// http://localhost:3000/doctors/:id/patients
router.use('/:id/patients', (req, res, next) => {
    req.docId = req.params.id;
    next();
}, deleteDoctor);


//exports
module.exports = router;