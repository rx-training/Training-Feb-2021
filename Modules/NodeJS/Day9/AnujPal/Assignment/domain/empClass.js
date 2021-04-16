const fs=require('fs');
const expres=require('express');
const app=expres();
const jwt=require('jsonwebtoken');
const employees=require("../controller/Parent/employee.json");

class employee {
    static employeelist(req, res) {
        res.json(employees);
    }

    static employeeByID(req, res) {
        const emp = employees.find(c => c.empID === parseInt(req.params.id))
        if (!emp) throw new Error("can't find employee");
        res.json(emp);

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
    static emppost(req, res) {
        const employee = {
            empID: employees.length + 1,
            fname: req.body.fname,
            lname: req.body.lname,
            city: req.body.city,
            country: req.body.country,
            dob: req.body.dob,
            gender: req.body.gender,
            assignments: req.body.assignments
        }
        employees.push(employee);
        res.send(employee);

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