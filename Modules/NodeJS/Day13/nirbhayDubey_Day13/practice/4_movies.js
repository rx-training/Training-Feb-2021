const mongoose=require('mongoose');
const express=require('express');
const movieRoute=require('./routes/movie');
const genreRoute=require('./routes/genre');
const app=express();

mongoose.connect("mongodb://localhost/day13practice",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err){
        console.log('Error while connecting to mongodb');
    }else{
        console.log('Successfully connected to mongodb');
    }
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/movies',movieRoute);
app.use('/genres',genreRoute);

const portno= process.env.port || 3000;

app.listen(portno,()=> console.log(`server is running at port no. ${portno}`));