const express = require('express');

const app = express()

var  emp = require('./controller/employee')

app.get('/',(req,res) => {
    res.send('Home page !!')
})

app.use('/emps',emp)
app.use(express.json())

app.use(function (err, req, res, next) {
        console.error(err.stack)
        res.status(500).send('Something broke!')
})

app.listen(3000)