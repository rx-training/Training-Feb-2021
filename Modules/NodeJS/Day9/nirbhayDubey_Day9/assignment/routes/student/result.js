const express=require('express');
const varifyToken=require('../../authentication/varifyAuth');
const fs=require('fs');
const router=express.Router();

class Results{
    static getStudentResultJson(){
        return new Promise(function(resolve,reject){
            fs.readFile('./models/results.json','utf8',(err,data)=>{
                if(err){
                    reject(err);
                }
                else{
                    let allResult=JSON.parse(data);
                    resolve(allResult);
                }
            });
        });
    }
    static getResult(req,res){
        Results.getStudentResultJson()
        .then(
            (data)=>{
                let sResult=data.find(res=>res.username == req.user.username);
                res.status(200).json(sResult);
            },
            (err)=>{
                res.status(403).send("Result is not available..");
            }
        );
    }
    static getAllResult(req,res){        
        Results.getStudentResultJson()
        .then(
            (data)=>{
                res.status(200).json(data);
            },
            (err)=>{
                res.status(403).send("Results are not available..");
            }
        );
    }
}

router.get('/',varifyToken,Results.getResult);
router.get('/all',varifyToken,Results.getAllResult);

module.exports=router;


