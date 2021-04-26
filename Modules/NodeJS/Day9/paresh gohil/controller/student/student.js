require('dotenv').config()
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const fees = require("./fees/fees")
const result = require("./result/result")
const students = require("../../student.json")
const authenticateToken = require("../authentication/authentication")

router.use("/:ID/Fees" , fees)

router.use("/:ID/Result" , result)

class students1 {

    static all(req,res){
        res.send(students)
    }
    static one(req,res){
        const student1 = students.find(c => c.ID === parseInt(req.params.ID))
        if(!student1) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>')
        res.send(student1)
    }
    static posts(req,res){
        //Authentication user
        var student = {
            "username" : req.body.username,
            "password" : req.body.password
        }
        //create token for register user
        const accesstoken = jwt.sign(student, process.env.ACCESS_TOKEN_SECRET)
        res.json({ accessToken : accesstoken})
    }
}

router.get("/", authenticateToken , students1.all)

router.get("/:ID", authenticateToken , students1.one)

router.post("/login", students1.posts)

module.exports = router
