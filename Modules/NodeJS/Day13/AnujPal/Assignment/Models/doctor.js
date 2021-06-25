const { string } = require('joi');
const mongoose = require('mongoose');
const department=require("../Models/department");
const Department=mongoose.model('Department',department);
const Patient=require("../Models/patient");
const doctorSchema=new mongoose.Schema({
    doctorName : {
        type : String,
        required : true,
        unique:true
    },
 

    DID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Department'
    },
    PID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    }
})

module.exports=doctorSchema;