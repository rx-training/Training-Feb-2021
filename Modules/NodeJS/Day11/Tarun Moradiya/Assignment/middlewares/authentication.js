// import modules 
const router = require('express').Router();

const jwt = require('jsonwebtoken');

// middleware
router.use((req, res, next) => {

    // get token from header
    const token = req.headers['x-access-token'];
    console.log(token)

    // verify token
    jwt.verify(
        token,
        global.auth.secretKey,
        {
            algorithm: global.auth.algorithm
        },
        (err, decoded) => {
            if (err) {
                let errordata = {
                     message: err.message,
                     expiredAt: err.expiredAt
                 };
                 console.log(errordata);
                 return res.status(401).json({
                     message: 'Unauthorized Access'
                 });
            }

            req.decoded = decoded;
            console.log(decoded);
            next();
        }
    );
});

// rexports 
module.exports =router;