const router=require("./customer");
const express=require("express");
const app=express();
app.use("/app",router);
app.listen(3001,(err)=>
{
    if(!err) console.log("Server is started on port 3001");
});

