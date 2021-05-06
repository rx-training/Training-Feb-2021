const employee = require('../../../Models/emp_model')
const express = require("express");
const assignmentRouter = express.Router({ mergeParams: true });

class Assignment {
  static async assignmentFind(req, res) {
    const ID = parseInt(req.params.id)
    const assFind = await employee.find({ empId: ID }).select('Assignment')

    if (assFind.length == 0) res.status(404).send("Your Id Is Not Found")

    res.send(assFind[0])
  }
  static async selectedFind(req, res) {

    const ID = parseInt(req.params.id)
    const assId = parseInt(req.params.assid)
    const assignFind = await employee.find({ empId: ID })
    const selectFind = await assignFind[0].Assignment
    console.log(selectFind)
    const newData = selectFind.find(e => e.AssignmentId == assId)
    if (!newData) res.status(404).send("Your Id Is Not Found")
    res.send(newData);
  };

  // static async selectedUpdate(req, res) {
  //   const ID = parseInt(req.params.id)
  //   const assId = parseInt(req.params.assid)
  //   const assignFind = await employee.find({ empId: ID })
  //   const selectFind = await assignFind[0].Assignment
  //   const dataUpdate = selectFind.find(e => e.AssignmentId == assId)
  //   if (!dataUpdate) res.status(404).send("Your Id Is Not Found")
  //   const newData = req.body
  //   for (let i in newData) {
  //     dataUpdate[i] = newData[i]
  //   }
  //   const result = await assignFind[0].save()
  //   res.send(result)
  // };
};


assignmentRouter.get('/', Assignment.assignmentFind)
assignmentRouter.get('/:assid', Assignment.selectedFind)
// assignmentRouter.put('/:assid', Assignment.selectedUpdate)


module.exports = assignmentRouter
