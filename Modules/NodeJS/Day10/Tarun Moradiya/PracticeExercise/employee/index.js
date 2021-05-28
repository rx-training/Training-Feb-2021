//import modules
const express = require('express');
const mongoose = require('mongoose')

const homeRouter = require('./routes/index');

//initialize app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/empCollection', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.log('Could not connect to MongoDB', err));

//middleware
app.use(express.json());

//routes

//http://localhost:3000
app.use('/', homeRouter);

//set port
const port = process.env.PORT || 3000;

//server listen to port
app.listen(port, () => console.log(`server listening to port ${port}...`));
