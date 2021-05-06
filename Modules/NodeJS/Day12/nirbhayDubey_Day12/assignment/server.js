const express=require('express');
const mongoose=require('mongoose');
const indexRouter=require('./routes/index');
global.config=require('./setup/config');
const app=express();

const portno=3000;

//mongodb connection
mongoose.connect(global.config.mongoURL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> console.log('Connected to mongodb...'))
.catch(err => console.error('Error while connecting to mongodb ',err));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/',indexRouter);

app.listen(portno,()=>{
    console.log(`Server is running at port no ${portno}`);
});