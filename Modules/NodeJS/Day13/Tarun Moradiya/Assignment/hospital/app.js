//import modules
const express = require('express');
const mongoose = require('mongoose');
const Joi = require('joi');

const indexRouter = require('./routes/index');

Joi.objectId = require('joi-objectid')(Joi);

//initiate express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/hospital', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to mongodb...'))
    .catch((err) => console.log('Could not connect to mongodb.'));

//middleware 
app.use(express.json());

//routes
app.use('/', indexRouter);

//port
const port = process.env.PORT || 3000;

//listen to port
app.listen(port, () => console.log(`server listening to port ${port}`));