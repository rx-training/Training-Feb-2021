const express = require('express');
global.config = require('./config_Data/config')
const app = express();

const main = require("./controller/main")
const loginUser = require('./controller/Login/login')

const security = require('./Authenticater/security')

app.use(express.json())

app.use('/login',loginUser)

app.use(security)

app.use("/",main);

app.listen(5000, () => {
  console.log("this 5000 port susscesfully run")
})
