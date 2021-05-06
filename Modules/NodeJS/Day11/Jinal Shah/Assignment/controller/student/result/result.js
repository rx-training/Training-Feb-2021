const express = require('express')

const student = require('../../../mongoDB/stud')

const childRouter = express.Router({ mergeParams : true})

class A{

    static async get(req,res){
        const ID1 = parseInt(req.params.id)
        const selData = await student.find({ ID : ID1 }).select('Result')
        if(selData.length == 0) res.status(404).send("record not found..")
        res.send(selData[0])
    }

}

childRouter.get('/', A.get)

module.exports = childRouter