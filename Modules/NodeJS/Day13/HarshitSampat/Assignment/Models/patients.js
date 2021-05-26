//import modules
const mongoose  = require('mongoose')
const Joi = require('joi')
const Doctor = require('./doctors')
const Assistant = require('./asistant')

//create Schema
const patientSchema = new mongoose.Schema({ 
    patientName :{
        type: String,
        required:true
    },
    patientEmail:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    patientContactno:{
        type:Number,
        required:true
    },
    doctors:[{
        doctor:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Doctor'
        },
        medicine:{
            morning:[String],
            afternoon:[String],
            night:[String]
        },
        report:String
    }],
    assistants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Assistant'
    }]
});


//create model
const Paitent = mongoose.model('paitents',patientSchema)

//validate function
async function validatePatient(paitent){
    const Schema = Joi.object({
        patientName:Joi.string().required(),
        patientEmail:Joi.string().required(),
        address:Joi.string().required(),
        patientContactno:Joi.number().required(),
        doctors:Joi.array().items(Joi.object({
            doctor:Joi.objectId(),
            medicine:Joi.object({
                morning:Joi.array(),
                afternoon:Joi.array(),
                night:Joi.array(),
            }),
            report:Joi.string()
        })),
        assistants:Joi.array().items(Joi.ObjectId)
    })
}


//export modules
module.exports = {Paitent,validatePatient}