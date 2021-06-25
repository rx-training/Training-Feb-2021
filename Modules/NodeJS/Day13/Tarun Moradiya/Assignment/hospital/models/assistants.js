//import modules
const mongoose = require('mongoose');
const Joi = require('joi');

const {Department} = require('./departments'); 

//create schema
const assistantSchema = new mongoose.Schema({
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
const Assistant = mongoose.model('Assistant', assistantSchema);

//validate
async function validateAssis(assistant) {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        department: Joi.objectId().required(),
    })

    return await schema.validate(assistant);
}

//exports
module.exports = {
    Assistant,
    validateAssis
};