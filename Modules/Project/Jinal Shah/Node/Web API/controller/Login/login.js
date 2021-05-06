const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
global.config = require('../../static/config')


const encryption = require('../../Encryption/encrypt')

const userAccount = require('../../models/UserAccountModel')

class login{
    static async UserLogin(req,res){

        const userdata = {
            UserName : req.body.UserName,
            Password : req.body.Password
        }
        //console.log(userdata.UserName , userdata.Password)

        let token = jwt.sign({ userdata }, global.config.secretKey, {
            algorithm : global.config.algorithm,
            expiresIn : '7m'
        });

        const udata = await userAccount.find().select('userID userPWD')
        var flag = 0;
        for(var i of udata){
            //console.log(i.userID,i.userPWD)
            if(userdata.UserName == i.userID && userdata.Password == encryption.decryptPWD(i.userPWD))
            {
                flag = 1
                break;
            }
        }

        if(flag == 1){
            res.status(200).send({
                message : 'login successful',
                Token : token
            });
        }
        else {
            res.status(401).send({
                message : 'Login Failed'
            });
        }
    }
}

router.post('/',login.UserLogin)

module.exports = router






