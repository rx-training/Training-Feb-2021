var router = require('express').Router()
const verifyToken = require('../Authentication/verifyToken')


const results =[
    {
        studentID:1,
        studentName:'John Doe',
        result:
        {
            Enlgish:90,
            Math:98,
            science:99
        }
    },
    {
        studentID:2,
        studentName:'Samules Jaforson',
        result:
        {
            Enlgish:95,
            Math:100,
            science:100
        }
    },
    {
        studentID:3,
        studentName:'Jem json',
        result:
        {
            Enlgish:100,
            Math:100,
            science:100
        },
    }
]   

router.get('/',verifyToken,(req,res)=>{
    res.json(results)
})

module.exports=router