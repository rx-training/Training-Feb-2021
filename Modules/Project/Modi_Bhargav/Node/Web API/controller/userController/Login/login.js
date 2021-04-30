const express = require("express");
const routerUser = express.Router();
const jwt = require('jsonwebtoken');
const decrypt = require('../../../crypto/crypto')
const Customers = require('../../../models/customers_model')

class Login {
  static async CustomersLogin(req, res) {
    const userData = {
      userName: req.body.userName,
      passWord: req.body.passWord,
    }

    let token1 = jwt.sign({ userData }, global.config.secretKey, {
      algorithm: global.config.algorithm,
      expiresIn: '1h'
    });
    const customersDatas = await Customers.find().select('customerName passWord')
    var flag = 0;
    for (var i of customersDatas) {

       if (userData.userName == i.customerName && userData.passWord == decrypt.decrypt(i.passWord)) {
         flag = 1
         break;
       }
    }
    if (flag == 1) {
      res.status(200).send({
        message: 'Login Successful',
        Token: token1
      });
    }
    else {
      res.status(401).send({
        message: 'Login Failed'
      });
    }
  }
}
routerUser.post('/', Login.CustomersLogin)
module.exports = routerUser