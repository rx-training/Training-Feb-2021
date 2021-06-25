const medicine = require('../../Models/medical')
const express = require("express");
const medicineRouter = express.Router();


class Medicine {
  static async medicineList(req, res) {
    const medicineData = await medicine.find()
    res.send(medicineData);
  }

  static async medicineFind(req, res) {
    const ID = parseInt(req.params.id)
    const selectData = await medicine.find({ medId: ID })
    if (selectData.length == 0) res.status(404).send("Your Id Is Not Found")
    res.status(200).send(selectData);
  }

  static async InsertData(req, res) {
    const addData = req.body
    const newData = new medicine(addData)
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
    const dataUpdate = await medicine.find({ medId: ID })
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

    const dataDelete = await medicine.find({ medId: ID })

    if (dataDelete.length == 0) res.status(404).send("Your Id Is Not Found")

    const remove = await medicine.deleteOne({ medId: ID })

    res.send(dataDelete)
  }
}

medicineRouter.get('/all', Medicine.medicineList);
medicineRouter.get('/:id', Medicine.medicineFind);
medicineRouter.post('/all', Medicine.InsertData);
medicineRouter.put('/:id', Medicine.UpdateData);
medicineRouter.delete('/:id', Medicine.DeleteData);


module.exports = medicineRouter;