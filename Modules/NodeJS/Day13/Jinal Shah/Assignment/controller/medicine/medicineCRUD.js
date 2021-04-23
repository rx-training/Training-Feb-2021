var express = require('express');

const medicine = require('../../models/medicine');


class medicineLogic{

    static async all(req,res){
        const sdata =await medicine.find()
        res.send(sdata)
    }

    static async insert(req,res) {
        const newdata = req.body
        const data1 = new medicine(newdata)
        try{
            const result = await data1.save();
            res.send(result)
        }
        catch(ex){
            for(let field in ex.errors)
                console.log(ex.errors[field].message)
        }
    }

    static async get(req,res){
        const ID1 = req.params.id
        const sdata =await medicine.find({ MedicineID : ID1})
        res.send(sdata)
    }

    static async delete(req,res)  {
        const ID1 = req.params.id
        console.log(ID1)
        const selData = await medicine.find({ MedicineID : ID1 })
        if(selData.length == 0) res.status(404).send("record not found..")
        const remove = await medicine.remove({ MedicineID : ID1 })
        res.send(selData)
    }

}

module.exports = medicineLogic