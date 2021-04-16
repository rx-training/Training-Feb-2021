const student = require('../../../student.json')
const express = require("express");
const fs = require('fs');
const feesRouter = express.Router({ mergeParams: true });

class Fees {
  static feesFind(req, res) {
    const feesData = student.find(a => a.ID === parseInt(req.params.id))

    if (!feesData) {
      res.status(404).send("Your Data Is Not Found")
    }
    res.send({ Fees: feesData.Fees })
    res.end()
  }
  static feesUpdate(req, res) {

    let amountUpdate = student.find(u => u.ID === parseInt(req.params.id))
    if (!amountUpdate) res.status(404).send("Your students Id Is Not Found")
    let index = student.indexOf(amountUpdate)
    student[index].Fees.Amount = req.body.Amount;
    fs.writeFile('./student.json', JSON.stringify(student), (error) => {
      console.log(error)
    });
    res.send(student);
    res.end();
  };
};


feesRouter.get('/',Fees.feesFind)
feesRouter.put('/', Fees.feesUpdate)

module.exports = feesRouter
