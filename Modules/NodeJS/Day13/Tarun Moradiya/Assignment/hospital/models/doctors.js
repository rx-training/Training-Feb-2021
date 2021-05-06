//import modules
const mongoose = require('mongoose');
const Joi = require('joi');

const {Department} = require('./departments'); 

//create schema
const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        unique: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    }
});

//create class
const Doctor = mongoose.model('Doctor', doctorSchema);

//validate
async function validateDoc(doctor) {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        department: Joi.objectId().required(),
    })

    return await schema.validate(doctor);
}


//exports
module.exports = {
    Doctor,
    validateDoc
};