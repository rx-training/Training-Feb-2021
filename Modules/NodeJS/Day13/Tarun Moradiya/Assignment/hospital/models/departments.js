//import modules
const mongoose = require('mongoose');
const Joi = require('joi')

//create schema
const departmentSchema = new mongoose.Schema({
    no: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    }
});

//create class
const Department = mongoose.model('Department', departmentSchema);

//validate
async function validateDep(department) {
    const schema = Joi.object({
        no: Joi.number().required(),
        name: Joi.string().required()
    })

    return await schema.validate(department);
}

//exports
module.exports = {
    validateDep, 
    Department
}