const employee = require('../../employee.json')
const express = require("express");
const fs = require('fs');
const childrouter = express.Router({ mergeParams : true });

class Assignment {
  static AssignmentFind(req,res){
    const AssData = employee.find(a => a.empId === parseInt(req.params.id))

    if (!AssData) {
      res.status(404).send("Your Data Is Not Found")
    }
    res.send({Assignment:AssData.Assignment})
    res.end()
  }

  static AssignSlectedFind(req, res) {
    const EmpData = employee.find(a => a.empId === parseInt(req.params.id))

    const EmpAssignMent = EmpData.Assignment.find(b => b.AssignmentId === parseInt(req.params.assid))

    if (!EmpAssignMent) {
      res.status(404).send("Your Data Is Not Found")
    }
    res.send(EmpAssignMent)
    res.end()
  }

  static AssignmentUpdate(req, res) {
    const empFind = employee.find(u => u.empId === parseInt(req.params.id))

    const empUpdate = empFind.Assignment.find(b => b.AssignmentId === parseInt(req.params.assid))

    if (!empUpdate) res.status(404).send("Your Id Is Not Found")

    const newData = req.body
    for (let i in newData) {
      empUpdate[i] = newData[i]
    }

    fs.writeFile('./employee.json', JSON.stringify(employee), (error) => {
      console.log(error)
    });
    res.send(employee);
    res.end();
  };
};


childrouter.get('/',Assignment.AssignmentFind)
childrouter.get('/:assid',Assignment.AssignSlectedFind)
childrouter.put('/:assid',Assignment.AssignmentUpdate)

module.exports = childrouter
