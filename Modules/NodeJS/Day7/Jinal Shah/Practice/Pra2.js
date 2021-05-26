
//-------- https://expressjs.com/en/guide/using-middleware.html

var express = require('express')
var app = express()

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
}).listen(3000)

//--------------------

app.use('/user/:id', function (req, res, next) {
    console.log('Request Type:', req.method)
    //res.send('USER')
    next()
})

//---------------------

app.get('/user/:id', function (req, res, next) {
    console.log('ID:', req.params.id)
    next()
  }, function (req, res, next) {
    res.send('User Info')
})