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

    resultUpdate[0].Result = req.body;
    const result = await resultUpdate[0].save()
    res.send(result);
  };
};


resultRouter.get('/', Result.resultFind)
resultRouter.put('/', Result.resultUpdate)


module.exports = resultRouter
