const express = require('express')
const doctorRouter = express.Router();
const mongoose = require('mongoose')
const doctor = require("../../Models/doctor");
const Doctor = mongoose.model('Doctor', doctor)
doctorRouter.use(express())

class DemoDoctor {
    static async inserDoctor(req, res) {
        const doctor = new Doctor({
            doctorName: req.body.doctorName,
            DID: req.body.DID,
            PID: req.body.PID
        })
        const a1 = await doctor.save();
        res.json(doctor);
    }

    static async getAllDoctors(req, res) {
        const doctors = await Doctor
            .find()
            .populate('DID', 'deptName -_id')
            .populate('PID', 'patientName -_id')
            .select('doctorName -_id');

        await res.json(doctors);
    }

    static async doctorByDid(req, res) {
        const doctor = Doctor.findById({ _id: req.params.did });
        await res.json(doctor);
    }

    static async deleteDoctor(req, res) {
        const doctor = Doctor.findByIdAndDelete({ _id: req.params.did })
        await res.json(doctor);
    }

    static async summary(req, res) {
        const doctor = await Doctor.find({ _id: req.params.did })
            .populate('DID')
            .populate('PID',)

        await res.json(doctor);
    }


}
// API for inserting new doctor
doctorRouter.post("/insertDoctor", DemoDoctor.inserDoctor)

// API for getting all the doctors
doctorRouter.get("/getAllDoctors", DemoDoctor.getAllDoctors)

// API for getting a paticular doctor by it's unique id
doctorRouter.get("/getDoctors/:did", DemoDoctor.doctorByDid)

// API fordeleting a doctor
doctorRouter.delete("/deleteDoctor/:did", DemoDoctor.deleteDoctor);

//  API for getting  summary report of a doctor
doctorRouter.get("/summary/:did", DemoDoctor.summary)






module.exports = doctorRouter;