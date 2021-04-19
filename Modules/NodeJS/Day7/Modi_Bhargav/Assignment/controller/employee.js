const employee = require('../employee.json')
const express = require("express");
const fs = require('fs');
const router = express.Router();
const childData = require('./child/assignment')

class Employees {
  static EmployeeList(req, res) {
    res.send(employee);
    res.end();
  }
  static EmployeeFind(req, res) {
    let employeeData = employee.find(f => f.empId === parseInt(req.params.id))
    if (!employeeData) res.status(404).send("Your Id Is Not Found")
    return res.status(200).send(employeeData);
  }
  static InsertData(req, res) {
    const newData = req.body
    employee.push(newData)

    fs.writeFile('./employee.json', JSON.stringify(employee), (error) => {
      console.log(error)
    });
    res.send(employee);
    res.end();
  };
  static UpdateData(req, res) {
    if (req.params.id) {
      const Emp = employee.find(u => u.empId === parseInt(req.params.id))
      if (!Emp) res.status(404).send("Your Id Is Not Found")
      const newData = req.body
      for (let i in newData) {
        Emp[i] = newData[i]
      }
      fs.writeFile('./employee.json', JSON.stringify(employee), (error) => {
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
      fs.writeFile('./employee.json', JSON.stringify(employee), (error) => {
        console.log(error)
      });
      res.send(employee)
      res.end()
    }
  }
}

router.get('/all', Employees.EmployeeList);
router.get('/:id', Employees.EmployeeFind);
router.post('/all', Employees.InsertData);
router.put('/:id', Employees.UpdateData);
router.delete('/:id', Employees.DeleteData);

router.use('/:id/child/assignment', childData);

module.exports = router;
