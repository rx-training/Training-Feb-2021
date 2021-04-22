const mongoose = require('mongoose');
const express = require('express')
const router = express.Router();

const { Router, response } = require('express');
router.use(express());
var bodyParser = require('body-parser');
const { create } = require('../Models/doctor');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const assignment = require("../Domain/class");

router.get("/", assignment.start);

router.post("/HA", jsonParser, assignment.postHA)

router.post("/insertDepartment", jsonParser, assignment.insertDepartment)

router.post("/insertPatient", jsonParser, assignment.insertPatient)

router.post("/insertDoctor", jsonParser, assignment.inserDoctor)

router.get("/getAllDoctors", jsonParser, assignment.getAllDoctors)

router.get("/getDoctors/:did", jsonParser, assignment.doctorByDid)

router.put("/updateDoctor/:did", jsonParser, assignment.updateDoctor);

router.delete("/deleteDoctor/:did", assignment.deleteDoctor);

router.get("/getAllPatients/", jsonParser, assignment.getAllPatients)

router.get("/getPatient/:pid", jsonParser, assignment.getPatientById)


// FInd all medicines of the patient

router.get("/getPatient/medicines/:pid", jsonParser, assignment.getMedicines)


// For knowing the status of patient
router.get("/getStatus/:did", jsonParser ,assignment.patientStatus)


// Display summary report of Doctor and patient

router.get("/summary/:did", jsonParser,assignment.summary)


module.exports = router;

