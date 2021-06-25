// import modules 
const router = require('express').Router();

const jwt = require('jsonwebtoken');
const config = require('config')

// middleware
router.use((req, res, next) => {

    // get token from header
    const token = req.headers['x-access-token'];
    console.log(token)

    if(!token) return res.status(401).send('Access Denied. No token provided')

    // verify token
    jwt.verify(
        token,
        config.get('secretKey'),
        {
            algorithm: config.get('algorithm')
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

            req.user= decoded;
            console.log(decoded);
            next();
        }
    );
});

// rexports 
module.exports =router;