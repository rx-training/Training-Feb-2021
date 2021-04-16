const fs=require('fs');
const expres=require('express');
const app=expres();
const jwt=require('jsonwebtoken');
const employees=require("../controller/Parent/employee.json");
const emp = require('../Models/employee');
app.use(expres())

class employee {
    static async employeelist  (req, res) {
        try{
        const employees=await emp.find();
        res.json(employees);
        }
        catch(err)
        {
            res.json("Error");
        }
    }

    static async employeeByID(req, res) {
     const employee= await emp.findById(req.params.id);
     res.json(employee);

    }

    static getToken(req,res)
    {
       
            // Mock user
    
            jwt.sign({}, 'secretkey', { expiresIn: '300s' }, (err, token) => {
              res.json({
                token
              });
            });
         
    }
    static async emppost(req, res) {
        const employee = new emp({
            empID : req.body.id,
            name : req.body.name,
            assignments : req.body.assignments
        });
        try{
            const a1= await employee.save();
            res.json(a1);
        }
        catch(err)
        {
            res.send('Error');
        }

        fs.writeFile('controller/employee.json', JSON.stringify(employees), function (err) {
            if (err) throw new Error('File is not updted');
            console.log('Saved!');
        });
    }

    static empdelete(req, res) {
        const emp = employees.find(c => c.empID === parseInt(req.params.id));
        if (!emp) return res.status(404).send("Employee not found");
        const index = employees.indexOf(emp);
        employees.splice(index, 1);
        console.log(employees);
        res.send(emp);

        fs.writeFile('controller/employee.json', JSON.stringify(employees), function (err) {
            if (err) throw new Error('File is not updted');
            console.log('Saved!');
        });


    }

    static empput(req, res) {
        const emp = employees.find(c => c.empID === parseInt(req.params.id));
        if (!emp) return res.status(404).send("Employee not found");
        emp.city = req.body.city;
        res.send(emp);
        fs.writeFile("../controller/child/assignment.json", JSON.stringify(employees), function (err) {
            if (err) throw new Error('File is not updted');
            console.log('Saved!');
        });
    }
}

module.exports=employee;