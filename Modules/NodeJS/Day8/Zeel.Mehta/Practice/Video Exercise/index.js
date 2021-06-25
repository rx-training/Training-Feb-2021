const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongooes = require('mongoose');
const users= require('./routes/users');
const express = require('express');
const app = express();
app.use(express.json());
// mongooes.connect('mongodb://localhost/vidly',{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
//     .then(() => console.log('Connected to MongoDB...'))
//     .catch(err => console.error('Could not connect to MongoDB...'));
    

app.use('/api/users',users);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
