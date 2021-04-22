const mongoose = require('mongoose');
const patientSchema = new mongoose.Schema({
    patientID: {
        type: Number,
        required: [true, 'You cannot keep deptID blank'],
        unique: [true, 'You cannot Enter the deptID duplicate']
    },
    patientName: {
        type: String,
        required: true,
        unique: true
    },
    doctors: {
        type: [String],
        required: true
    },
    medicines: {
        morning: { type: [String], required: true },
        afternoon: [String],
        night: [String]
    },
    condition: {
        type: String,
        reuired: true

    }
})

module.exports=patientSchema;