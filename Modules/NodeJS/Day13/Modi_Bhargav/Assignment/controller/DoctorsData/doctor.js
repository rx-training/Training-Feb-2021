const docData = require('../../Models/docters')
const patientDatas = require('../../models/patients')

const express = require("express");
const doctorRouter = express.Router();
// const docPatient = require("./doctorPatients/docPatients")


class Doctors {
  static async doctorsList(req, res) {
    const doctorData = await docData.find().select('-__v')
    res.send(doctorData);
  }

  static async doctorFind(req, res) {

    const ID = parseInt(req.params.id)
    const selectData = await docData.find({ docId: ID })
      .select('-__v')
    if (selectData.length == 0) res.status(404).send("Your Id Is Not Found")
    res.status(200).send(selectData);
  }


  static async InsertData(req, res) {
    const addData = req.body
    const newData = new docData(addData)
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
    const dataUpdate = await docData.find({ docId: ID })
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

    const dataDelete = await docData.find({ docId: ID })

    if (dataDelete.length == 0) res.status(404).send("Your Id Is Not Found")

    const remove = await docData.deleteOne({ docId: ID })

    res.send(dataDelete)
  }
  static async docpatientFind(req, res) {

    const docID = parseInt(req.params.id)
    const selectData = await docData.find({ docId: docID }).select('-__v')
    if (selectData.length == 0) return res.status(404).send("Your Doctors Is Not Found")

    const patainDetails = await patientDatas.find()
      .populate("Doctors")
    var patientData = []
    for (var i of patainDetails) {
      for (var j of i.Doctors) {
        if (j.docId == docID) {
          const patients = await patientDatas.find({ Id: i.Id }).select('Id patientName phoneNumber -_id')
          patientData.push(patients)
        }
      }
    }
    if (patientData.length == 0) return res.status(404).send("Not a Any Patient Has Visited This Doctor")

    res.send(patientData)
  };
}
doctorRouter.get('/:id/patients', Doctors.docpatientFind)
doctorRouter.get('/all', Doctors.doctorsList);
doctorRouter.get('/:id', Doctors.doctorFind);
doctorRouter.post('/all', Doctors.InsertData);
doctorRouter.put('/:id', Doctors.UpdateData);
doctorRouter.delete('/:id', Doctors.DeleteData);

// doctorRouter.use('/:id/patients',docPatient)

module.exports = doctorRouter;