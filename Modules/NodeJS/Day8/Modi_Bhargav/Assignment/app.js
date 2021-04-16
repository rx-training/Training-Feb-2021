const express = require('express');
global.config = require('./static/config')
const app = express();

const main = require("./router/main.js")
const authenticat = require('./router/Authentication/authenticat')

const security = require('./Authenticater/security')

app.use(express.json())

app.use('/authenticate',authenticat)

app.use(security)

app.use("/",main);

app.listen(3001, () => {
  console.log("this 3001 port susscesfully run")
})
