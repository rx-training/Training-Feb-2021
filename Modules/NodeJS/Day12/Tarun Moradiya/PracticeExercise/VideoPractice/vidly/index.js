const homeRoute = require('./routes/index');
const express = require('express');
const app = express();

const config = require('config')

if(!config.get('jwtPrivateKey')) {
  console.log('FATAL ERROR: jwtPrivateKey is not defined');
  process.exit(1)
}

//set vidly_jwtPrivateKey=mySecureKey

//validate objectid 
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/vidly', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to mongodb...'))
  .catch((err) => console.log("Couldn't connect to mongodb...", err))

app.use(express.json());
app.use('/', homeRoute);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));