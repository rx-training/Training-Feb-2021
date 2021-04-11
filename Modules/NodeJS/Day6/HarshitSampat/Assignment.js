 const express = require('express')
 const app = express()
  
 app.use(express.json())

 const port = process.env.PORT ||3000
 app.listen(port,()=>console.log(`Listening on prt ${port}...`))

const Students=[{ID:1,"Name":"Reena","Address":"Ahmedabad",
    Fees:{"Amount":10000,"PaymentDate":"12/12/2020","Status":"true"},
    Result:{"Hindi":80,"Eng":70,"Math":70,"Total":210,"Grade":"A"}
},
{ID:2,"Name":"Rita","Address":"Surat",
 Fees:{"Amount":12000,"PaymentDate":"12/12/2020","Status":"false"},

Result:{"Hindi":80,"Eng":70,"Math":60,"Total":210,"Grade":"A"}
}
]
app.get('/',(req,res)=>{
    res.send("Hello are you new here ?? !!Let's change url for the new Things!!")
})

app.get('/students',(req,res)=>{
    res.send(Students)
})

app.get('/students/:ID',(req,res)=>{
    const student = Students.find(c=>c.ID === parseInt(req.params.ID))
    if(!student)res.send('<h2 style ="color":"red">Hey dear!!not found try another id</h2>')    
    res.send(student)
})

app.get('/students/:ID/fees',(req,res)=>{
    const student =Students.find(c=>c.ID === parseInt(req.params.ID))
    if(!student)res.send('<h2 style ="color":"red">Hey dear!!not found try another id</h2>')
    res.send(student.Fees)
})

app.get('/students/:ID/result',(req,res)=>{
    const student =Students.find(c=>c.ID === parseInt(req.params.ID))
    if(!student)res.send('<h2 style ="color":"red">Hey dear!!not found try another id</h2>')
    res.send(student.Result)
})

app.put('/students/:ID/updateMarks',(req,res)=>{
    const student =Students.find(c=>c.ID === parseInt(req.params.ID))
    if(!student)res.send('<h2 style ="color":"red">Hey dear!!not found try another id</h2>')
    student.Result.Eng = student.body.result.Eng
    
    res.send(student)
})