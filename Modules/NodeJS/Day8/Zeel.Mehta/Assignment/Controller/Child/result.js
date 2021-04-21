const express=require("express");
const router=require('../stud');
const student=require("../../students.json");
const fs=require('fs');
const childR = express.Router({mergeParams:true})
childR.use(express.json())
class Result
{
    static resultList(req,res )
    {
        console.log(req.params.id);  
       //  return res.json(list);
        if(req.params.id)
        {
            const obj=student.find(a=>a.ID===parseInt(req.params.id));
           console.log(obj);
           res.json(obj.Result);
        }
        else
       {
           res.json(ass);
       }
    }
    
}
childR.get("/", Result.resultList);
// childR.get("/:aid", Assign.AssignList2);
// childR.put("/:aid", Assign.AssignPut);


module.exports=childR;