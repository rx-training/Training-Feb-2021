const express = require('express');
const empdata = require('./Emp.json')

class empLogic{
    static first(req,res) 
    {
        res.json(empdata)
    }
    static second(req,res) {
        console.log(req.params.id)
    
        const d1 = empdata.find(b => b.ID == req.params.id)
        res.json(d1)
    }
    static third(req,res)  {
        console.log("ID = " + req.params.id)
        console.log("req.body.name = " + req.body.FirstName)
    
        const d1 = empdata.find(b => b.ID == req.params.id)
    
        res.json(d1)
        console.log("Original name = " + d1.FirstName)
    
        d1.FirstName = req.body.FirstName
        console.log("new name = " + d1.FirstName) 
     
        fs.writeFile('../Emp.json', JSON.stringify(empdata), (err) => {
            if(err) return res.send(err)
        })   
    }
}

module.exports = empLogic