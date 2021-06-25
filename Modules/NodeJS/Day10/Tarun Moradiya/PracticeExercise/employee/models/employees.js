//import modules
const Joi = require('joi');
const mongoose = require('mongoose');

//create schema
const empSchema = new mongoose.Schema({
    Name: {
        type: String,
        requred: true,
        minlength: 5,
        maxlength: 50
    },
    Address: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    Skills: {
        type: Array,
        validate: {
            validator: function(v) {
                return v && v.length > 0;
            },
            message: 'Employee must have atleast one skill'
        } 
    }
})

//create class 
const Employee = mongoose.model('Employee', empSchema);

//validate function
async function validate(emp) {
    const schema = Joi.object({
        Name: Joi.string()
            .required()
            .min(5)
            .max(50),
        Address: Joi.string()
            .required()
            .min(5)
            .max(50),
        Skills: Joi.array()
            .required()
            .min(1)
    });

    return await schema.validate(emp);
}

//exports
module.exports = {Employee, validate};