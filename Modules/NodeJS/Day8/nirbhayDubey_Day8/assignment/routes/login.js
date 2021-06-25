const jwt=require('jsonwebtoken');
const express=require('express');
const fs=require('fs');
const router=express.Router();

class Login{
    static getStudentNameJson(){
        return new Promise((resolve,reject)=>{
            fs.readFile('./models/results.json','utf8',(err,data)=>{
                if(err){
                    reject(err);
                }
                else{
                    let result=JSON.parse(data);
                    let unames=[];
                    result.forEach(element => {
                        unames.push(element.username);
                    });
                    resolve(unames);
                }   
            });
        });
    }
    static studentLogin(req,res){
        let user={
            username:req.body.username,
            password:req.body.password
        }
        Login.getStudentNameJson()
        .then(
            (data)=>{
                if(data.find(name=>name == user.username) && user.password=="root"){
                    let jwtoken=jwt.sign(user,global.config.secretKey,{
                        algorithm:global.config.algorithm,
                        expiresIn:'5m'
                    });
                    res.json({
                        message:'Login successfull..',
                        token:jwtoken
                    });
                }else{
                    res.sendStatus(403);
                }
            },
            (err)=>{
                console.log("No user found");
                res.sendStatus(403);
            }
        );
        
    }
}

router.post('/login',Login.studentLogin);

module.exports=router;
