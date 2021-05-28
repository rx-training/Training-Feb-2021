const student = require('../../Models/stu_model')
const express = require("express");
const router2 = express.Router();
const stdFees = require('./stdFees/fees')
const stdResult = require('./stdResult/result')

class Students {
  static async StudentList(req, res) {
    const stuData = await student.find()
    res.send(stuData);
  }
  static async StudentFind(req, res) {
    const ID = parseInt(req.params.id)
    const selectData = await student.find({ stdId: ID })
    if (selectData.length == 0) res.status(404).send("Your Id Is Not Found")
    res.status(200).send(selectData);
  }

  static async InsertData(req, res) {
    const addData = req.body
    const newData = new student(addData)
    try {
      const result = await newData.save()
      res.status(200).send(result)
    }
    catch (ex) {
      for (let field in ex.errors) {
        res.status(404).send(ex.errors[field].message)
      }
    }
  };

  static async UpdateData(req, res) {

    const ID = parseInt(req.params.id)
    const dataUpdate = await student.find({ stdId: ID })
    if (dataUpdate.length == 0) res.status(404).send("Your Id Is Not Found")
    const newData = req.body
    for (let i in newData) {
      dataUpdate[0][i] = newData[i]
    }
    try {
      const result = await dataUpdate[0].save()
      res.send(result)
    }
    catch (ex) {
      for (let field in ex.errors) {
        res.status(404).send(ex.errors[field].message)
      }
    }
    
  }
  static async DeleteData(req, res) {
    const ID = parseInt(req.params.id)

    const dataDelete = await student.find({ stdId: ID })

    if (dataDelete.length == 0) res.status(404).send("Your Id Is Not Found")

    const remove = await student.remove({ stdId: ID })

    res.send(dataDelete)
  }
}

router2.get('/all', Students.StudentList);
router2.get('/:id', Students.StudentFind);
router2.post('/all', Students.InsertData);
router2.put('/:id', Students.UpdateData);
router2.delete('/:id', Students.DeleteData);

router2.use('/:id/child/fees', stdFees);
router2.use('/:id/child/result', stdResult);

module.exports = router2;