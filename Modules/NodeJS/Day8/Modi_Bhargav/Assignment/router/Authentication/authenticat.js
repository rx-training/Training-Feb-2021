const express = require("express");
const jwt = require('jsonwebtoken');
const routers = express.Router();

class Login {
  static StudentLogin(req, res) {
    const studentData = {
      stdName: req.body.stdName,
      password: req.body.password,
    }
    let token = jwt.sign({ studentData }, global.config.secretKey, {
      algorithm: global.config.algorithm,
      expiresIn: '5m'
    });
    if (studentData.stdName == "Bhargav" && studentData.password == "Modi@321") {
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

routers.post('/login', Login.StudentLogin)
module.exports = routers