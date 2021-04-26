var express = require('express');

const dr = require('../../models/doctor');
const patdata = require('../../models/patient')


class medicineLogic{

    static async all(req,res){
        const sdata =await dr.find()
        res.send(sdata)
    }

    static async getbyid(req,res){
        const ID1 = parseInt(req.params.id)
        const sdata =await dr.find({ DoctorID : ID1})
        res.send(sdata)
    }

    static async insert(req,res) {
        const newdata = req.body
        const data1 = new dr(newdata)
        try{
            const result = await data1.save();
            res.send(result)
        }
        catch(ex){
            for(let field in ex.errors)
                console.log(ex.errors[field].message)
        }
    }

    static async delete(req,res)  {
        const ID1 = parseInt(req.params.id)
        console.log(ID1)
        const selData = await dr.find({ DoctorID : ID1 })
        if(selData.length == 0) res.status(404).send("record not found..")
        const remove = await dr.remove({ DoctorID : ID1 })
        res.send(selData)
    }

    static async update(req,res)  {
        const ID1 = parseInt(req.params.id)
        console.log(ID1)
        const selData = await dr.find({ DoctorID : ID1 })
        if(selData.length == 0) res.status(404).send("record not found..")
        const newdata = req.body
        for(let i in newdata){
            selData[0][i] = newdata[i]
        }
        //const result = await selData[0].save()
        //res.send(result)
        try{
            const result = await selData[0].save();
            res.send(result)
        }
        catch(ex){
            for(let field in ex.errors)
                console.log(ex.errors[field].message)
        }
    }

    static async patientData(req,res){
        const ID1 = parseInt(req.params.id)
        const selData = await dr.find({ DoctorID : ID1 })
        if(selData.length == 0) res.status(404).send("record not found..")

        const patientDetail = await patdata.find().populate('Doctors')
        var data = []
        for(var i of patientDetail){
            for(var j of i.Doctors){
                if(j.DoctorID == ID1){
                    const patient1 = await patdata.find({ patientID : i.patientID})
                    .select('patientName')
                    data.push(patient1)
                }
            }
        }
        if( data.length == 0) res.status(404).send("record not found..")
        res.send(data)
    }

}

module.exports = medicineLogic