var express = require('express')
var app = express()
var router = express.Router()

var http = require('http')
var server = http.createServer(app);
server.listen(3000)

// a middleware function with no mount path. This code is executed for every request to the router
/* router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
}) */

router.use(function (req, res, next) {
    if (!req.headers['x-auth']) return next('router')
    next()
  })
  
  router.get('/user/:id', function (req, res) {
    res.send('hello, user!')
    console.log("XXXXXXXX")
  })

  app.use('/admin', router, function (req, res) {
    res.sendStatus(401)
    console.log("unauthorized")
  })