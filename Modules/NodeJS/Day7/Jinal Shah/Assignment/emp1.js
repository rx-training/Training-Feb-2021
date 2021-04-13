    const express = require('express');
    const router = express.Router();
    const fs = require('fs');

    const empdata = require ('./Emp.json')

    class employee{
        static log(){
            console.log('Time:', Date.now())
        }
    }

    router.get("/",employee.log)

/* Create a Restful API to create an employee,get all employees, get an employees,get an employee,update and employee
   http://localhost:3000/emps */

        router.get("/emps",(req,res) => {
            res.json(empdata)
            console.log('Time:', Date.now())
            console.log(empdata)
        })

        router.get("/emps/:id",(req,res) => {
            console.log('Time:', Date.now())
            console.log(req.params.id)

            const d1 = empdata.find(b => b.ID == req.params.id)
            res.json(d1)
            //res.send("data")
            //console.log(empdata)
        })

        router.put("/emps/:id",(req,res) => {
            console.log("ID = " + req.params.id)
            console.log("req.body.name = " + req.body.FirstName)

            const d1 = empdata.find(b => b.ID == req.params.id)

            res.json(d1)
            //res.send("data")
            console.log("Original name = " + d1.FirstName)

            d1.FirstName = req.body.FirstName
            console.log("new name = " + d1.FirstName)

            fs.writeFile('./Emp.json', JSON.stringify(empdata), (err) => {
                if(err) return res.send(err)
            })  
        })

        /* { "FirstName" : "alice" } */


    /* Create an Assignments API http://localhost:3000/emps/{empID}/child/assignments */

        router.get("/emps/:id/child/assignments",(req,res) => {
            //console.log(req.params.id)

            const d1 = empdata.find(b => b.ID == req.params.id)

            res.json(d1.assignments)
            console.log(d1.assignments)
            //res.send("data")
            //console.log(empdata)
        })

    /* Get an Assignment http://localhost:3000/emps/{empID}/child/assignments/{AssignmentID} */

        router.get("/emps/:id/child/assignments/:aid",(req,res) => {
            console.log(req.params.id)
            console.log(req.params.aid)
            const i = req.params.id
            const j = req.params.aid

            //res.json(empdata[0].assignments[0])
            //res.json(empdata[i-1].assignments)

            const d1 = empdata.find(b => b.ID == i)
            //console.log(d1)
            //res.send(d1)
            const data = d1.assignments.find(c => c.AssignmentId == j) 

            if(!data){
                res.status(404).send("Record not found for this ID")
            }
            res.send(data)
            console.log(data)
        
        })

    /* Update an assignment http://localhost:3000/emps/{empID}/child/assignments/{AssignmentID} */

        router.put("/emps/:id/child/assignments/:aid",(req,res) => {

            console.log("ID = " + req.params.id)
            console.log("Assignment ID = " + req.params.aid)
            console.log("req.body.AssignmentName = " + req.body.AssignmentName)

            const i = req.params.id
            const j = req.params.aid

            const d1 = empdata.find(b => b.ID == i)
            //console.log(d1)
            //res.send(d1)
            const data = d1.assignments.find(c => c.AssignmentId == j) 
            console.log("Original value = " + data.AssignmentName)

            data.AssignmentName = req.body.AssignmentName
            console.log("changed value = " + data.AssignmentName)

            res.send(data)

            /* fs.writeFile('./Emp.json', JSON.stringify(empdata), (err) => {
                if(err) return res.send(err)
            })  */
        })


        module.exports = router;