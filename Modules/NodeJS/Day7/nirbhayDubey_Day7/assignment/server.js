const index=require('./controllers/index');
const express=require('express');
const { urlencoded } = require('express');
const app=express();

const portno=3000;

app.use(express.json());
app.use(urlencoded({extended:true}));
app.use('/',index);

app.listen(portno,()=>{
    console.log(`server running on portno ${portno}`);
});