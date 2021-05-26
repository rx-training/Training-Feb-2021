let http=require('http');
let express=require('express');
let app=express();
app.use(express.json());
let fs=require('fs');
let student=require('./students.json');

http.createServer(app).listen(3001,function()
{
    console.log("Application started at port number 3001")
});


// 1. Create a RESTFUL API which will return a Studentlist.
app.get("/students",(req,res)=>{
    console.log(student);
    res.json({"Data of Student ":student})
    res.end();
});

// 2. Create RESTFUL API which will return a Particular Student Record
app.get("/students/:ID",(req,res)=>{
    const stud=student.find(s => s.ID ===parseInt(req.params.ID));
    res.send(stud);
    res.end();
})

// 3. Create a RESTFUL API which return a particular student FEES Record.
app.get("/students/:ID/fees",(req,res)=>{
    const stud=student.find(s => s.ID ===parseInt(req.params.ID));
    res.send(stud.Fees);
    res.end();
})

// 4. Create a RESTFUL API which will return a particular student Exam Result.
app.get("/students/:ID/result",(req,res)=>{
    const stud=student.find(s => s.ID ===parseInt(req.params.ID));
    res.send(stud.Result);
    res.end();
})

// 5. Create a RESTFUL API which will update a result of result of student id 1. 
app.put("/students/:ID",(req,res)=>{
    const stud=student.find(s => s.ID ===parseInt(req.params.ID));
    stud.Result.Eng=req.body.Result.Eng;
    fs.writeFile("./students.json",JSON.stringify(student),function(error){
        console.log(error);
    });
    res.send(stud);
    res.end();
})
