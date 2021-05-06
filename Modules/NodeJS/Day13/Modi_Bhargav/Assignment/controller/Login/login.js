const express = require("express");
const routers = express.Router();
const jwt = require('jsonwebtoken');
const patients = require('../../models/patients')

class Login {
  static async userLogin(req, res) {
    const patientData = {
      patientName: req.body.patientName,
      password: req.body.password,
    }
    let token = jwt.sign({ patientData }, global.config.secretKey, {
      algorithm: global.config.algorithm,
      expiresIn: '5m'
    });
    const patientData1 = await patients.find().select('patientName phoneNumber')
    var flag = 0;
    for (var i of patientData1) {

      if (patientData.patientName == i.patientName && patientData.password == i.phoneNumber) {
        flag = 1
        break;
      }
    }
    if (flag == 1) {
      res.status(200).send({
        message: 'Login Successful',
        Token: token
      });
    }
    else {
      res.status(401).send({
        message: 'Login Failed'
      });
    }
  }
}
routers.post('/', Login.userLogin)
module.exports = routers