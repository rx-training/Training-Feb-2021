const mongoose = require('mongoose')
const Joi = require('joi')

const { Department } = require('./departments')

const doctorSchema = new mongoose.Schema({
    doctorName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    phoneNo: {
        type: Number,
        required: true
    },
    Department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
    }
});

//create model
const Doctor = mongoose.model('Doctor', doctorSchema);

//validat funcion
async function validateDoctor(doctor) {
    const Schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        phoneNo: Joi.number().required(),
        Department: Joi.objectId().required(),
    })
    return await Schema.validate(doctor)
}

module.exports = { Doctor, validateDoctor }