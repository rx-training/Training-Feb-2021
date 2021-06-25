const express=require('express');
const {Patient,validate}=require('../../models/Patient');
const {Doctor}=require('../../models/Doctor');
const HealthcareAssist=require('../../models/HealthcareAssist');
const router=express.Router();

class PatientRoute{
    static async getPatients(req,res){
        const result=await Patient.find();
        res.status(200).json(result);
    }

    static async getPatient(req,res){
        const patient=await Patient.findById(req.params.id);
        if(!patient) return res.status(404).send("The Patient with the given Id was not found..");

        res.status(200).json(patient);
    }

    static async postPatient(req,res){
        const {error}=validate(req.body);
        
        if(error) return res.status(400).send(error.details[0].message);
        let docassign=await Doctor
        .find({ _id:{ $in:req.body.docassign } })
        .select('name phoneno');

        console.log(docassign);

        let assistant=await HealthcareAssist
        .find({ _id:{ $in:req.body.healthcare }})
        .select('name phoneno');

        const newPatient=new Patient({
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
            dateadmit: req.body.dateadmit,
            dateout: req.body.dateout,
            docassign: docassign,
            deptassign: req.body.deptassign,
            healthcare: assistant,
            morningdrug: req.body.morningdrug,
            noondrug: req.body.noondrug,
            nightdrug: req.body.nightdrug
        });

        await newPatient.save();
        res.status(200).json({
            msg:"New Patient created successfully..",
            doctor:newPatient
        });
    }

    static async deletePatient(req,res){
        const result=await Patient.findByIdAndRemove(req.params.id);
        if(!result) return res.status(404).send("The Patient with the given Id was not found..");

        res.status(200).json({
            msg:"Patient deleted successfully",
            patient:result
        });
    }
    
    static async getReport(req,res){
        
    }

    static async getMedicine(req,res){
        const patient=await Patient
        .findById(req.params.id)
        .select('name morningdrug noondrug nightdrug');
        if(!patient) return res.status(404).send("The Patient with the given Id was not found..");

        res.status(200).json(patient);
    }
}

router.get('/',PatientRoute.getPatients);
router.get('/:id',PatientRoute.getPatient);
router.post('/',PatientRoute.postPatient);
router.delete('/:id',PatientRoute.deletePatient);
router.get('/:id/report',PatientRoute.getReport);
router.get('/:id/medic',PatientRoute.getMedicine);

module.exports = router;