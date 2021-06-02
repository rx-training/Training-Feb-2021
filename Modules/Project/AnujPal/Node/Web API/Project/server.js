const express=require('express')
var cors = require('cors')
const app=express()
const router=require("../Project/Route/route");
const mongoose=require('mongoose')
const axios=require('axios')
app.use(cors())
app.use(express.json());
app.use("/home",router)


app.listen(5000,(err)=>
{
    if(err)
    {
        console.error("Error occured during starting server");
    }
    console.log("Server started on port 5000");
})

app.get("",(req,res)=>{
    res.json("hello");
})

mongoose.connect('mongodb://localhost/Project', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', function () {
    console.log("We Are connected to Database");
});