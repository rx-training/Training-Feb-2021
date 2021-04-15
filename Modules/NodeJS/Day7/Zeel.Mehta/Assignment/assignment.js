let http=require('http');
let express=require('express');
const router=express.Router();
let log=require('./middleware/log');
let fs=require('fs');
let app=express();
app.use(express.json());
app.use(log);
let assignment=require("./controllers/emp");

// const {json} =require('body-parser');
app.use("/emp",assignment);

// app.use(function (err, req, res, next) {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
//   })


http.createServer(app).listen(3000,function()
{
    console.log("Application started at port number 3000")
})


