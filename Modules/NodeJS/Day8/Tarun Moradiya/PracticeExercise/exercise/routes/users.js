var express = require('express');
const { token } = require('morgan');
var router = express.Router();

let jwt = require('jsonwebtoken');



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Post users Login. */
router.post('/login', function (req, res, next) {
    let userdata = {
      username: req.body.username,
      password: req.body.password
    };

    //creating token
    let token = jwt.sign(userdata, global.config.secretKey, {
      algorithm: global.config.algorithm,
      expiresIn: '5m'
    })
    
    //Go to server for user varificarion
    if (userdata.username == "admin" && userdata.password == "admin") {
      res.status(200).json({
      message: 'Login Successful',
      jwtoken: token
    });
    }
    else {
      res.status(401).json({
      message: 'Login Failed'
    });
    }
});



  

module.exports = router;
