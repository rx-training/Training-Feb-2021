const express = require('express');
const Employee=require('../../models/Employee');
const Assignment=require('../../models/Assignment');
const varifyToken=require('../../authentication/varifyAuth');
const router = express.Router({mergeParams:true});

class Empassignments{

    static async getEmpDocs() {
        const emps=await Employee.find();
        return emps;
    }

    static async getEmpAssignmentDocs(assignIds) {
        const assignList=await Assignment.find({ AssignmentId:{ $in:assignIds } });
        return assignList;
    }

    static async getEmpAllAssignments(req,res) {
        const data=await Empassignments.getEmpDocs();
        let emp=data.find(emp=>emp.EmpId == parseInt(req.params.id));
        const assignments=await Empassignments.getEmpAssignmentDocs(emp.assignments);
        res.status(200).json(assignments);
    }

    static async getEmpAssignment(req,res) {
        const data=await Empassignments.getEmpDocs();
        let emp=data.find(emp=>emp.EmpId == parseInt(req.params.id));
        const assignments=await Empassignments.getEmpAssignmentDocs(emp.assignments);
        let assign=assignments.find(assign=>assign.AssignmentId == parseInt(req.params.aid));
        res.status(200).json(assign);
    }
}

router.get('/',varifyToken,Empassignments.getEmpAllAssignments);
router.get('/:aid',varifyToken,Empassignments.getEmpAssignment);

module.exports=router;