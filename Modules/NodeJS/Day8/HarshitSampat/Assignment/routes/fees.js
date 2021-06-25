var router = require('express').Router();
var verifytoken=require('./verifyToken')

fees = [
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
];

router.get('/',verifytoken,(req,res)=>{
    res.json(fees)
})
module.exports =router