const student = require('../../../Models/stu_model')
const express = require("express");
const feesRouter = express.Router({ mergeParams: true });

class Fees {
  static async feesFind(req, res) {
    const ID = parseInt(req.params.id)
    const feesFind = await student.find({ stdId: ID }).select('Fees')

    if (feesFind.length == 0) res.status(404).send("Your Id Is Not Found")

    res.send(feesFind[0])
  }
  static async feesUpdate(req, res) {

    const ID = parseInt(req.params.id)
    const feesUpdate = await student.find({ stdId: ID }).select('Fees')

    if (feesUpdate.length == 0) res.status(404).send("Your Id Is Not Found")

    feesUpdate[0].Fees = req.body;
    const result1 = await feesUpdate[0].save()
    res.send(result1);
  };
};


feesRouter.get('/', Fees.feesFind)
feesRouter.put('/', Fees.feesUpdate)


module.exports = feesRouter
