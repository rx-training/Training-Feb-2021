const express=require('express');
const indexRouter=require('./routes/index');
global.config=require('./setup/config');
const app=express();

const portno=3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/',indexRouter);

app.listen(portno,()=>{
    console.log(`Server is running at port no ${portno}`);
});