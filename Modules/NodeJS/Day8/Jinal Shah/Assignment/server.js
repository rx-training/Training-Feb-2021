const express = require('express')
const jwt = require('jsonwebtoken')

const login = require('./controller/login')
const result = require('./controller/child/result')
const fees = require('./controller/child/fees')

const app = express();

app.get('/api',(req,res) => {
    res.json({
        message : 'Welcome to the api'
    });
});

app.use('/api/login',login)
app.use('/api/result',result)
app.use('/api/fees',fees)

app.listen(5000, () => console.log('server started on port 5000'));
