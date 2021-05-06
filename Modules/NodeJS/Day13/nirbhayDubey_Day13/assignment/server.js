const express=require('express');
const indexsRoute=require('./controllers/index');
const mongoose=require('mongoose');
const Joi=require('joi');
Joi.objectId=require('joi-objectid')(Joi);
const app=express();

mongoose.connect("mongodb://localhost/hospital",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err){
        console.log('Error while connecting to mongodb');
    }else{
        console.log('Successfully connected to mongodb');
    }
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',indexsRoute);

const portno= process.env.port || 3000;

app.listen(portno,()=> console.log(`server is running at port no. ${portno}`));