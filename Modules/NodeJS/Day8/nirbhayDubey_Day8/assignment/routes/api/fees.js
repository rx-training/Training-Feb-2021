const jwt=require('jsonwebtoken');
const express=require('express');
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
        jwt.verify(req.token,global.config.secretKey,{algorithms:global.config.algorithm},(err,authData)=>{
            if(err){
                res.sendStatus(403);
            }
            else{
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
        });
    }
}

router.get('/',varifyToken,Fees.getFees);

function varifyToken(req,res,next){
    let jwtoken=req.headers['authorization'];
    if(jwtoken !== undefined){
        req.token=jwtoken;
        next();
    }else{
        res.sendStatus(403);
    }
}

module.exports=router;