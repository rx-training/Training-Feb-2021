const mongoose=require('mongoose');
const Joi=require('joi');
const Schema=mongoose.Schema;

const DoctorSchema=new Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30
    },
    specialization:{
        type:String,
        required:true,
        minlength:4,
        maxlength:30
    },
    phoneno:{
        type:String,
        required:true,
        minlength:5,
        maxlength:20
    },
    joindate:{
        type:Date,
        required:true,
        default:Date.now
    }
});

function validateDoctor(doctor){
    const schema=Joi.object({
        name:Joi.string().required(),
        specialization:Joi.string().required(),
        phoneno:Joi.string().required(),
        joindate:Joi.date()
    });
    return schema.validate(doctor);
}


exports.Doctor = Doctor = mongoose.model('doctor',DoctorSchema);
exports.validate = validateDoctor;