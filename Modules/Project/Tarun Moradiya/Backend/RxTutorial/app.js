const express = require('express');
const mongoose = require('mongoose');
const Joi = require('joi');

Joi.objectId = require('joi-objectid')(Joi);

const indexRouter = require('./routes/index');

//initialize app
const app = express();

//middleware
app.use(express.json());

//connect to mongodb
mongoose.connect('mongodb://localhost/RxTraining', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to MongoDB...'))
    .catch((err) => console.error('could not connect to MongoDB.', err));

//routes
app.use('/', indexRouter);

//port
const port = process.env.PORT || 3000;

//listen to port
app.listen(port, () => console.log(`server connected to port ${port}`));