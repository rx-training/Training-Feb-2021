const mongoose = require('mongoose');
const {Doctor} = require("./doctors")
const {Assistant} = require("./healthassistant")
const {Medicine} = require("./medicine")

const patientSchema = new mongoose.Schema({
    pid: Number,
    name: String,
    description: String,
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },
    assistant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Assistant"
    },
    medicine: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Medicine"
    }
})

const Patient = mongoose.model("Patient",patientSchema)

exports.patientSchema = patientSchema
exports.Patient = Patient