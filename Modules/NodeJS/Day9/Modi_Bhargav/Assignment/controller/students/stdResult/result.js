const student = require('../../../student_JSON/student.json')
const express = require("express");
const fs = require('fs');
const resultRouter = express.Router({ mergeParams: true });

class Result {
  static resultFind(req, res) {
    const resultData = student.find(a => a.ID === parseInt(req.params.id))

    if (!resultData) {
      res.status(404).send("Your Data Is Not Found")
    }
    res.send({ Result : resultData.Result})
    res.end()
  }
  static resultUpdate(req, res) {

    let resultUpdate = student.find(u => u.ID === parseInt(req.params.id))
    
    if (!resultUpdate) res.status(404).send("Your students Id Is Not Found")

    const newData = req.body
      for (let i in newData) {
        resultUpdate[i] = newData[i]
      }
    fs.writeFile('./student_JSON/student.json', JSON.stringify(student), (error) => {
      console.log(error)
    });
    res.send(student);
    res.end();
  };
};


resultRouter.get('/',Result.resultFind)
resultRouter.put('/', Result.resultUpdate)


module.exports = resultRouter
