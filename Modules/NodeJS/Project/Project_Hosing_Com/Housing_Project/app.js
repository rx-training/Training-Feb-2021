//Import modules
    const express = require('express')
    const mongoose = require('mongoose')

// import index router 
const indexrouter =require('./routes/index') 

//initialize app
const app = express()

//connect to mongodb
mongoose.connect('mongodb://localhost/hosih_hwarshit',{useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => console.log('Mongodb connect..'))
    .catch(err => console.error('Somethin went wrong check connection ',err))

//middleware
app.use(express.json())

//middleware for route
app.use('/',indexrouter)

//port
const port = process.env.PORT ||3000;

// listen to createrd port
app.listen(port,()=>console.log(`Server  is running on ${port}`));   