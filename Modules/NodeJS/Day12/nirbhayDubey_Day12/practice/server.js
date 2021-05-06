const mongoose=require('mongoose');
const express=require('express');
const config=require('./setup/config');
const coursesRoute=require('./routes/courses');
const genresRoute=require('./routes/genres');
const app=express();

mongoose.connect(config.mongoURL,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err){
        console.log("Error while connecting to mongodb: "+err);
    }
    else{
        console.log("Successfully connected to mongodb...");
    }
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/courses',coursesRoute);
app.use('/genres',genresRoute);

app.get('/',(req,res)=>{
    res.send("Welcome to Day12/practice...");
});

const portno= process.env.portno || 3000;
app.listen(portno,()=>{
    console.log(`Server runnig at port number ${portno}`);
});