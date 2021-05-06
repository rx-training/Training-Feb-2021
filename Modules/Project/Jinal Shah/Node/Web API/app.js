const express = require('express')
const app = express()
const index = require('./controller/index')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/instagram',{ useNewUrlParser :true, useUnifiedTopology : true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err)); 

app.use(express.json())
app.get('/',(req,res) => {
    res.send("Instagram Home Page !!")
})

app.use('/instagram',index)

app.listen(3000, () => {
    console.log("server is running on port 3000")
})