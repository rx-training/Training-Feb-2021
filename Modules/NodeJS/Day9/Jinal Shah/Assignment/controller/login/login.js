var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken')

router.post('/',(req,res) =>{
    const user = {
        username : req.body.name,
        password : req.body.pwd
    }
    let token = jwt.sign(user, global.config.secretKey,{
        algorithm : global.config.algorithm,
        expiresIn : '10m'
    });

    if(user.username == 'abc' && user.password == 'abc'){
        res.send("Login successful " + token)
    } else {
        res.status(403)
    }
})

module.exports = router