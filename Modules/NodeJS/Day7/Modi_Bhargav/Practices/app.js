const http = require('http');
const express = require('express');
const fs = require('fs');
const apps = require('./middleware/app')
const app = express();
// app.use(express.json())
// app.use(apps)
// express.json() and apps ko specific use kar sakte hey
const students = require('./student.json');
// const Joi = require('joi')

/*1. Create a RESTFUL API which will return a Studentlist.
http://localhost:3000/students.*/

http.createServer(app).listen(3000,function(){
  console.log("this 3000 port susscesfully run")
})

// specific use express.json(),apps
app.get('/students',[express.json(),apps],(req,res) => {

  console.log(students)
  res.send({"students":students});
  res.end()
})

/* 2. Create RESTFUL API which will return a Particular Student Record.
http://localhost:3000/students/1*/

app.get('/students/:ID',(req,res) => {

  let student = students.find(i => i.ID === parseInt(req.params.ID))
  if(!student) res.status(404).send("Your student Id data is wrong.")
  console.log(student)
  res.send({student});
  res.end()
})

/* 3. Create a RESTFUL API which return a particular student FEES Record. Fees field are http://localhost:3000/students/1/fees */

app.get('/students/:ID/fees',(req,res) => {

  let student = students.find(i => i.ID === parseInt(req.params.ID))
  if(!student) res.status(404).send("Your student Id Is data is wrong.")
  res.send({Fees:student.Fees});
  res.end()
})

/* 4. Create a RESTFUL API which will return a particular student Exam Result. Result Fields are http://localhost:/3000/students/1/result.*/

app.get('/students/:ID/result',(req,res) => {
  let student = students.find(i => i.ID === parseInt(req.params.ID))
  if(!student) res.status(404).send("Your student Id Is data is wrong.")
  res.send({Result:student.Result});
  res.end();
})

/* 5. Create a RESTFUL API which will update a result of result of student id 1. Update the marks for English Subject.*/
app.put('/students/:ID',(req,res) => {
  let student = students.find(u => u.ID === parseInt(req.params.ID))
  if(!student) res.status(404).send("Your students Id Is Not Found")
  const newData = req.body
    for (let i in newData) {
      student[i] = newData[i]
    }
  fs.writeFile('./student.json',JSON.stringify(students),(error) => {
    console.log(error)
  });
  res.send(students);
  res.end();
})