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
            var assignmentid = req.params.Assignmentid
            const employee1 = await employees.find({ "EmpId" : req.params.Empid , "Assignments.AssignmetId": 1},{"Assignments.$": 1})//,{"Assignments.$": 1})//.select({Assignments : 1})
            res.send(employee1);            
        }
        oneassignment()
    }
    // static posts(req,res){
    //  async function insertone{ 
    //     const employee2 = { "AssignmetId" : req.body.Assignmentid , "AName" : req.body.AName, "ACategory" : req.body.ACategory , "AssignmentNo" : req.body.AssignmentNo , "AssignmentEnddate" : req.body.AssignmentEnddate , "Departmentid" : req.body.Departmentid , "Gradeid" : req.body.Gradeid , "Jobid" : req.body.Jobid, "Mangerid" : req.body.Mangerid}
    //     employees.insertOne(employee2);
    //     res.send(employee2)
    //     }
    // }
    // static puts(req,res){
    //  async function updateone{  
    //     const employee3 = employees.find(c => c.EmpId === parseInt(req.params.Empid));
    //     const assignment2 = employee3.Assignments[(req.params.Assignmentid)-1]
    //     employees.updateOne(assignment2,{ assignment2.ACategory : req.body.ACategory});
    //     res.send(assignment2)
    //     }
    // }
    // static deletes(req,res){
    //   async function delete{
    //     const employee4 = employees.find(c => c.EmpId === parseInt(req.params.Empid))
    //     const assignment3 = employee4.Assignments[(req.params.Assignmentid)-1]
    //     employees.deleteOne(assignment3)
    //     res.send(assignment3)
    //     }
    // }
}

router.get("/", assignments1.all)

router.get("/:Assignmentid", assignments1.one)

// router.post("/", assignments1.posts)

// router.put("/:Assignmentid", assignments1.puts)

// router.delete("/:Assignmentid", assignments1.deletes)

module.exports = router
