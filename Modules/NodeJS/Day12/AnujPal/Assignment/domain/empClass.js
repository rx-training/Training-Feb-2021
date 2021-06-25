const fs = require('fs');
const expres = require('express');
const app = expres();
const jwt = require('jsonwebtoken');
const emp = require('../Models/employee');
app.use(expres())

class employee {
    static async employeelist(req, res) {
        try {
            const employees = await emp.find();
            res.json(employees);
        }
        catch (err) {
            res.json(err.message);
        }
    }

    static async employeeByID(req, res) {
        try {
            const employee = await emp.find({ empID: req.params.id });
            if(employee.length==0) throw new Error('Employee Not Found!!!!!!!!');
            res.json(employee);
        }
        catch (err) {
            res.json(err.message);
        }

    }

    static getToken(req, res) {

        // Mock user

        jwt.sign({}, 'secretkey', { expiresIn: '300s' }, (err, token) => {
            res.json({
                token
            });
        });

    }
    static async emppost(req, res) {
        const employee = new emp({
            empID : req.body.empID,
            name: req.body.name,
            assignments: req.body.assignments
        });
        try {
            const a1 = await employee.save();
            res.json(a1);
        }
        catch (err) {

            res.json(err.message);


        }


    }

    static async empdelete(req, res) {
        try {
            const employee = await emp.deleteOne({ empID: req.params.id })
            if(employee.deletedCount==0) throw new Error('Employee not found')
            res.send("Employee deleted");
        }
        catch (err) {
            res.json(err.message);
        }



    }

    static async empput(req, res) {


        try {
            const employee = await emp.updateOne({ empID: req.params.id }, {
                $set: {
                    name: req.body.name
                }
            })
            res.json(employee);
        } 
        catch (err) {
            res.json(err.message);
        }

    }
}

module.exports = employee;