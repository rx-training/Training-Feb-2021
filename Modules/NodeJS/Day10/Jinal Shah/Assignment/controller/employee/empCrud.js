const express = require('express');
const emp = require('../../mongoDB/emp')

class empLogic{
    static async all(req,res) 
    {
        const sdata =await emp.find()
        res.send(sdata)
    }
    static async insert(req,res) {
        const newdata = req.body
        const data1 = new emp(newdata)
        const result = await data1.save()
        res.send(result)
    }
    static async get(req,res)  {
        const ID1 = parseInt(req.params.id)
        const selData = await emp.find({ ID : ID1 })
        if(selData.length == 0) res.status(404).send("record not found..")
        res.send(selData)
    }
    static async update(req,res)  {
        const ID1 = parseInt(req.params.id)
        const selData = await emp.find({ ID : ID1 })
        if(selData.length == 0) res.status(404).send("record not found..")
        const newdata = req.body
        for(let i in newdata){
            selData[0][i] = newdata[i]
        }
        const result = await selData[0].save()
        res.send(result)
    }
    static async delete(req,res)  {
        const ID1 = parseInt(req.params.id)
        const selData = await emp.find({ ID : ID1 })
        if(selData.length == 0) res.status(404).send("record not found..")
        const remove = await emp.remove({ ID : ID1 })
        res.send(selData)
    }
}

module.exports = empLogic