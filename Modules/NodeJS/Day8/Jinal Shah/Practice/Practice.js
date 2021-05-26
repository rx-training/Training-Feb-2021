const express = require('express')
const jwt = require('jsonwebtoken')

const app = express();

app.get('/api',(req,res) => {
    res.json({
        message : 'Welcome to the api'
    });
});

app.post('/api/posts',verifyToken,(req,res) => {

    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) res.sendStatus(403)
        else {
            res.json({
                message : 'post created',
                authData
            })
        }
    })
})

app.post('/api/login',(req,res) => {

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

app.listen(5000, () => console.log('server started on port 5000'));
