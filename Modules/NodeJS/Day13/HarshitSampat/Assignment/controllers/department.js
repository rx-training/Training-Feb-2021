//import modules
const express = require('express')
const router =express.Router()
const {Department,validateDepartment} = require('../Models/departments')

//get all depatment

exports.getDepartments =async function (req,res){
    //find all departments
   if(req.params.id){
    //find department with id
    const department = await Department.findById(req.params.id)
    res.send(department)

   }
    else{ 
        const departments = await Department.find()

    //send response 
    res.send(departments)
   }
} 

exports.addDepartments = async function(req,res){
    //validate department
    const validateInput = validateDepartment(req.body)

    //error handeler
    if(validateInput.error) return res.status(400).send(result.error);

    //create department
    const department = new Department({
        departmentName:req.body.departmentName,
        departmentNo:req.body.departmentNo,
        departmentContactNo:req.body.departmentContactNo
        })
        await department.save()

        //save response
        res.send(department)
}

