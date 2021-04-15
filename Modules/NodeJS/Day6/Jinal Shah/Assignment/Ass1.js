/* 1. Create a RESTFUL API which will return a Studentlist.
      http://localhost:3000/students */

        let express = require('express');
        const fs = require('fs')

        let app =express();
        app.use(express.json())

        let student = require('./students.json')

        app.get("/students",(req,res) => {

            res.send(`${student[0].ID} ${student[0].Name} ${student[0].Address}
                 <br> ${student[1].ID} ${student[1].Name} ${student[1].Address}`)

            console.log(student)
            //res.json(student);
            res.end();
        }).listen(3000)   

    

/* 2. Create RESTFUL API which will return a Particular Student Record
      http://localhost:3000/students/1 */

      app.get('/students/:id', (req, res) => {
          //console.log(req.params.id)
          const data = student.find((c) => c.ID == req.params.id)

          if (!data) res.status(404).send('Ooops... Can not find what you are looking for!</h2>');
          res.send(data);


          console.log(data)
          //res.send(data)
      }) 

     
/* 3. Create a RESTFUL API which return a particular student FEES Record. 
      Fees field are http://localhost:3000/students/1/fees */

      app.get('/students/:id/fees', (req, res) => {
          //console.log(req.params.id)
          const data = student.find((c) => c.ID == req.params.id)

          var i = student.indexOf(data)

          if (!data) res.status(404).send('Ooops... Can not find what you are looking for!</h2>');
          res.send(student[i].Fees);

          console.log(student[i].Fees)
          //console.log(data)
          //res.send(data)
      })



/* 4. Create a RESTFUL API which will return a particular student Exam Result. 
      Result Fields are http://localhost:/3000/students/1/result */

      app.get('/students/:id/result', (req, res) => {
          //console.log(req.params.id)
          const data = student.find((c) => c.ID == req.params.id)

          var i = student.indexOf(data)

          if (!data) res.status(404).send('Ooops... Can not find what you are looking for!</h2>');
          res.send(student[i].Result);

          console.log(student[i].Result)
          //console.log(data)
          //res.send(data)
      })

/* 5. Create a RESTFUL API which will update a result of result of student id 1. 
      Update the marks for English Subject. */

      app.put('/student/:id', (req, res) => {

          const data = student.find(c => c.ID == req.params.id) 

          //console.log(data)
          console.log(req.body.Result.Eng)

          var i = student.indexOf(data)
          console.log(i)
          console.log(student[i].Result.Eng)

          student[i].Result.Eng = req.body.Result.Eng
          console.log(student[i].Result)

          fs.writeFile('./students.json', JSON.stringify(student), (err) => {
              if(err) return res.send(err)
          }) 
      
      })



/* Postman > put method >body > raw > JSON

{ 
    "Result" : { "Eng" : "30" }
}

*/


