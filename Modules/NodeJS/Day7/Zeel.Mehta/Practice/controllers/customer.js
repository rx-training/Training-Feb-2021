 const express=require("express");
 const router=express.Router();

 class Customers
 {
     static CustomerList(req,res )
     {
         console.log(req.params.id);  
         var list=[
             {"CustomerID":1,"CustomerName":"John"},
             {"CustomerID":2,"CustomerName":"Julia"}    ]
        //  return res.json(list);
         if(req.params.id)
         {
            const obj=list.find(p=>p.CustomerID==req.params.id);
            console.log(obj);
            return res.status(200).json(obj);
         }
         else
        {
            return res.json(list);
        }
     }
 }
 router.get("/", Customers.CustomerList);
 router.get("/:id",Customers.CustomerList);
 router.post("/",()=>{

 });
//  router.put("/",()=>{

//  });

 module.exports=router;