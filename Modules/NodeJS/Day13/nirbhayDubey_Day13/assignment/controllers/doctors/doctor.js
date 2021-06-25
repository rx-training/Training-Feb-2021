const express=require('express');
const {Doctor, validate}=require('../../models/Doctor');
const router=express.Router();

class DoctorRoute{
    static async getDoctors(req,res){
        const result=await Doctor.find();
        res.status(200).json(result);
    }
    
    static async getDoctor(req,res){
        const doc=await Doctor.findById(req.params.id);
        if(!doc) return res.status(404).send("The Doctor with the given Id was not found..");

        res.status(200).json(doc);
    }

    static async postDoctor(req,res){
        const {error}=validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        
        const newDoc=new Doctor({
            name:req.body.name,
            specialization:req.body.specialization,
            phoneno:req.body.phoneno,
            joindate:req.body.joindate
        });

        await newDoc.save();
        res.status(200).json({
            msg:"New Doctor created successfully..",
            doctor:newDoc
        });
    }

    static async deleteDoctor(req,res){
        const result=await Doctor.findByIdAndRemove(req.params.id);
        if(!result) return res.status(404).send("The Doctor with the given Id was not found..");

        res.status(200).json({
            msg:"Doctor deleted successfully",
            doctor:result
        });
    }
}

router.get('/',DoctorRoute.getDoctors);
router.get('/:id',DoctorRoute.getDoctor);
router.post('/',DoctorRoute.postDoctor);
router.delete('/:id',DoctorRoute.deleteDoctor);

module.exports = router;
