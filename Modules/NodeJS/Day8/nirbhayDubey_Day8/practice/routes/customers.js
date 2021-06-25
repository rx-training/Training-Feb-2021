const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/data', varifyToken, (req, res) => {
    let customerdata = [{
            customerid: 1,
            customername: 'Niyati Mehta'
        },
        {
            customerid: 2,
            customername: 'Rahul Sharma'
        },
        {
            customerid: 3,
            customername: 'Nitin Pandya'
        }
    ];

    jwt.verify(req.token, global.config.secretKey, {
        algorithms: global.config.algorithm
    }, (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                customerdata,
                authData
            });
        }
    });
});

function varifyToken(req, res, next) {
    var jwtoken = req.headers['authorization'];
    if (jwtoken != undefined) {
        req.token = jwtoken;
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = router;