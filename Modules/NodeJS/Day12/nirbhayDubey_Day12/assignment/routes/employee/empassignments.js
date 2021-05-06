const express = require('express');
const Joi = require('joi');
const Employee=require('../../models/Employee');
const Assignment=require('../../models/Assignment');
const varifyToken=require('../../authentication/varifyAuth');
const router = express.Router({mergeParams:true});

class Empassignments{

    static async getEmpAssignmentDocs(assignIds) {
        const assignList=await Assignment.find({ AssignmentId:{ $in:assignIds } });
        return assignList;
    }

    static async getEmpAllAssignments(req,res) {
        const data=await Employee.find();
        let emp=data.find(emp=>emp.EmpId == parseInt(req.params.id));
        const assignments=await Empassignments.getEmpAssignmentDocs(emp.assignments);
        res.status(200).json(assignments);
    }

    static async getEmpAssignment(req,res) {
        const data=await Employee.find();
        let emp=data.find(emp=>emp.EmpId == parseInt(req.params.id));
        const assignments=await Empassignments.getEmpAssignmentDocs(emp.assignments);
        let assign=assignments.find(assign=>assign.AssignmentId == parseInt(req.params.aid));
        res.status(200).json(assign);
    }

    static async updateEmpAssignment(req,res){
        let emp=await Employee.findOne({ EmpId:parseInt(req.params.id) });
        let empAssignments=await Assignment.find({ AssignmentId:{ $in:emp.assignments } });
        let cassign=empAssignments.find(e=>e.AssignmentId == parseInt(req.params.aid));
        let upAssign=req.body;
        if(!cassign){ 
            res.status(204).send("ERROR : Wrong AssignmentId..");
            return;
        }
        else{
            cassign.set({
                AssignmentCategory: (upAssign.AssignmentCategory != undefined) ? upAssign.AssignmentCategory : cassign.AssignmentCategory,
                AssignmentName: (upAssign.AssignmentName != undefined) ? upAssign.AssignmentName : cassign.AssignmentName,
                AssignmentProjectedEndDate: (upAssign.AssignmentProjectedEndDate != undefined) ? upAssign.AssignmentProjectedEndDate : cassign.AssignmentProjectedEndDate,
                AssignmentStatus: (upAssign.AssignmentStatus != undefined) ? upAssign.AssignmentStatus : cassign.AssignmentStatus,
                CreationDate: (upAssign.CreationDate != undefined) ? upAssign.CreationDate : cassign.CreationDate,
                DepartmentId: (upAssign.DepartmentId != undefined) ? parseInt(upAssign.DepartmentId): cassign.DepartmentId,
                FullPartTime: (upAssign.FullPartTime != undefined) ? upAssign.FullPartTime : cassign.FullPartTime,
                LastUpdateDate: (upAssign.LastUpdateDate != undefined) ? upAssign.LastUpdateDate : cassign.LastUpdateDate,
                links: (upAssign.links != undefined) ? upAssign.links : cassign.links,
                LocationId: (upAssign.LocationId != undefined) ? upAssign.LocationId : cassign.LocationId,
                ManagerId: (upAssign.ManagerId != undefined) ? upAssign.ManagerId : cassign.ManagerId
            });

            const result = await cassign.save();

            res.status(200).json({
                msg:"Assignment updated successfully",
                assignment:result
            });
        }
    }

    static async insertAssignment(req,res){
        const schema=Joi.object({
            AssignmentCategory:Joi.string().required(),
            AssignmentId:Joi.number().required(),
            AssignmentName: Joi.string().required(),
            AssignmentProjectedEndDate: Joi.string().required(),
            AssignmentStatus: Joi.string().required(),
            CreationDate: Joi.string().required(),
            DepartmentId: Joi.number().required(),
            FullPartTime: Joi.boolean().required(),
            LastUpdateDate: Joi.string().required(),
            links: Joi.array(),
            LocationId: Joi.string().required(),
            ManagerId: Joi.string().required()
        });
        const temp=await schema.validate(req.body);
        if(temp.error){
            res.status(400).send(temp.error.details[0].message);
            return;
        }
        else{
            const assignment=new Assignment(temp.value);
            try{
                const result=await assignment.save();
                res.status(200).send("Assignment added successfully..<br/>"+result);
            }catch(ex){
                console.log(ex.message);
            }
        }
    }
}

router.get('/',varifyToken,Empassignments.getEmpAllAssignments);
router.get('/:aid',varifyToken,Empassignments.getEmpAssignment);
router.put('/:aid',varifyToken,Empassignments.updateEmpAssignment);
router.post('/',varifyToken,Empassignments.insertAssignment);

module.exports=router;