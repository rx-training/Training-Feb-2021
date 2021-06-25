const express = require("express");
const routerDriver = express.Router();
const jwt = require('jsonwebtoken');
const decrypts = require('../../../crypto/crypto')
const Drivers = require('../../../models/Drivers_model')

class Login {
  static async driverLogin(req, res) {
    const driverData = {
      driverName: req.body.driverName,
      passWord: req.body.passWord,
    }
    let token = jwt.sign({ driverData }, global.config.secretKey, {
      algorithm: global.config.algorithm,
      expiresIn: '5m'
    });
    const driverDatas = await Drivers.find().select('driverName passWord')
    var flag = 0;
    for (var i of driverDatas) {
      if (driverData.driverName == i.driverName && driverData.passWord == decrypts.decrypt(i.passWord)) {
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
routerDriver.post('/', Login.driverLogin)

module.exports = routerDriver