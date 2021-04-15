const express = require('express');
const empdata = require('../Emp.json')

class logic{

    static first(req,res){
    
            const d1 = empdata.find(b => b.ID == req.params.id)
        
                    res.json(d1.assignments)
                    console.log(d1.assignments)
    }

    static second(req,res) {

        const i = req.params.id
        const j = req.params.aid

        const d1 = empdata.find(b => b.ID == i)
        const data = d1.assignments.find(c => c.AssignmentId == j) 

        if(!data){
            res.status(404).send("Record not found for this ID")
        }
        res.send(data)
        //console.log(data)
    
    }

    static third(req,res) {

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
    }
}

module.exports = logic