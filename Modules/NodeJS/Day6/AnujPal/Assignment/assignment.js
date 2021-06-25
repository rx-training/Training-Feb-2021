var students = require('./student.json');
const express = require('express');
const app = express();
app.use(express.json());
const Joi = require('joi');
const fs=require('fs');


// 1)  Create a RESTFUL API which will return a Studentlist.

app.get('/students', (req, res) => {
    res.send(students);
})


//  2)  Create RESTFUL API which will return a Particular Student Record.

app.get('/students/:id', (req, res) => {
    const student = students.find(c => c.ID === parseInt(req.params.id))
    if (!student) return res.status(404).send("Student not found");
    res.send(student);
})

//  3)  Create a RESTFUL API which return a particular student FEES Record.

app.get('/students/:id/fees', (req, res) => {
    const student = students.find(c => c.ID === parseInt(req.params.id))
    if (!student) return res.status(404).send("Student not found");
    res.send(student.Fees);
})

//   4)   Create a RESTFUL API which will return a particular student Exam Result

app.get('/students/:id/result', (req, res) => {
    const student = students.find(c => c.ID === parseInt(req.params.id))
    if (!student) return res.status(404).send("Student not found");
    res.send(student.Result);
})

//   5)   Create a RESTFUL API which will update a result of result of student id 1.

app.put('/students/:id',(req,res)=>
{
    const student = students.find(c => c.ID === parseInt(req.params.id))
    if (!student) return res.status(404).send("Student not found");

    const { error } = validateMarks(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return
    }

    student.Result.Eng=req.body.marks;
    res.send(students);
    fs.writeFile('./student.json', JSON.stringify(students), (err) => {
        if (err) {
            console.log(err.message);
        }
        else {
            console.log("Data Appended to json file succesfully");
        }

    })
});


app.listen(3000, (err) => {
    if (err) console.error("Error Occured");
    else  console.log("Server started on port 3000");
   
});

//  Function for validate marks of student.

function validateMarks(student) {
    const schema =
    {
        marks: Joi.number().min(0).max(100).required()
    };

    return Joi.validate(student, schema);
}