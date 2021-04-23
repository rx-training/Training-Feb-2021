const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  docId: {
    type: Number,
    required: true
  },
  doctorName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20
  },
  DepartMent: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  qualification: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  Address: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    validate: {
      validator: function (v) {
        return /\d{10}$/g.test(v);
      },
      message: props => `${props.value} please your phone number length max 10 Number`
    },
    required: [true, 'User phone number required']
  }
})

const Doctor = mongoose.model('Doctors', doctorSchema)

module.exports = Doctor
