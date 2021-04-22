require('dotenv').config()
const express = require("express");
const app = express();
const router = express.Router({mergeParams : true});
const authenticateToken = require("../../authentication/authentication")
const employees = require("../../../models/employees")

app.use(express.json())

router.use("/",authenticateToken)


class assignments1 {

    static all(req,res){
        async function allassignment() {
            const employee = await employees.find({ EmpId : req.params.Empid }).select({Assignments : 1})
            res.send(employee)     
        }
        allassignment()
    }
    static one(req,res){
        async function oneassignment() {
//            var assignmentid = req.params.Assignmentid
            const employee1 = await employees.find({ "EmpId" : req.params.Empid , "Assignments.AssignmetId": req.body.AssignmetId},{"Assignments.$": 1})//.select({Assignments : 1})
            res.send(employee1);            
        }
        oneassignment()
    }
    static posts(req,res){
        async function insertone(){ 
//            const employee2 = { AssignmetId : req.body.Assignmentid , AName : req.body.AName, ACategory : req.body.ACategory , AssignmentNo : req.body.AssignmentNo , AssignmentEnddate : req.body.AssignmentEnddate , Departmentid : req.body.Departmentid , Gradeid : req.body.Gradeid , Jobid : req.body.Jobid, Mangerid : req.body.Mangerid}
            //var employee11 = employees.find({EmpId : req.params.Empid})
            const employee2 = await employees.updateOne({EmpId : req.params.Empid},{"$push":{"Assignments": { AssignmetId : req.body.AssignmetId , AName : req.body.AName, ACategory : req.body.ACategory , AssignmentNo : req.body.AssignmentNo , AssignmentEnddate : req.body.AssignmentEnddate , Departmentid : req.body.Departmentid , Gradeid : req.body.Gradeid , Jobid : req.body.Jobid, Mangerid : req.body.Mangerid}}})
            res.send(employee2)
        }
        insertone()
    }
    static puts(req,res){
        async function updateone(){  
            //const employee2 = await employees.updateOne({EmpId : req.params.Empid, "Assignments.AssignmetId": 2 },{"Assignments.$":1},{"$set":{"Assignments.AssignmetId" : req.body.AssignmetId },useFindAndModify : false})
            const employee1 =  employees.find({EmpId : req.params.Empid, "Assignments.AssignmetId": 2 },{"Assignments.$":1})
            const employee2 = await employees.updateOne(employee1,{"$set":{"Assignments.$.AssignmetId" : req.body.AssignmetId }})
            //const employee2 = await employees.find({EmpId : req.params.Empid, "Assignments.AssignmetId": req.params.AssignmetId },{"Assignments.$":1}).updateOne({"$set":{"Assignments.$.AssignmetId" : req.body.AssignmetId }})
            res.send(employee2)
        }
        updateone()
    }
    static deletes(req,res){
        async function deleteassignment(){
            //const employee1 = await employees.find({ "EmpId" : req.params.Empid , "Assignments.AssignmetId": 3},{"Assignments.$": 1})//,{"Assignments.$": 1})//.select({Assignments : 1})
//            const assignments3 = await employees.findOneAndDelete({ "EmpId" : req.params.Empid , "Assignments.AssignmetId": 3},{"Assignments.$": 1})
            const employee1 = employees.find({EmpId : req.params.Empid, "Assignments.AssignmetId": 4 },{"Assignments.$":1})
            const assignments3 = await employees.deleteOne(employee1)
            res.send(assignments3)
        }
        deleteassignment()
    }
}



router.get("/", assignments1.all)

router.get("/:Assignmentid", assignments1.one)

router.post("/", assignments1.posts)

router.put("/:Assignmentid", assignments1.puts)

router.delete("/:Assignmentid", assignments1.deletes)

module.exports = router
