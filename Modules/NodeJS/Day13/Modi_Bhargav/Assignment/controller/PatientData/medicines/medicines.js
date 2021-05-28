const patient = require('../../../models/patients')
const express = require("express");
const medicinesRouter = express.Router({ mergeParams: true });

class Medicine {
  static async medicineFind(req, res) {
    const ID = parseInt(req.params.id)
    const medFind = await patient.find({ Id: ID }).select('MedicineList')
      .populate("MedicineList", "-__v")

    if (medFind.length == 0) res.status(404).send("Your Id Is Not Found")
    res.send(medFind[0].MedicineList)
  }
  static async selectedFind(req, res) {

    const ID = parseInt(req.params.id)
    const medID = parseInt(req.params.medid)
    const medicineFind = await patient.find({ Id: ID }).select('MedicineList')
      .populate("MedicineList", "-__v")
    const selectFind = await medicineFind[0].MedicineList
    const newData = selectFind.find(e => e.medId == medID)
    if (!newData) res.status(404).send("Your Id Is Not Found")
    res.send(newData);
  };

  static async selectedUpdate(req, res) {
    const ID = parseInt(req.params.id)
    const medID = parseInt(req.params.medid)
    const medicineUpdate = await patient.find({ Id: ID }).select('MedicineList')
      .populate("MedicineList", "-__v")
    const selectFind = await medicineUpdate[0].MedicineList
    const dataUpdate = selectFind.find(e => e.medId == medID)

    if (!dataUpdate) res.status(404).send("Your Id Is Not Found")
    const newData = req.body
    for (let i in newData) {
      dataUpdate[i] = newData[i]
    }
    try {
      const result = await medicineUpdate[0].save()
      res.send(result)
    }
    catch (ex) {
      for (let field in ex.errors) {
        res.send(ex.errors[field].message)
      }
    }
  };
};


medicinesRouter.get('/', Medicine.medicineFind)
medicinesRouter.get('/:medid', Medicine.selectedFind)
medicinesRouter.put('/:medid', Medicine.selectedUpdate)


module.exports = medicinesRouter
