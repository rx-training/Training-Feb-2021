const express=require('express');
const app=express();
const mongoose = require('mongoose');

const employees=require('../Assignment/controller/Employees/employee');
const port=3000;
const log=require("../Assignment/middleware/log");
app.use(log);
app.use("/employees",employees);
app.listen(port,()=>
{
    console.log(`Server started on port : ${port}`);
})


mongoose.connect('mongodb://localhost/Day10-Assignment', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.once('open', function() {
  console.log("We Are connected to Database");
});