const express = require('express');
const { Mongoose } = require('mongoose');
const patientRouter = express.Router();
patientRouter.use(express())
const patient=require("../../Models/patient");
const Patient = mongoose.model('Patient', patient)

class demoPatient {
    static async insertPatient(req, res) {
        const patient = new Patient({
            patientID: req.body.PID,
            patientName: req.body.PName,
            doctors: req.body.doctors,
            medicines: req.body.medicines,
            condition: req.body.condition
        })
        const a1 = await patient.save();
        res.json(patient);
    }

    static async getAllPatients(req, res) {
        const patients = Patient.find()
        await res.json(patients);
    }

    static async getPatientById(req, res) {
        const patients = Patient
            .find({ patientID: req.params.pid })

        await res.json(patients);
    }

    static async patientStatus(req, res) {
        const doctor = await Doctor.find({ _id: req.params.did })
            .populate('DID', 'deptName -_id')
            .populate('PID', 'patientName condition -_id')
            .select('doctorName')
        res.json(doctor);
    }

    static async getMedicines(req, res) {
        const patients = Patient
            .find({ patientID: req.params.pid })
        await res.json(patients[0].medicines);
    }
}

// API for the inserting a new patient
patientRouter.post("/insertPatient", demoPatient.insertPatient)

// API for getting all the information about the patient.
patientRouter.get("/getAllPatients/", demoPatient.getAllPatients)

// API for getting info about particular patient by it's patient id
patientRouter.get("/getPatient/:pid", demoPatient.getPatientById)

//API fir getting the status if patient
patientRouter.get("/getStatus/:did", demoPatient.patientStatus)

// API for getting the all info of medicines of patient
patientRouter.get("/getPatient/medicines/:pid", demoPatient.getMedicines)



module.exports = patientRouter;