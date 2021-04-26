const express = require('express');
const mongoose = require('mongoose');
const Joi = require('joi');
const config = require('config');
const cookieParser = require('cookie-parser');

Joi.objectId = require('joi-objectid')(Joi);

const indexRouter = require('./routes/index');

//initialize app
const app = express();

//view engine
app.set('view engine', 'ejs');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'))
app.use(cookieParser());

//connect to mongodb
mongoose.connect('mongodb://localhost/RxTraining', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log('connected to MongoDB...'))
    .catch((err) => console.error('could not connect to MongoDB.', err));

//check if env variable is set
if(!config.get('secretKey') || !config.get('algorithm')) console.error('FATAL ERROR: secretKey or alorithm is not set');

//set RxTraining_secretKey=RxWeb
//set RxTraining_algorithm=HS256

//routes
app.use('/', indexRouter);

//port
const port = process.env.PORT || 3000;

//listen to port
app.listen(port, () => console.log(`server connected to port ${port}`));