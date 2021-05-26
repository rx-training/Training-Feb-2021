const express = require('express')
const jwt = require('jsonwebtoken');
const router = express.Router();

const app = express();



router.post('/',(req,res) => {

    const user = {
        id:1,
        username : 'abc'
    }
    jwt.sign({user}, 'secretkey', (err,token) => {
        res.json({
            token
        });
    });
});

// format of token
// Authorization : Bearer <access_token>


module.exports = router;