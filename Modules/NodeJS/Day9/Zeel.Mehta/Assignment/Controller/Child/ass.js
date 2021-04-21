const express=require("express");
const router=require('../emp');
const ass=require("../../ass.json");
const fs=require('fs');
const childR = express.Router({mergeParams:true})
childR.use(express.json())
class Assign
{
    static AssignList(req,res )
    {
        console.log(req.params.id);  
       //  return res.json(list);
        if(req.params.id)
        {
           const obj=ass.find(a=>a.ID==req.params.id);
           console.log(obj);
           res.json(obj);
        }
        else
       {
           res.json(ass);
       }
    }
    static AssignList2(req,res)
    {
        
            let y=req.params.id;
            let z=req.params.aid;
            const obj=ass.find(a=>a.ID==y);
           const obj1=obj.assignments.find(a=>a.Id==z); 
        //    console.log(obj);
          res.json(obj1);
    }
    static AssignPut(req,res)
    {
        
            let y=req.params.id;
            let z=req.params.aid;
            const obj=ass.find(a=>a.ID==y);
            const obj1=obj.assignments.find(a=>a.Id==z); 
    
            if(!obj1) res.status(404).send("NOT FOUND")

            obj1.ActionCode=req.body.ActionCode;
            fs.writeFile("./ass.json",JSON.stringify(ass),function(error){
                console.log(error);
                console.log("hello");
            });
            res.send(obj1);
            
            res.end();
       
    }
}
childR.get("/", Assign.AssignList);
childR.get("/:aid", Assign.AssignList2);
childR.put("/:aid", Assign.AssignPut);


module.exports=childR;