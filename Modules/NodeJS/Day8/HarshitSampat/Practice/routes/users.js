var express = require('express');
var router = express.Router();
const  {token} = require('morgan')

var jwt =require('jsonwebtoken')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',function(req,res,next){
  let userdata={
    username:req.body.username,
    password:req.body.password
  };

  let token = jwt.sign(userdata,global.config.secretKey,{
    algorithm:global.config.algorithm,
    
  })

  if(userdata.username=="admin"&&userdata.password=="admin"){
    res.status(200).json(
      {
        message:"Login Sucessful",
        jwtoken:token
      }); 
  }
  else{
    res.status(401).json({
      message:"Login Failed"
    });
  }
});


module.exports = router;
