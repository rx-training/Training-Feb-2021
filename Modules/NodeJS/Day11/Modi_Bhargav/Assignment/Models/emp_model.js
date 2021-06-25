const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Project', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to Employee MongoDB..."))
  .catch(err => console.error("Could not connect to mongoDB...", err))

const employeeSchema = new mongoose.Schema({
  empId: {
    type: Number,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  middleName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  hireDate: {
    type: Date,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
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
    required: true
  },
  // Assignment: [
  //   {
  //     AssignmentId: Number,
  //     AssignmentName: String,
  //     AssignmentStatus: String
  //   }]
  Assignment: {
    type: Array,
    required: true
  }
})

const Employee = mongoose.model('Employees', employeeSchema)

module.exports = Employee