var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*POST user login*/
router.post('/login', (req, res, next) => {
  //get data from req.body
  let userdata = {
    username: req.body.username,
    password: req.body.password
  }

  // create token 
  let token = jwt.sign(userdata, global.config.secretKey, {
    algorithm: global.config.algorithm,
    expiresIn: '5m'
  })

  //Go to server for varification
  if(userdata.username == "admin", userdata.password == "admin") {
    res.status(200)
      .json({
        message: 'login successful',
        jwtoken: token
      })
  } else {
    res.status(401)
      .json({
        message: 'login failed'
      })
  }

})

module.exports = router;
