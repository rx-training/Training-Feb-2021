const express = require("express")
const app = express();
const router = express.Router({mergeParams : true});
const employees = require("../../details.json")

app.use(express.json())

class assignments1 {

    static all(req,res,next){
        const employee = employees.find(c => c.EmpId === parseInt(req.params.Empid))
        res.send(employee.Assignments)
        next()
    }
    static one(req,res,next){
        const employee1 = employees.find(c => c.EmpId === parseInt(req.params.Empid));
        const assignment1 = employee1.Assignments[(req.params.Assignmentid)-1]
        res.send(assignment1);
        next()
    }
    static posts(req,res,next){
        const employee2 = { "AssignmetId" : req.body.Assignmentid , "AName" : req.body.AName, "ACategory" : req.body.ACategory , "AssignmentNo" : req.body.AssignmentNo , "AssignmentEnddate" : req.body.AssignmentEnddate , "Departmentid" : req.body.Departmentid , "Gradeid" : req.body.Gradeid , "Jobid" : req.body.Jobid, "Mangerid" : req.body.Mangerid}
        employees.push(employee2);
        res.send(employee2)
        next()
    }
    static puts(req,res,next){
        const employee3 = employees.find(c => c.EmpId === parseInt(req.params.Empid));
        const assignment2 = employee3.Assignments[(req.params.Assignmentid)-1]
        assignment2.ACategory = req.body.ACategory;
        res.send(assignment2)
        next()
    }
    static deletes(req,res,next){
        const employee4 = employees.find(c => c.EmpId === parseInt(req.params.Empid))
        const assignment3 = employee4.Assignments[(req.params.Assignmentid)-1]
        const index = employee4.indexOf(assignment3)
        employees.slice(index,1)
        res.send(assignment3)
        next()
    }
}

router.get("/", assignments1.all)

router.get("/:Assignmentid", assignments1.one)

router.post("/", assignments1.posts)

router.put("/:Assignmentid", assignments1.puts)

router.delete("/:Assignmentid", assignments1.deletes)

module.exports = router
