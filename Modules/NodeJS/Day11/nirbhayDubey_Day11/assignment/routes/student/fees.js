const express=require('express');
const varifyToken=require('../../authentication/varifyAuth');
const Fee=require('../../models/Fees');
const router=express.Router();

class Fees{
    static async getFeesDocs(){
        const fees=await Fee.find();
        return fees;
    }
    static async getFees(req,res){
        const data=await Fees.getFeesDocs();
        res.status(200).json(data);
    }
}

router.get('/',varifyToken,Fees.getFees);

module.exports=router;