const jwt=require('jsonwebtoken');
var express = require('express');
var router = express.Router();

global.config=require('../setup/config');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/login',(req,res)=>{
  let user={
    username:req.body.username,
    password:req.body.password
  }
  if(user.username=='admin' && user.password=='admin'){
    let token=jwt.sign(user,global.config.secretKey,{
      algorithm:global.config.algorithm,
      expiresIn:'5m'
    });
    res.status(200).json({
      message:"Login Successfull",
      jwtoken:token
    });
  }
  else{
    res.status(404).json({
      message:"Login Failed"
    })
  }
});

module.exports = router;
