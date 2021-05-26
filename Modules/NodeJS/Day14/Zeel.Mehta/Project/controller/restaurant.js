const express=require("express");
const router=express.Router({mergeParams:true});
router.use(express.json())

 const restaurantdata = require('../modules/restaurant')

class Restaurant
{
    static async allData(req,res )
    {
        const data = await restaurantdata.find()
        res.send(data);
       
    }
    static async getData(req,res )
    {
        const ID = req.params.id
        const data = await restaurantdata.find({Restaurant_ID : ID})
        
        if(data.length == 0)
            res.status(404).send("Record not found..")
        res.send(data);
       
    }
    
}
router.get("/", Restaurant.allData);
router.get("/:id", Restaurant.getData);


module.exports=router;