//import modules
const mongoose = require('mongoose');
const Joi = require('joi');

const Assistant = require('./assistants');
const Doctor = require('./doctors')

//create class
const Patient = mongoose.model('Patient', new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    contact: Number,
    doctors: [{
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Doctor'
        },
        drugs: {
            morning: [String],
            afternoon: [String],
            night: [String]
        },
        report: String
    }],
    assistants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assistant'
    }]
}));

//validate
async function validatePatient(patient) {
    const schema = Joi.object({
        name: Joi.string().required(),
        contact: Joi.number(),
        doctors: Joi.array().items(Joi.object({
            doctor: Joi.objectId(),
            drugs: Joi.object({
                morning: Joi.array(),
                afternoon: Joi.array(),
                night: Joi.array(),
            }),
            report: Joi.string()
        })),
        assistants: Joi.array().items(Joi.objectId)
    })
}

//exports
module.exports = {
    Patient,
    validatePatient
};