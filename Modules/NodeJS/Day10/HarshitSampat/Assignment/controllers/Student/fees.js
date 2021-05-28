var express = require('express')
var router = express()
var verifytoken=require('../../Authentication/verifyToken')
const mongoose = require('mongoose')
const  Student = require('../../model/student.js')


/*fees = [
    {
        feesId:1,
        studentId:1,
        stundeName:'JohnDoe',
        Fees_status:'Completed'
    },
    
    {
        feesId:2,
        studentId:2,
        stundeName:'Samules Jaforson',
        Fees_status:'Completed'
    },
    
    {
        feesId:3,
        studentId:3,
        stundeName:'Jem json',
        Fees_status:'Completed'
    }
];*/




//create function to get all records from studentsFees


router.get('/:id',verifytoken,async function(req,res){
    const fees = await Student.find(req.params.id)
    console.log(fees)
    res.send(JSON.stringify(fees))
})
module.exports =router