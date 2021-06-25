const indexRouter=require('./routes/index');
const express=require('express');
const app=express();
global.config=require('./setup/config');

const portno=3000;

app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.use('/',indexRouter);

app.listen(portno,()=>{
    console.log(`Server is running at portno. ${portno}`);
});