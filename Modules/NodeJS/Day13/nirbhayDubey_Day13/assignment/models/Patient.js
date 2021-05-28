const Joi = require('joi');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const DoctorSchema=new Schema({
    _id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'doctor',
        required:true
    },
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30
    },
    phoneno:{
        type:String,
        required:true,
        minlength:5,
        maxlength:20
    } 
});

const HealthcareAssistSchema=new Schema({
    _id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'healthcareassist',
        required:true
    },
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30
    },
    phoneno:{
        type:String,
        required:true,
        minlength:5,
        maxlength:20
    } 
});

const PatientSchema=new Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30
    },
    age:{
        type:Number,
        required:true,
        min:0,
        max:200
    },
    gender:{
        type:String,
        required:true,
        minlength:3,
        maxlength:10
    },
    dateadmit:{
        type:Date,
        required:true,
        default:Date.now
    },
    dateout:{
        type:Date,
    },
    docassign:{
        type:[DoctorSchema],
        required:true
    },
    deptassign:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'department',
        required:true
    },
    healthcare:{
        type:[HealthcareAssistSchema],
        required:true
    },
    morningdrug:{
        type:Array,
    },
    noondrug:{
        type:Array,
    },
    nightdrug:{
        type:Array,
    }
});

function validatePatient(patient){
    const schema=Joi.object({
        name:Joi.string().required(),
        age:Joi.number().required(),
        gender:Joi.string().required(),
        dateadmit:Joi.date(),
        dateout:Joi.string(),
        docassign:Joi.array().required(),
        deptassign:Joi.objectId().required(),
        healthcare:Joi.array().required(),
        morningdrug:Joi.array(),
        noondrug:Joi.array(),
        nightdrug:Joi.array()
    });
    return schema.validate(patient);
}

exports.Patient = Patient = mongoose.model('patient',PatientSchema);
exports.validate = validatePatient;