const express=require("express");
const router=express.Router({mergeParams:true});
router.use(express.json())
const ass=require("../ass.json");
const child=require("./Child/ass");

// // const {json} =require('body-parser');

class Employee
{
    static EmpList(req,res )
    {
        console.log(req.params.id);  
       //  return res.json(list);
        if(req.params.id)
        {
           const obj=ass.find(p=>p.ID==req.params.id);
           console.log(obj);
           
           return res.status(200).json(obj);
           
        }
        else
       {
           return res.json(ass);
       }
       
    }
}
router.get("/", Employee.EmpList);
router.get("/:id", Employee.EmpList);
// router.post("/:id", Employee.EmpList);


router.use("/:id/child/assignment",child);

module.exports=router;