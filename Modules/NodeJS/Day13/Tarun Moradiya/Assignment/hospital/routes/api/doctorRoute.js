//import modules
const router = require('express').Router(); 

const {getDoctors, addDoctor, updateDoctor, deleteDoctor} = require('../../controllers/doctorController');

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
//PUT http://localhost:3000/doctors
router.put('/:id', updateDoctor);

//delete doctor
//DELETE http://localhost:3000/doctors
router.delete('/:id', deleteDoctor);

//exports
module.exports = router;