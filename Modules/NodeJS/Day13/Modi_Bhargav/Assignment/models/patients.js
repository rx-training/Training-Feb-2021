const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  Id: {
    type: Number,
    required: true
  },
  patientName: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 10
  },
  Address: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    validate: {
      validator: function (v) {
        return /^\d{10}/.test(v);
      },
      message: props => `${props.value} please your phone number length max 10 Number`
    },
    required: [true, 'User phone number required']
  },
  Doctors:[{
    type:mongoose.Schema.Types.ObjectId,
    ref: "Doctors"
  }],
  MedicineList:[{
    type:mongoose.Schema.Types.ObjectId,
    ref: "Medicals"
  }]
})

const Patient = mongoose.model('Patients', patientSchema)

module.exports = Patient