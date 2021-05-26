require('dotenv').config()
const express = require("express");
const app = express();
const students = require("./controller/student")

app.use(express.json())

app.use(function (req,res,next) {
    console.log(`${req.url}- ${req.method} and ${new Date()}`);
    next();
})

app.use(function (err,req,res,next) {
    if(err) console.log(err);
    next();
})

app.use("/students", students)

app.listen(3000, () => {
    console.log("server is running")
})


