const express=require('express');
const HealthcareAssist=require('../../models/HealthcareAssist');
const router=express.Router();

class HealthcareAssistRoute{
    static async getHealthcareAssists(req,res){
        const result=await HealthcareAssist.find();
        res.status(200).json(result);
    }
    
    static async getHealthcareAssist(req,res){
        const assistant=await HealthcareAssist.findById(req.params.id);
        if(!assistant) return res.status(404).send("The Assistant with the given Id was not found..");

        res.status(200).json(assistant);
    }

    static async postHealthcareAssist(req,res){
        
        const newAssist=new HealthcareAssist({
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
            phoneno: req.body.phoneno,
            joindate: req.body.joindate,
            deptassign: req.body.deptassign
        });

        await newAssist.save();
        res.status(200).json({
            msg:"New Assistant created successfully..",
            assistant:newAssist
        });
    }

    static async deleteHealthcareAssist(req,res){
        const result=await HealthcareAssist.findByIdAndRemove(req.params.id);
        if(!result) return res.status(404).send("The Assistant with the given Id was not found..");

        res.status(200).json({
            msg:"Assistant deleted successfully",
            assistant:result
        });
    }
}

router.get('/',HealthcareAssistRoute.getHealthcareAssists);
router.get('/:id',HealthcareAssistRoute.getHealthcareAssist);
router.post('/',HealthcareAssistRoute.postHealthcareAssist);
router.delete('/:id',HealthcareAssistRoute.deleteHealthcareAssist);

module.exports = router;
