const express=require('express');
const app=express();
const employees=require('../Assignment/controller/Parent/employee');
const port=3000;
const log=require("../Assignment/middleware/log");
app.use(log);
app.use("/employees",employees);
app.listen(port,()=>
{
    console.log(`Server started on port : ${port}`);
})
