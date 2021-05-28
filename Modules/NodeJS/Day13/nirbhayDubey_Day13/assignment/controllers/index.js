const express=require('express');
const doctorRoute=require('./doctors/doctor');
const patientRoute=require('./patients/patient');
const departmentRoute=require('./departments/department');
const healthcareAssistRoute=require('./healthcareassist/healthcare');
const router=express.Router();
 
router.use('/api/doc',doctorRoute);
router.use('/api/patient',patientRoute);
router.use('/api/healthcare',healthcareAssistRoute);
router.use('/api/department',departmentRoute);

module.exports = router;
