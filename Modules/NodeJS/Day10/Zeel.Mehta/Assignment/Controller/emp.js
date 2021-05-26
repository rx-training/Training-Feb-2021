const express=require("express");
const router=express.Router({mergeParams:true});
router.use(express.json())

const childa=require("./Child/ass");
const empdata=require('../Mongodb/emp')
class Employee
{
    static async allData(req,res )
    {
        const edata=await empdata.find()
        res.send(edata);
    }
    static async getData(req,res )
    {
        const eID=req.params.id
        const edata=await empdata.find({ID : eID})
        if(edata.length == 0)
            res.status(404).send("record not found..")
        res.send(edata);
       
    }
}
router.get("/", Employee.allData);
router.get("/:id", Employee.getData);



router.use("/:id/child/assignment",childa);

module.exports=router;