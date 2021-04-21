const express=require("express");
const router=express.Router({mergeParams:true});
router.use(express.json())
const stud=require("../students.json");
// const jwt = require('jsonwebtoken');
 const childr=require("./Child/result");
 const childf=require("./Child/fees");

// // const {json} =require('body-parser');

class Student
{
    static StudList(req,res )
    {
        console.log(req.params.id);  
       //  return res.json(list);
        if(req.params.id)
        {
           const obj=stud.find(p=>p.ID===parseInt(req.params.id));
           console.log(obj);
           
           return res.status(200).json(obj);
           
        }
        else
       {
           return res.json(stud);
       }
       
    }
}
router.get("/", Student.StudList);
router.get("/:id", Student.StudList);
// router.post("/:id", Employee.EmpList);

router.use("/:id/result",childr);
router.use("/:id/fees",childf);

module.exports=router;