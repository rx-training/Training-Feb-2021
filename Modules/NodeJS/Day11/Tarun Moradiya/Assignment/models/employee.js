// import modules
const mongoose = require('mongoose');

//create schema

//child schema
const assignmentSchema = new mongoose.Schema({
    assignmetName: {
        type: String,
        required: true
    },
    departmentId: {
        type: Number,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
});

//parent schema
const employeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female']
    },
    assignments: [ assignmentSchema ] 
});

//create class model
const Employee = mongoose.model('Employee', employeeSchema)

// exports
module.exports = Employee;