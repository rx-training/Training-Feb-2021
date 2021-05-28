const express=require('express');
const Department=require('../../models/Department');
const {Doctor}=require('../../models/Doctor');
const router=express.Router();

class DepartmentRoute{
    static async getDepartments(req,res){
        const result=await Department.find();
        res.status(200).json(result);
    }
    
    static async getDepartment(req,res){
        const dept=await Department.findById(req.params.id);
        if(!dept) return res.status(404).send("The Department with the given Id was not found..");

        res.status(200).json(dept);
    }

    static async postDepartment(req,res){
        const doc=await Doctor
        .findById(req.body.head)
        .select('name phoneno');
        if(!doc) return res.status(404).send("The Doctor with the given Id was not found..");

        const newDept=new Department({
            name:req.body.name,
            head:doc
        });

        await newDept.save();
        res.status(200).json({
            msg:"New Department created successfully..",
            department:newDept
        });
    }

    static async deleteDepartment(req,res){
        const result=await Department.findByIdAndRemove(req.params.id);
        if(!result) return res.status(404).send("The Department with the given Id was not found..");

        res.status(200).json({
            msg:"Department deleted successfully",
            department:result
        });
    }
}

router.get('/',DepartmentRoute.getDepartments);
router.get('/:id',DepartmentRoute.getDepartment);
router.post('/',DepartmentRoute.postDepartment);
router.delete('/:id',DepartmentRoute.deleteDepartment);

module.exports = router;
