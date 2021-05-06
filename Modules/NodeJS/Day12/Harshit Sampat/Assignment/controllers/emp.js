const express = require('express')

//const fs = require('fs')

const router = express.Router()

//const employees = require('./empDetails.json')

//const assignment = require('./child/assignments')

const Employee = require('../Model/employee')



//get all Employee
exports.getAllEmployee = async function(req,res){
        const employees =await Employee.find()
        res.send(employees)
    };
//get employee by id

exports.getEmployeebyId = async function(req,res){
         try{
        //compare Emp_id to req id
        const emp = await Employee.findById(req.params.id)
        if (!emp) res.send(`Emp with ${req.params.id} is not found`)

        res.send(emp)
         }
         catch(err){
             console.error(err)
         }
        };

//create new employee
exports.addEmployee = async function(req,res){
    try{
        const newEmployee = new Employee({
            Emp_Id: Employee.length + 1,
            addressline1: req.body.addressline1,
            addressline2: req.body.addressline2,
            assignment: [],
            citizenship: {

                CitizenshipId: req.body.CitizenshipId,
                CitizenshipLegislationCode: req.body.CitizenshipLegislationCode
            },
            city: req.body.city,
            CorespondusLanguage: req.body.CorespondusLanguage,
            country: req.body.country,
            DOB: req.body.DOB,
            licence: {
                licence_id: req.body.licenece_id,
                licenceExpirationDate: req.body.licenceExpirationDate,
                licence_no: req.body.licence_no
            },
            gender: req.body.gender,
            HireDate: req.body.HireDate,
            mobileno: req.body.mobileno,
            lastName: req.body.lastName,
            MaritalStatus: req.body.MaritalStatus
        })
        //save newemployee to database
        employee = await newEmployee.save()
        
        res.send(employee)
        }
    
    
catch(err){
    console.error(err)
} 
};
//update Employee
exports.updateEmployee = async function(req,res){
        
        const id = req.params.id

        //search employee
        const employee = await Employee.findById(req.params.id)

        if (!id) return res.send('`Employee not found')

        if (req.body.addressline1) employee.addressline1 = req.body.addressline1
        if (req.body.addressline2) employee.addressline2 = req.body.addressline2
        if (req.body.citizenship) employee.citizenship = req.body.citizenship
        if (req.body.CorespondusLanguage) employee.CorespondusLanguage = req.body.CorespondusLanguage
        if (req.body.country) employee.country = req.body.country
        if (req.body.DOB) employee.DOB = req.body.employee
        if (req.body.Licences) employee.licence = req.body.licence
        if (req.body.HireDate) employee.HireDate = req.body.HireDate
        if (req.body.mpbileno) employee.mobileno = req.body.mobileno
        if (req.body.lastName) employee.lastName = req.body.lastName
        if (req.body.MaritalStatus) employee.MaritalStatus = req.body.MaritalStatus

        employee = await employee.save()
        res.send(employee)
    };

    //delete employee
exports.deleteEmployee = async function(req,res){

    //search  employee id in employes
        const employee = Employee.findByIdAndRemove(req.params.id)       
        if (!id) res.send(` ${id} Not found!`)
        
        res.send(employee)
        };
    

//get all assignment
exports.getAllAssignment = async function(req,res){
        try{
        //check assignment
        const employee =await Employee.find(req.params.id)
        res.send(employee.assignment)
        }
        catch(err){
            console.error(err)
        }    
    }
    //add new assignment

exports.addNewAssignment = async function(req,res){
        const id = req.Emp_Id
        //search employee by it's id
        const existEmp = employee.find(req.params.Emp_Id)
        console.log(existEmp)

        const newAssignment = { 
                    Assignment_id : existEmp.assignment.length+1,   
                    AssignmentCaegory: req.body.AssignmentCaegory,
                    AssignmentName: req.body.AssignmentName,
                    AssignmentProjectEndDate:req.body.AssignmentProjectEndDate, 
                    AssignmentStats:req.body.AssignmentStats,
                    endTime: req.body.endTime,
                    JobId: req.body.JobId,
                    LastUpdated:req.body.LastUpdated,
                    Location: req.body.LastUpdated,
                    ManagerAssistant:req.body.ManagerAssistant,
                    ManagerID: req.body.ManagerID
        }
        existEmp.assignment.push(newAssignment)

        //save employee
        existemp = await existEmp.save()
       
        console.log(existEmp)
        res.send(existEmp)
    };

    //update Existing assignment
exports.updateAssignment = async function(req,res){
        
    
        //search id in 
        const existEmp = await Employee.findById(req.Emp_Id)
        //search assignment
        const assignment =await Employee.assignment.id(req.params.id)
    
        //const assignment = existEmp.assignment.find(c=>c.Assignment_id===id)
                    if(!assignment)return res.send(`assignment with ${id} not found`)
                    if(req.body.AssignmentCaegory) assignment.AssignmentCaegory = req.body.AssignmentCaegory
                    if(req.body.AssignmentName)assignment.AssignmentName= req.body.AssignmentName
                    if(req.body.AssignmentProjectEndDate)assignment.AssignmentProjectEndDate=req.body.AssignmentProjectEndDate 
                    if(req.body.AssignmentStats)assignment.AssignmentStats=req.body.AssignmentStats
                    if(req.body.endTime)assignment.endTime= req.body.endTime
                    if(req.body.JobId)assignment.JobId= req.body.JobId
                    if(req.body.LastUpdated)assignment.LastUpdated=req.body.LastUpdated
                    if(req.body.Location)assignment.Location= req.body.LastUpdated
                    if(req.body.ManagerAssistant)assignment.ManagerAssistant=req.body.ManagerAssistant
                    if(req.body.ManagerID)assignment.ManagerID= req.body.ManagerID
    
                    existEmp = await employee.save();
                    res.send(existEmp)
    };
    //delete assignment
exports.deleteAssignment = async function(req,res){
        

        const  existEmp = await Employee.findById(req.Emp_Id)
        
        existEmp.assignment.id(req.paramas.id).remove
       // if(!assignment) return res.send('Id not found ')

        res.send(existEmp)

        };



    
