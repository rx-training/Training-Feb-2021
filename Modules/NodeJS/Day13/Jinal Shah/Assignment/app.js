const express = require('express')

const patient = require('./controller/patient/patient')
const medicine = require('./controller/medicine/medicine')
const doctor = require('./controller/doctor/doctor')

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hospital',{ useNewUrlParser :true, useUnifiedTopology : true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const app = express()

app.use(express.json())
app.get('/',(req,res) => {
    res.send("Hospital Home Page !!")
})

app.use('/patient',patient)
app.use('/medicine',medicine)
app.use('/doctor',doctor)

app.listen(3000, () => {
    console.log("server is running on port 3000")
})