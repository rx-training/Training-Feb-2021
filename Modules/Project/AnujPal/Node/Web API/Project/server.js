const express=require('express')
const app=express()
const router=require("../Project/Route/route");
const mongoose=require('mongoose')
app.use(express.json());
app.use("/home",router)
app.listen(3000,(err)=>
{
    if(err)
    {
        console.error("Error occured during starting server");
    }
    console.log("Server started on port 3000");
})

mongoose.connect('mongodb://localhost/Project', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', function () {
    console.log("We Are connected to Database");
});