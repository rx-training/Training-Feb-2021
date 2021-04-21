//import modules
const express = require('express');
const mongoose = require('mongoose');
const Joi = require('joi');
const config = require('config');

const indexRouter = require('./routes/index');

Joi.objectId = require('joi-objectid')(Joi);

//initiate express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/hospital', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to mongodb...'))
    .catch((err) => console.log('Could not connect to mongodb.'));

//check if env variable is set
if(!config.get('secretKey') || !config.get('algorithm')) console.error('FATAL ERROR: secretKey or alorithm is not set');

//set hospital_secretKey=Radixi
//set hospital_algorithm=HS256


//middleware 
app.use(express.json());

//routes
app.use('/', indexRouter);

//port
const port = process.env.PORT || 3000;

//listen to port
app.listen(port, () => console.log(`server listening to port ${port}`));