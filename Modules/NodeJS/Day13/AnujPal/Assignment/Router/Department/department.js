const express = require('express');
const mongoose = require("mongoose");
const departmentRouter = express.Router();
departmentRouter.use(express())
const department = require("../../Models/department");
const Department = mongoose.model('Department', department)



class demoDepartment {
    static async insertDepartment(req, res) {
        const department = new Department({
            deptID: req.body.deptID,
            deptName: req.body.deptName
        })
        const a1 = await department.save();
        res.json(department);
    }

    static async getAllDepartment(req, res) {
        const departments = Department.find()
        await res.json(departments);
    }

    static async getDepartmentById(req, res) {
        const department = Department.find({ deaprtmentNo: req.params.deaprtmentNo })
        await res.json(departments);
    }


}
// API  for inserting the new department
departmentRouter.post("/insertDepartment", demoDepartment.insertDepartment)

// API for get all the departments in the system
departmentRouter.get("/getAllDepartments", demoDepartment.getAllDepartment)

// API for the getting department by ID
departmentRouter.get("/getDepartmentById", demoDepartment.getDepartmentById)





module.exports = departmentRouter;