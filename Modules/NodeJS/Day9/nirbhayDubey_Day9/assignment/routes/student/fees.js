const express=require('express');
const varifyToken=require('../../authentication/varifyAuth');
const fs=require('fs');
const router=express.Router();

class Fees{
    static getFeesJson(){
        return new Promise(function(resolve,reject){
            fs.readFile('./models/fees.json','utf8',(err,data)=>{
                if(err){
                    reject(err);
                }
                else{
                    let fees=JSON.parse(data);
                    resolve(fees);
                }
            });
        });
    }
    static getFees(req,res){
        Fees.getFeesJson()
        .then(
            (data)=>{
                res.status(200).json(data);
            },
            (err)=>{
                res.status(403).send("Fees not available..");
            }
        );
    }
}

router.get('/',varifyToken,Fees.getFees);

module.exports=router;