const express = require("express");
const app = express();
const router = express.Router();
const employees = require("../details.json")
const employee1 = require("./assignments/assignment3")

app.use(express.json());

router.use("/:Empid/child/assignments",employee1)

class employees1 {

    static all(req,res,next){
        res.send(employees)
        next()
    }
    static one(req,res,next){
        const employee = employees.find(c => c.EmpId === parseInt(req.params.Empid));
        res.send(employee);
        next()
    }
    static posts(req,res,next){
        const employee1 = {"EmpId" : req.body.EmpId, "Addressline" : req.body.Addressline, "Citizenshipid" : req.body.Citizenshipid, "Citizenshipstatus" : req.body.Citizenshipstatus, "City" : req.body.City, "Country" : req.body.Country, "DOB" : req.body.DOB}
        employees.push(employee1);
        res.send(employee1)
        next()
    }
    static puts(req,res,next){
        const employee2 = employees.find(c => c.EmpId === parseInt(req.params.Empid));
        employee2.Addressline = req.body.Addressline;
        res.send(employee2)
        next()
    }
    static deletes(req,res,next){
        const employee3 = employees.find(c => c.EmpId === parseInt(req.params.Empid))
        const index = employees.indexOf(employee3)
        employees.slice(index,1)
        res.send(employee3)
        next()
    }
}


router.get("/",employees1.all)

router.get("/:Empid", employees1.one)

router.post("/", employees1.posts)

router.put("/:Empid", employees1.puts)

router.delete("/:Empid", employees1.deletes)

module.exports = router;
