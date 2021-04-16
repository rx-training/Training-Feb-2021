const express = require('express');
const app = express();
const router = express.Router();
var employees = require("./employee.json");
router.use(express.json());
const fs=require('fs');


class employee {
    static employeelist(req, res) {
        res.json(employees);
    }

    static employeeByID(req, res) {
        const emp = employees.find(c => c.empID === parseInt(req.params.id))
        if(!emp) return res.status(404).send("Employee not found");
        res.json(emp);

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

        fs.writeFile('./employee.json', JSON.stringify(employees), (err) => {
            if (err) {
                console.log(err.message);
            }
            else {
                console.log("Data Appended to json file succesfully");
            }


        })
    }
        
    static empdelete(req, res) {
            const emp = employees.find(c => c.empID === parseInt(req.params.id));
            if(!emp) return res.status(404).send("Employee not found");
            const index = employees.indexOf(emp);
            employees.splice(index, 1);
            console.log(employees);
            res.send(emp);

            fs.writeFile('./employee.json', JSON.stringify(employees), (err) => {
                if (err) {
                    console.log(err.message);
                }
                else {
                    console.log("Data Deleted to json file succesfully");
                }
    
    
            });
        }

        static empput(req,res)
        {
            const emp = employees.find(c => c.empID === parseInt(req.params.id));
            if(!emp) return res.status(404).send("Employee not found");
            emp.city=req.body.city;
            res.send(emp);
            fs.writeFile('./employee.json', JSON.stringify(employees), (err) => {
                if (err) {
                    console.log(err.message);
                }
                else {
                    console.log("Data Deleted to json file succesfully");
                }
    
    
            });
        }
}

    router.get('/', employee.employeelist);
    router.get('/:id', employee.employeeByID);
    router.post('/', employee.emppost);
    router.delete('/:id', employee.empdelete);
    router.put( '/:id',employee.empput);

module.exports = router