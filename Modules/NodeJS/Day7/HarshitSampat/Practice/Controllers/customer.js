const express = require('express')
var router = express.Router()

class Customers{
    static CustomersList(req,res){
        var list = [{"CustomerId":1,"CustomerName":"john"},
                    {"CustomerId":2,"CustomerName":"Doe"}];
        res.json(list);
    
    }
}

router.get("/",Customers.CustomersList)
router.post("/",(req,res,next)=>{

})


module.exports =router