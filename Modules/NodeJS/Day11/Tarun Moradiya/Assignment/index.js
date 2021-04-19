// import modules
const express = require('express');
const mongoose = require('mongoose');
const createError = require('http-errors');

const mainRoute = require('./routes/index');

//global variabals
global.auth = require('./config/auth')

// initiate app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/mongoLearning', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Could not connect to MongoDB...', err));

// middlewares
app.use(express.json());

// routes

// http://localhost:3000
app.use('/', mainRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});
  
// error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});

// server listen to port
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server listening on port ${port}...`));