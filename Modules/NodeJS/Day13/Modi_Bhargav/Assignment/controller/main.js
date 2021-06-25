const express = require('express');
const router = express.Router();

const Doctor = require("./DoctorsData/doctor")
const Medicine = require("./medicalData/medicine")
const Patient = require("./PatientData/patient")

router.use('/doctor',Doctor)
router.use('/medicine',Medicine)
router.use('/patient',Patient)

module.exports = router