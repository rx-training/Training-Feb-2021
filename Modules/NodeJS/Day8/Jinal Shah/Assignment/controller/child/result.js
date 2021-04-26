const express = require('express')
const jwt = require('jsonwebtoken');
const router = express.Router();

const resultdata = require('./result.json')

const app = express();


router.post('/',verifyToken,(req,res) => {

    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) res.sendStatus(403)
        else {
            res.json({
                resultdata
            })
        }
    })
})


function verifyToken(req,res,next){

    const BearerHeader = req.headers['authorization'];

    if(typeof BearerHeader !== 'undefined'){

        const bearer = BearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();

    } else {
        //forbidden
        res.sendStatus(403)
    }

}


module.exports = router;