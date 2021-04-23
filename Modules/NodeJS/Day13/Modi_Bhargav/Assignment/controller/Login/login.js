const express = require("express");
const jwt = require('jsonwebtoken');
const routers = express.Router();
// const User = require('../../models/user')

class Login {
  static userLogin(req, res) {
    const userData = {
      userName: req.body.userName,
      password: req.body.password,
    }
    let token = jwt.sign({ userData }, global.config.secretKey, {
      algorithm: global.config.algorithm,
      expiresIn: '5m'
    });
    if (userData.userName == "Bhargav" && userData.password == "Modi@321") {
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