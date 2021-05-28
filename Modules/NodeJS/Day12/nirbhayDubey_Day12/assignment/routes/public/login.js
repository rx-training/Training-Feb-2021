const express=require('express');
const jwt=require('jsonwebtoken');
const Result=require('../../models/Result');
const router=express.Router();

class Login{
    static async getStudentNameDocs(){
        const unames=await Result.find().select({ username:1 });
        return unames;
    }
    static async studentLogin(req,res){
        let user={
            username:req.body.username,
            password:req.body.password
        }
        const data=await Login.getStudentNameDocs();
        if(data.find(name=>name.username == user.username) && user.password=="root"){
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
    }
}

router.post('/',Login.studentLogin);

module.exports=router;