const mongoose = require('mongoose')//Import required modules

//create assignmentSchema
const assignmentSchema = mongoose.Schema({
    Assignment_id: 
    {
        type:String,
        required:true
    },
    AssignmentCategory: 
    {
        type:String,
        required:true
    },
    AssignmentName: 
    {
        type:String,
        required:true
    },
    AssignmentProjectEndDate: 
    {
        type:Date,
        required:true
    },
    AssignmentStats: 
    {
        type:Boolean,
        required:true
    }
    ,
    endTime: 
    {
        type:String,
        required:true
    },
    JobId:
    {
        type:Number,
        required:true
    },
    LastUpdated:
    {
        type:Date,
        required:true
    },
    Location:
    {
        type:String,
        required:true
    },
    ManagerAssistant:
    {
        type:String,
        required:true
    },
    ManagerID:
    {
        type:Number,
        required:true
    }
});

const empSchema = new mongoose.Schema({
    
        Emp_ID:
        {
            type:Number,
            required:true
        } 
        ,
        addressline1:
        {
            type:String,
            required:true
        },
        addressline2:
        {
            type:String,
            required:true
        } ,
        assignment: [assignmentSchema],      
    
        citizenship: {
            CitizenshipId:
            {
                typr:Number,
                required:true
            },
            CitizenshipLegislationCode:
            {
                typr:Number,
                required:true
            }
        },
        city: 
        {
            type:String,
            required:true
        },
        CorespondusLanguage:
        {
            type:String,
            required:true
        },
        country:
        {
            type:String,
            required:true
        },
        DOB: 
        {
            type:Date,
            required:true
        },
        licence: {
            licence_id:
            {
                type:number,
                required:true
            },
            licenceExpirationDate:
            {
                type:Date,
                required:true
            },
            licence_no: 
            {
                type:number,
                required:true
            }
        },
        gender:
        {
            type:String,
            required:true
        },
        HireDate: 
        {
            type:Date,
            required:true,
        },
        mobileno: 
        {
            type:Number,
            required:true
        },
        lastName:
        {
            type:String,
            required:true
        },
        MaritalStatus: 
        {
            type:String,
            required:true
        }
    

});
// create employee model
const Employee = mongoose.model('Employee',empSchema)

//export employee model
module.exports = Employee