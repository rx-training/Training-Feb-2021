const express=require("express");
const router=express.Router({mergeParams:true});
router.use(express.json())

//  const childr=require("./Child/result");
//  const childf=require("./Child/fees");

 const patientdata = require('../mongodb/patient')
//const doctor = require('../mongodb/doctor')

class Patient
{
    static async allData(req,res )
    {
        const pdata = await patientdata.find()
         
         .populate('Medicine')
        res.send(pdata);
       
    }
    static async getData(req,res )
    {
        const pID = parseInt(req.params.id)
        const pdata = await patientdata.find({pId : pID})
        
        .populate('Medicine')
        if(pdata.length == 0)
            res.status(404).send("Record not found..")
        res.send(pdata);
       
    }
    
}
router.get("/", Patient.allData);
router.get("/:id", Patient.getData);


module.exports=router;