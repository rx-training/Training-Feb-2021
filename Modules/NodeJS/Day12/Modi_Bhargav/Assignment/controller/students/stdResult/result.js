const student = require('../../../Models/stu_model')
const express = require("express");
const resultRouter = express.Router({ mergeParams: true });

class Result {
  static async resultFind(req, res) {
    const ID = parseInt(req.params.id)
    const resultFind = await student.find({ stdId: ID }).select('Result')

    if (resultFind.length == 0) res.status(404).send("Your Id Is Not Found")

    res.send(resultFind[0])
  }
  static async resultUpdate(req, res) {

    const ID = parseInt(req.params.id)
    const resultUpdate = await student.find({ stdId: ID }).select('Result')

    if (resultUpdate.length == 0) res.status(404).send("Your Id Is Not Found")

    const newData = req.body;
    for (let i in newData) {
      resultUpdate[0].Result[i] = newData[i]
    }
    try {
      const result = await resultUpdate[0].save()
      res.send(result);
    }
    catch (ex) {
      for (let field in ex.errors) {
        res.status(404).send(ex.errors[field].message)
      }
    }
  };
};


resultRouter.get('/', Result.resultFind)
resultRouter.put('/', Result.resultUpdate)


module.exports = resultRouter
