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
    const NewEmp = {
      empId: employee.length + 1,
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      gender: req.body.gender,
      hireDate: req.body.hireDate,
      phoneNumber: req.body.phoneNumber,
      dateOfBirth: req.body.dateOfBirth,
      city: req.body.city,
      Country: req.body.Country
    }
    employee.push(NewEmp)
    fs.writeFile('./employee_JSON/employee.json', JSON.stringify(employee), (error) => {
      console.log(error)
    });
    res.send(employee);
    res.end();
  };
  static UpdateData(req, res) {
    if (req.params.id) {
      const Emp = employee.find(u => u.empId === parseInt(req.params.id))
      if (!Emp) res.status(404).send("Your Id Is Not Found")
      const index = employee.indexOf(Emp)
      employee[index].firstName = req.body.firstName;
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

router1.use('/:id/child/assignment',childData);

module.exports = router1;
