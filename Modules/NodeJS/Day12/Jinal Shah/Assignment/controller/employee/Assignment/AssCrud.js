const express = require('express');

const emp = require('../../../mongoDB/emp')


class logic{

    static async first(req,res){
        const ID1 = parseInt(req.params.id)
        const selData = await emp.find({ ID : ID1 }).select('Assignments')
        if(selData.length == 0) res.status(404).send("record not found..")
        res.send(selData[0])
    }

    static async second(req,res) {
        const ID1 = parseInt(req.params.id)
        const ID2 = parseInt(req.params.aid)

        const selData = await emp.find({ ID : ID1 })
        const assData = await selData[0].Assignments
        console.log(assData)

        const newData = assData.find(e => e.AID == ID2)
        if(!newData) res.status(404).send("record not found..")
        res.send(newData)
    }

    static async third(req,res) {

        const ID1 = parseInt(req.params.id)
        const ID2 = parseInt(req.params.aid)

        const selData = await emp.find({ ID : ID1 })
        const assData = await selData[0].Assignments
        //console.log(assData)

        const newData = assData.find(e => e.AID == ID2)
        if(!newData) res.status(404).send("record not found..")
        
        const updatedata = req.body
        for(let i in updatedata){
            newData[i] = updatedata[i]
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
}

module.exports = logic


/*


{
    "ID" : 1,
    "Name" : "Veer",
    "HireDate" : "2020-01-01",
    "PhNo" : 123897563,
    "City" : "AHMdabad",
    "Assignments" : [{
        "AID" : 11,
        "Name" : "routing",
        "Status" : "complete"
    },{
        "AID" : 12,
        "Name" : "routing",
        "Status" : "partial complete"
    },
    {
        "AID" : 13,
        "Name" : "routing",
        "Status" : "Incomplete"
    }]
}

*/