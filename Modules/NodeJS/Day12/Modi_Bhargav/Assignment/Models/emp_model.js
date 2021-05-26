const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  empId: {
    type: Number,
    required: true
  },
  firstName: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 20
  },
  middleName: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 20
  },
  lastName: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 20
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
    lowercase: true
  },
  hireDate: {
    type: Date,
    default: Date.now
  },
  phoneNumber: {
    type: Number,
    validate: {
      validator: function (v) {
        return /\d{10}/.test(v);
      },
      message: props => `${props.value} please your phone number length max 10 Number`
    },
    required: [true, 'User phone number required']
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  Country: {
    type: String,
    required: true,
    enum: ["India"]
  },
  Assignment: [{
    AssignmentId : {
      type: Number,
      required: true
    },
    AssignmentName: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 20
    },
    AssignmentStatus: {
      type: String,
      required: true,
      enum:["None","Completed"]
    }
  }
]
  // Assignment:{
  //   type:Array,
  //   required:true,
  //   minlength:4,
  //   maxlength:10
  // }
})

const Employee = mongoose.model('Employees', employeeSchema)

module.exports = Employee