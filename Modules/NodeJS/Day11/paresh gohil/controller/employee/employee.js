require('dotenv').config()
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const router = express.Router();
const employee1 = require("./child/assignment")
const authenticateToken = require("../authentication/authentication")
const employees = require("../../models/employees");

app.use(express.json());

router.use("/:Empid/child/assignments",employee1)

class employees1 {

    static login(req,res){
        //Authentication user
        var student = {
            "username" : req.body.username,
            "password" : req.body.password
        }
        //create token for register user
        const accesstoken = jwt.sign(student, process.env.ACCESS_TOKEN_SECRET)
        res.json({ accessToken : accesstoken})
    }
    static all(req,res){
        async function allemployee() {
            const employeee = await employees.find()
            res.send(JSON.stringify(employeee))
        }
        allemployee()
    }
    static one(req,res){
        async function oneemployee() {
            const employee = await employees.find({ EmpId : req.params.Empid });
            res.send(JSON.stringify(employee));               
        }
        oneemployee()
    }
    static posts(req,res){
      async function insertone(){
        const employee1 = {"EmpId" : req.body.EmpId, "Addressline" : req.body.Addressline, "Citizenshipid" : req.body.Citizenshipid, "Citizenshipstatus" : req.body.Citizenshipstatus, "City" : req.body.City, "Country" : req.body.Country, "DOB" : req.body.DOB}
        const employee2 = new employees(employee1)
        const result = await employee2.save()
        console.log(result)
        res.send(result)
        }
        insertone()
    }
    static puts(req,res){
      async function update(){
        const employee2 = employees.find({ EmpId : req.params.Empid });
        const employee3 = await employees.updateOne(employee2,{Addressline : req.body.Addressline});
        res.send(employee3)
        }
        update()
    }
    static deletes(req,res){
      async function deleteemp(){
        const employee3 = employees.find({ EmpId : req.params.Empid })
        const employee4 = await employees.deleteOne(employee3)
        res.send(employee4)
        }
        deleteemp()
    }
}

router.post("/login", employees1.login)


router.use("/",authenticateToken)

router.get("/",employees1.all)

router.get("/:Empid", employees1.one)

router.post("/", employees1.posts)

router.put("/:Empid", employees1.puts)

router.delete("/:Empid", employees1.deletes)

module.exports = router;
