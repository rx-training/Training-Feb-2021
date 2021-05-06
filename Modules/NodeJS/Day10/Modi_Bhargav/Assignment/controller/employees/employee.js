const employee = require('../../Models/emp_model')
const express = require("express");
const router1 = express.Router();
const empAssignment = require('./empAssignment/Assignment')

class Employees {
  static async employeeList(req, res) {
    const empData = await employee.find()
    res.send(empData);
  }
  static async employeeFind(req, res) {
    
    // specify stuId to Find data
    const ID = parseInt(req.params.id)
    const selectData = await employee.find({ empId: ID })

    // unique object id to find data
    // const selectData = await employee.find(req.params.id)

    if (selectData.length == 0) res.status(404).send("Your Id Is Not Found")
    res.status(200).send(selectData);
  }

  // static async InsertData(req, res) {
  //   const addData = req.body
  //   const newData = new employee(addData)
  //   const result = await newData.save()
  //   res.send(result)
  // };

  // static async UpdateData(req, res) {

  //   const ID = parseInt(req.params.id)
  //   const dataUpdate = await employee.find({ empId: ID })
  //   if (dataUpdate.length == 0) res.status(404).send("Your Id Is Not Found")
  //   const newData = req.body
  //   for (let i in newData) {
  //     dataUpdate[0][i] = newData[i]
  //   }
  //   const result = await dataUpdate[0].save()
  //   res.send(result)
  // }
  // static async DeleteData(req, res) {
  //   const ID = parseInt(req.params.id)

  //   const dataDelete = await employee.find({ empId: ID })

  //   if (dataDelete.length == 0) res.status(404).send("Your Id Is Not Found")

  //   const remove = await employee.remove({ empId: ID })

  //   res.send(dataDelete)
  // }
}

router1.get('/all', Employees.employeeList);
router1.get('/:id', Employees.employeeFind);
// router1.post('/all', Employees.InsertData);
// router1.put('/:id', Employees.UpdateData);
// router1.delete('/:id', Employees.DeleteData);

router1.use('/:id/child/assignment', empAssignment);

module.exports = router1;