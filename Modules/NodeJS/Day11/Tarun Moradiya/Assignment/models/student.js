// import modules
const mongoose = require('mongoose');

//create schema

//parent schema
const studentSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Fees: {
        Amount: {
            type: Number,
            required: true
        },
        PaymentDate: Date,
        Status: {
            type: Boolean,
            required: true
        }
    },
    Result: {
        Hindi: {
            type: Number,
            required: true
        },
        Eng: {
            type: Number,
            required: true
        }, 
        Math: {
            type: Number,
            required: true
        },
        Total: {
            type: Number,
            required: true
        },
        Grade: {
            type: String,
            required: true
        },
    }
});

//create class model
const Student = mongoose.model('Student', studentSchema)

// exports
module.exports = Student;