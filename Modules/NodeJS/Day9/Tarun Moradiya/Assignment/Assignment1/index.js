// import modules
const express = require('express');
var createError = require('http-errors');

const mainRoute = require('./controllers/index');

// global objects
global.students = require('./data/students.json')
global.employees = require('./data/employees.json')

global.auth = require('./config/auth')

// initiate app
const app = express();

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

app.listen(port, () => console.log(`server listening on port ${port}`));