//import modules
const mongoose = require('mongoose')

const Joi = require('joi')

const departmentSchema = new mongoose.Schema({
    departmentName:{
        type:String,
        required:true
    },
    departmentNo:{
        type:Number,
        required:true,
        unique:true
    },
    departmentContactNo:{
        type:Number,
        required:true
    }
});

// create model
const Department = mongoose.model('Department',departmentSchema);

//validation  function
async function validateDepartment(department){
    const Schema = Joi.object({
        departmentName:Joi.string().required(),
        departmentNo:Joi.number().required()
    })
    return await Schema.validate(department)
}

//exports 
module.exports={Department,validateDepartment}

