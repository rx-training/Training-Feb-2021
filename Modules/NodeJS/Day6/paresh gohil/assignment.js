/*1. Create a RESTFUL API which will return a Studentlist.*/

const express = require("express")
const app = express();
app.use(express.json())

const students=[
    {"ID":1,"Name":"Reena","Address":"Ahmedabad","Fees":{"Amount":10000,"PaymentDate":"12/12/2020","Status":"true"},"Result":{"Hindi":80,"Eng":70,"Math":60,"Total":210,"Grade":"A"}},  
    {"ID":2,"Name":"Rita","Address":"Surat", "Fees":{"Amount":12000,"PaymentDate":"12/12/2020","Status":"false"},"Result":{"Hindi":80,"Eng":70,"Math":60,"Total":210,"Grade":"A"}
}]
var server = app.listen(3000, () => {
    console.log("server is running")
})

app.get("/students",(req,res) => {
    res.send(students)
})


/*2. Create RESTFUL API which will return a Particular Student Record*/

app.get("/students/:ID",(req,res) => {
    const student = students.find(c => c.ID === parseInt(req.params.ID))

    if(!student) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>')
    res.send(student)
})

/*3. Create a RESTFUL API which return a particular student FEES Record.*/

app.get("/students/:ID/Fees",(req,res) => {
    const student1 = students.find(c => c.ID === parseInt(req.params.ID))

    if(!student1) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>')
    res.send(student1.Fees)
})

/*4. Create a RESTFUL API which will return a particular student Exam Result.*/

app.get("/students/:ID/Result",(req,res) => {
    const student2 = students.find(c => c.ID === parseInt(req.params.ID))

    if(!student2) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>')
    res.send(student2.Result)
})

/*5. Create a RESTFUL API which will update a result of result of student id 1. Update the marks for English Subject.*/

app.put("/students/:ID",(req,res) => {
    const student3 = students.find(c => c.ID === parseInt(req.params.ID))
    student3.Result.Eng = req.body.Eng
    res.send(student3)
})
