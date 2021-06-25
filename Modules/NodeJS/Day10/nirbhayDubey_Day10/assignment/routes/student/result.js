const express=require('express');
const varifyToken=require('../../authentication/varifyAuth');
const Result=require('../../models/Result');
const router=express.Router();

class Results{
    static async getResult(req,res){
        const sResult=await Result.find({ username:req.user.username });
        res.status(200).json(sResult);
    }
    static async getAllResult(req,res){        
        const results=await Result.find();
        res.status(200).json(results);
    }
}

router.get('/',varifyToken,Results.getResult);
router.get('/all',varifyToken,Results.getAllResult);

module.exports=router;


