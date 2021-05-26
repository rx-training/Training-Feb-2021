let http=require('http');
let express=require('express');
const router=express.Router();
let log=require('./middleware/log');
let fs=require('fs');
let app=express();
app.use(express.json());
app.use(log);
let customer=require("./controllers/customer");
let seller=require("./controllers/seller");
let student=require('./students.json');
// const {json} =require('body-parser');
app.use("/customer",customer);
// router.use("/seller",seller);
http.createServer(app).listen(3000,function()
{
    console.log("Application started at port number 3000")
})

// app.get("/students",(req,res)=>{
//     console.log(student);
//     res.send({"Data":student});
//     res.end();
// })

// app.post("/students",(req,res)=>{
//     var object=req.body;
//     student.push(object);
//     fs.writeFile("./student.json",JSON.stringify(student),function(error){
//         console.log(error);
//     });
//     res.send(student);
//     res.end();
//     console.log(req.body);
// })
