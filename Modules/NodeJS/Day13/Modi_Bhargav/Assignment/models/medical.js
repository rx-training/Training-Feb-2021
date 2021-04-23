const mongoose = require('mongoose');

const medicalSchema = new mongoose.Schema({
  medId: {
    type: Number,
    required: true
  },
  medicineName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  DayRoutine: [{
    type: String,
    required: true,
    enum: ["morning", "afternoon", "night"],
    lowercase: true
  }]
})

const Medical = mongoose.model('Medicals', medicalSchema)

module.exports = Medical