const employee = require('../../employee_JSON/employee.json')
const express = require("express");
const fs = require('fs');
const router1 = express.Router();
const childData = require('./empAssignment/Assignment')

class Employees {
  static EmployeeList(req, res) {
    res.send(employee);
    res.end();
  }
  static EmployeeFind(req, res) {
    if (req.params.id) {
      let employeeData = employee.find(f => f.empId === parseInt(req.params.id))
      if (!employeeData) res.status(404).send("Your Id Is Not Found")
      return res.status(200).send(employeeData);
    }
  }
  static InsertData(req, res) {
    const NewEmployee = req.body
    employee.push(NewEmployee)

    fs.writeFile('./employee_JSON/employee.json', JSON.stringify(employee), (error) => {
      console.log(error)
    });
    res.send(employee);
    res.end();
  };
  static UpdateData(req, res) {
    if (req.params.id) {
      const empUpdate = employee.find(u => u.empId === parseInt(req.params.id))

      if (!empUpdate) res.status(404).send("Your Id Is Not Found")

      const newData = req.body
      for (let i in newData) {
        empUpdate[i] = newData[i]
      }

      fs.writeFile('./employee_JSON/employee.json', JSON.stringify(employee), (error) => {
        console.log(error)
      });
      res.send(employee);
      res.end();
    }
  }
  static DeleteData(req, res) {
    if (req.params.id) {
      let empData = employee.find(d => d.empId == parseInt(req.params.id))

      if (!empData) res.status(404).send("Your Id Is Not Found")

      let index = employee.indexOf(empData)
      employee.splice(index, 1)
      
      fs.writeFile('./employee_JSON/employee.json', JSON.stringify(employee), (error) => {
        console.log(error)
      });
      res.send(employee)
      res.end()
    }
  }
}

router1.get('/all', Employees.EmployeeList);
router1.get('/:id', Employees.EmployeeFind);
router1.post('/all', Employees.InsertData);
router1.put('/:id', Employees.UpdateData);
router1.delete('/:id', Employees.DeleteData);

router1.use('/:id/child/assignment', childData);

module.exports = router1;
