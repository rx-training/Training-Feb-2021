const express = require("express");
const jwt = require('jsonwebtoken');
const verifyToken = require('./verifytoken')
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'welcome to the RadixWeb'
  })
})
router.post('/post',verifyToken,(req,res) => {
  jwt.verify(req.token, 'secretkey',(err,authData) => {
    if(err){
      res.sendStatus(403);
    }
    else{
      res.json({
        'message': 'post created...',
        authData
      })
    }   
  })
  res.json({
    message: 'post created....'
  });
});

router.post('/login', (req, res, next) => {
  const userdata = {
    username: req.body.username,
    password: req.body.password
  };
  jwt.sign({ userdata }, 'secretkey', { expiresIn: '50s'},(err, token) => {
    if (userdata.username == "admin" && userdata.password == "admin") {
      res.status(200).json({
        message: 'Login Successful',
        Token : token
      });
    }
    else {
      res.status(401).json({
        message: 'Login Failed'  
      });
    }
  });
});

module.exports = router;