const joi = require('joi');
const express = require('express');

const morgan = require('morgan')
const helmet = require('helmet')        // third party middleware

const app = express()

const logger = require('./logger')

app.use(express.json());

app.use(express.urlencoded({ extended : true}));      // built-in middlewares
app.use(express.static('public'));
app.use(helmet());
app.use(morgan('tiny'))

app.use(logger);

app.use(function(req,res, next){
    console.log("Authenticating.......")
    next();
})

const courses = [
    { id : 1 , name : 'course1' },
    { id : 2 , name : 'course2' },
    { id : 3 , name : 'course3' },
];

app.get('/',(req,res) => {
    res.send('Hello World');
}).listen(3000)

app.get('/api/courses',(req,res) => {
    res.send(courses);
});


app.post('/api/courses',(req,res) => {
    console.log(req.body)
    res.send(courses);
});
