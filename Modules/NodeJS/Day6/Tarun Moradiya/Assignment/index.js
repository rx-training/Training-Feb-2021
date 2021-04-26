const express = require('express');
const fs = require('fs')
const students = require('./data/students.json')

const app = express();

//middleware to get json data from req.body
app.use(express.json())

// 1. Create a RESTFUL API which will return a Studentlist.
// http://localhost:3000/students

app.get('/students', (req, res) => {
    res.send(students)
})

// 2. Create RESTFUL API which will return a Particular Student Record
// http://localhost:3000/students/1

app.get('/students/:id', (req, res) => {
    const student = students.find((c) => c.ID == req.params.id)
    res.send(student)
})

//3. Create a RESTFUL API which return a particular student FEES Record. Fees field are http://localhost:3000/students/1/fees

app.get('/students/:id/fees', (req, res) => {
    const student = students.find((c) => c.ID == req.params.id)
    res.send(student.Fees)
})

//4. Create a RESTFUL API which will return a particular student Exam Result. Result Fields are http://localhost:3000/students/1/result

app.get('/students/:id/result', (req, res) => {
    const student = students.find((c) => c.ID == req.params.id)
    res.send(student.Result)
})

//5. Create a RESTFUL API which will update a result of result of student id 1. Update the marks for English Subject.
//http://localhost:3000/students/1/result
app.put('/students/:id/result', (req, res) => {
    const student = students.find(c => c.ID == req.params.id) 

    if(!student) return res.send('student with this id does not exist')
    if(!req.body.Eng) return res.send('Need to provide name of the student')

    const index = students.indexOf(student)

    students[index].Result.Eng = req.body.Eng

    fs.writeFile('data/students.json', JSON.stringify(students), (err) => {
        if(err) return res.send(err)
    })

    res.send(students[index])
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`server running on port ${port}`))