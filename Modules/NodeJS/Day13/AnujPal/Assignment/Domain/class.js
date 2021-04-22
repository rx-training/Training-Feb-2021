const mongoose = require('mongoose');
const ha = require("../Models/healthassistant")
const HA = mongoose.model('HA', ha)
const department = require("../Models/department");
const Department = mongoose.model('Department', department);
const patient = require("../Models/patient");
const Patient = mongoose.model('Patient', patient);
const doctor = require("../Models/doctor");
const Doctor = mongoose.model('Doctor', doctor)

class Assignment {
    static async start(req, res) {
        res.json("Welcome to my API");
    }

    static async postHA(req, res) {
        const ha = new HA({
            HAID: req.body.HAID,
            HAName: req.body.HAName,
            DID: req.body.DID,
            PID: req.body.PID

        })
        const a1 = await ha.save();
        res.json(ha);
    }

    static async insertDepartment(req, res) {
        const department = new Department({
            deptID: req.body.deptID,
            deptName: req.body.deptName
        })
        const a1 = await department.save();
        res.json(department);
    }

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

    static async getAllPatients(req, res) {
        const patients = Patient.find()
        await res.json(patients);
    }

    static async getPatientById(req, res) {
        const patients = Patient
            .find({ patientID: req.params.pid })

        await res.json(patients);
    }

    static async updateDoctor(req, res) {
        const doctor = Doctor.findById({ _id: req.params.did })
        doctor.doctorName = req.body.doctorName
        const a1 = doctor.save();
        await res.json(a1);
    }

    static async deleteDoctor(req, res) {
        const doctor = Doctor.findByIdAndDelete({ _id: req.params.did })
        await res.json(doctor);
    }

    static async doctorByDid(req, res) {
        const doctor = Doctor.findById({ _id: req.params.did });
        await res.json(doctor);
    }

    static async getMedicines(req, res) {
        const patients = Patient
            .find({ patientID: req.params.pid })
        await res.json(patients[0].medicines);
    }

    static async patientStatus(req, res) {
        const doctor = await Doctor.find({ _id: req.params.did })
            .populate('DID', 'deptName -_id')
            .populate('PID', 'patientName condition -_id')
            .select('doctorName')
        res.json(doctor);
    }

    static async summary(req, res) {
        const doctor = await Doctor.find({ _id: req.params.did })
            .populate('DID')
            .populate('PID',)

        await res.json(doctor);
    }

}

module.exports = Assignment;