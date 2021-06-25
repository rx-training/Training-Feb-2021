const express = require('express');
global.config = require('./config_Data/config')
const app = express();
const mongoose = require('mongoose');
const main = require("./controller/main")
const loginUser = require('./controller/Login/login')

const security = require('./Authenticater/security')

app.use(express.json())

app.use('/login', loginUser)

app.use(security)

app.use("/", main);

mongoose.connect('mongodb://localhost/HospitalData', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to mongoDB...", err))

app.listen(5000, () => {
  console.log("this 5000 port susscesfully run")
})
