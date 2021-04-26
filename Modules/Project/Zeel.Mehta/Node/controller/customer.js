const express=require("express");
const router=express.Router({mergeParams:true});
router.use(express.json())

 const customerdata = require('../modules/customer')

class Customer
{
    static async allData(req,res )
    {
        const data = await customerdata.find()
        res.send(data);
       
    }
    static async getData(req,res )
    {
        const ID = parseInt(req.params.id)
        const data = await customerdata.find({Customer_ID : ID})
        
        if(data.length == 0)
            res.status(404).send("Record not found..")
        res.send(data);
       
    }
    
}
router.get("/", Customer.allData);
router.get("/:id", Customer.getData);


module.exports=router;