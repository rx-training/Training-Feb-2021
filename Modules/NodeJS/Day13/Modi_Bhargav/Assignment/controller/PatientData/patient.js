const patients = require('../../models/patients')
const express = require("express");
const patientRouter = express.Router();
const patientDocters = require('./doctors/doctors')
const patientMedicines = require('./medicines/medicines')

class Patients {
  static async patientList(req, res) {
    const patientData = await patients.find()
    .populate("Doctors" ,"-__v")
    .populate("MedicineList","-__v")
    res.send(patientData);
  }

  static async patientFind(req, res) {
    const ID = parseInt(req.params.id)
    const selectData = await patients.find({ Id: ID })
    .populate("Doctors","docId doctorName DepartMent")
    .populate("MedicineList","-__v")
    if (selectData.length == 0) res.status(404).send("Your Id Is Not Found")
    res.status(200).send(selectData);
  }

  static async InsertData(req, res) {
    const addData = req.body
    const newData = new patients(addData)
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
    const dataUpdate = await patients.find({ Id: ID })
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

    const dataDelete = await patients.find({ Id: ID })

    if (dataDelete.length == 0) res.status(404).send("Your Id Is Not Found")

    const remove = await patients.deleteOne({ Id: ID })

    res.send(dataDelete)
  }
}

patientRouter.get('/all', Patients.patientList);
patientRouter.get('/:id', Patients.patientFind);
patientRouter.post('/all', Patients.InsertData);
patientRouter.put('/:id', Patients.UpdateData);
patientRouter.delete('/:id', Patients.DeleteData);

patientRouter.use('/:id/doctors', patientDocters);
patientRouter.use('/:id/medicines', patientMedicines);

module.exports = patientRouter;