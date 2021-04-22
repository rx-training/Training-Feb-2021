//import modules
const express = require('express')
const router = express.Router()
const {getdoctors,getDoctorById,addNewDoctor,upadteDoctor,deleteDoctor} = require('../controllers/doctor')

//get doctors
router.get('/',getdoctors)

//get doctor by Id
router.get('/:id',getDoctorById)

//addnew doctor
router.post('/',addNewDoctor)

//update doctor
router.put('/:id',upadteDoctor)

//delete router
router.delete('/:id',deleteDoctor)

module.exports = router