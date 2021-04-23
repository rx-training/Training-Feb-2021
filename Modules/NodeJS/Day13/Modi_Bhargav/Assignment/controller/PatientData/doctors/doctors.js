const patient = require('../../../models/patients')
const express = require("express");
const doctorsRouter = express.Router({ mergeParams: true });

class Doctors {
  static async doctorsFind(req, res) {
    const ID = parseInt(req.params.id)
    const docFind = await patient.find({ Id: ID }).select('Doctors')
    .populate("Doctors","-__v")

    if (docFind.length == 0) res.status(404).send("Your Id Is Not Found")
    res.send(docFind[0].Doctors)
  }
  static async selectedFind(req, res) {

    const ID = parseInt(req.params.id)
    const docID = parseInt(req.params.docid)
    const doctorFind = await patient.find({ Id: ID }).select('Doctors')
    .populate("Doctors","-__v")
    const selectFind = await doctorFind[0].Doctors
    console.log(selectFind)
    const newData = selectFind.find(e => e.docId == docID)
    if (!newData) res.status(404).send("Your Id Is Not Found")
    res.send(newData);
  };

  static async selectedUpdate(req, res) {
    const ID = parseInt(req.params.id)
    const docID = parseInt(req.params.docid)
    const doctorFind = await patient.find({ Id: ID }).select('Doctors')
    .populate("Doctors","-__v")
    const selectFind = await doctorFind[0].Doctors
    const dataUpdate = selectFind.find(e => e.docId == docID )

    if (!dataUpdate) res.status(404).send("Your Id Is Not Found")
    const newData = req.body
    for (let i in newData) {
      dataUpdate[i] = newData[i]
    }
    try {
      const result = await doctorFind[0].save()
      res.send(result)
    }
    catch (ex) {
      for (let field in ex.errors) {
        res.send(ex.errors[field].message)
      }
    }
  };
};


doctorsRouter.get('/', Doctors.doctorsFind)
doctorsRouter.get('/:docid', Doctors.selectedFind)
doctorsRouter.put('/:docid', Doctors.selectedUpdate)


module.exports = doctorsRouter
