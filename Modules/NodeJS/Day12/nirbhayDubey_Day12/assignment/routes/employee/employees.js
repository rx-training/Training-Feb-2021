const express = require('express');
const Joi = require('joi');
const Employee=require('../../models/Employee');
const childAssignment = require('./empassignments');
const varifyToken=require('../../authentication/varifyAuth');
const { route } = require('./empassignments');
const router = express.Router();

router.use('/:id/child/assignments',childAssignment);

class Employees {
    
    static async getAllEmp(req, res) {
        const data=await Employee.find();
        res.status(200).json(data);
    }

    static async getEmp(req, res) {
        const data=await Employee.find({ EmpId:req.params.id });
        res.json(data);
    }

    static async updateEmp(req, res) {
        let upEmp = req.body;
        let upEmpId = parseInt(upEmp.EmpId);
        if (!isNaN(upEmpId)) {
            let cemp=await Employee.findOne({ EmpId:upEmpId });
            let dt = new Date;
            cemp.set({
                AddressLine1: (upEmp.AddressLine1 != undefined) ? upEmp.AddressLine1 : cemp.AddressLine1,
                AddressLine2: (upEmp.AddressLine2 != undefined) ? upEmp.AddressLine2 : cemp.AddressLine2,
                AddressLine3: (upEmp.AddressLine3 != undefined) ? upEmp.AddressLine3 : cemp.AddressLine3,
                assignments: (upEmp.assignments != undefined) ? upEmp.assignments : cemp.assignments,
                CitizenshipId: (upEmp.CitizenshipId != undefined) ? upEmp.CitizenshipId : cemp.CitizenshipId,
                City: (upEmp.City != undefined) ? upEmp.City : cemp.City,
                Country: (upEmp.Country != undefined) ? upEmp.Country : cemp.Country,
                DateOfBirth: (upEmp.DateOfBirth != undefined) ? upEmp.DateOfBirth : cemp.DateOfBirth,
                DriversLicenseExpirationDate: (upEmp.DriversLicenseExpirationDate != undefined) ? upEmp.DriversLicenseExpirationDate : cemp.DriversLicenseExpirationDate,
                DriversLicenseId: (upEmp.DriversLicenseId != undefined) ? upEmp.DriversLicenseId : cemp.DriversLicenseId,
                DriversLicenseIssuingCountry: (upEmp.DriversLicenseIssuingCountry != undefined) ? upEmp.DriversLicenseIssuingCountry : cemp.DriversLicenseIssuingCountry,
                FirstName: (upEmp.FirstName != undefined) ? upEmp.FirstName : cemp.FirstName,
                Gender: (upEmp.Gender != undefined) ? upEmp.Gender : cemp.Gender,
                HireDate: (upEmp.HireDate != undefined) ? upEmp.HireDate : cemp.HireDate,
                HomePhoneCountryCode: (upEmp.HomePhoneCountryCode != undefined) ? upEmp.HomePhoneCountryCode : cemp.HomePhoneCountryCode,
                HomePhoneNumber: (upEmp.HomePhoneNumber != undefined) ? upEmp.HomePhoneNumber : cemp.HomePhoneNumber,
                LastName: (upEmp.LastName != undefined) ? upEmp.LastName : cemp.LastName,
                LastUpdateDateTime: `${dt.getFullYear()}-${dt.getMonth()+1}-${dt.getDate()} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`,
                MaritalStatus: (upEmp.MaritalStatus != undefined) ? upEmp.MaritalStatus : cemp.MaritalStatus,
                MiddleName: (upEmp.MiddleName != undefined) ? upEmp.MiddleName : cemp.MiddleName
            });
            const result=await cemp.save();
            res.status(200).json({
                msg:"Employee data updataed successfully",
                emp:result
            });
        }
    }

    static async insertEmp(req, res) {
        const schema=Joi.object({
                EmpId:Joi.number().required(),
                AddressLine1: Joi.string().required(),
                assignments: Joi.array().required(),
                CitizenshipId: Joi.string(),
                City: Joi.string().required(),
                Country: Joi.string().required(),
                DateOfBirth: Joi.string().required(),
                DriversLicenseExpirationDate: Joi.string().required(),
                DriversLicenseId: Joi.string().required(),
                DriversLicenseIssuingCountry: Joi.string().required(),
                FirstName: Joi.string().required(),
                Gender: Joi.string().required(),
                HireDate: Joi.string().required(),
                HomePhoneCountryCode: Joi.string().required(),
                HomePhoneNumber: Joi.string().required(),
                LastName: Joi.string().required(),
                LastUpdateDateTime: Joi.date(),
                MaritalStatus: Joi.string().required(),
                MiddleName:Joi.string().required()
        });
        const temp=await schema.validate(req.body);
        if(temp.error){
            res.status(400).send(temp.error.details[0].message);
            return;
        }
        else{
            const emp=new Employee(temp.value);
            try{
                const result=await emp.save();
                res.status(200).send("Employee added successfully.."+result);
            }catch(ex){
                console.log(ex.message);
            }
        }
    }
}

router.get('/',varifyToken,Employees.getAllEmp);
router.get('/:id',varifyToken,Employees.getEmp);
router.put('/',varifyToken,Employees.updateEmp);
router.post('/',varifyToken,Employees.insertEmp);

module.exports = router;