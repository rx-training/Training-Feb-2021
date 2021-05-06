const express = require('express');
const Employee=require('../../models/Employee');
const childAssignment = require('./empassignments');
const varifyToken=require('../../authentication/varifyAuth');
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
}

router.get('/',varifyToken,Employees.getAllEmp);
router.get('/:id',varifyToken,Employees.getEmp);

module.exports = router;