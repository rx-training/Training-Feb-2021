//import modules
const mongoose = require('mongoose')
const Joi = require('joi')
const { Department } = require('./departments')

//create schema
const assistantSchema = new mongoose.Schema({

    assistantName: {
        type: String,
        required :true
    },
    assistantEmail: {
        type: String,
        required:true,
        unique: true
    },
    assistantNo: {
        type: Number,
        required: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    }
});

//create model
const Assistant = mongoose.model('assistant', assistantSchema)

//validation function
async function validateAssistant(assistant) {
const schmea = Joi.object({
    assistantName : Joi.string().required(),
    assistantEmail : Joi.string().required().email(),
    assistantNo :Joi.number().required(),
    department :Joi.ObjectId().required(),
})
        
}

//export module
module.exports = { Assistant, validateAssistant }
