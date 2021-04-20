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
            res.json("Error");
        }
    }

    static async employeeByID(req, res) {
        try {
            const employee = await emp.find({ empID: req.params.id });
            res.json(employee);
        }
        catch (err) {
            res.json("Error");
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
            empID: req.body.id,
            name: req.body.name,
            assignments: req.body.assignments
        });
        try {
            const a1 = await employee.save();
            res.json(a1);
        }
        catch (err) {
            res.send('Error');
        }


    }

    static async empdelete(req, res) {
        try {
            const employee = await emp.findByIdAndRemove(req.params.id);
            res.send(employee);
        }
        catch (err) {
            res.send('Error');
        }



    }

    static async empput(req, res) {
        try {
            const employee = await emp.findById(req.params.id);
            employee.name = req.body.name;
            const a1 = await employee.save();
            res.json(a1);
        }
        catch (err) {
            console.error("Error Occcured");
        }


    }
}

module.exports = employee;