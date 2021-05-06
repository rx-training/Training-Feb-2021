require('dotenv').config()
const express = require("express");
const app = express()
const jwt = require("jsonwebtoken");
const router = express.Router();
const fees = require("./fees/fees")
const result = require("./result/result")
const authenticateToken = require("../authentication/authentication")
const students = require("../../models/students")

router.use("/:ID/Fees" , fees)

router.use("/:ID/Result" , result)

app.use(express.json())

class students1 {

    static all(req,res){

        async function getstudents() {
            var data = await students.find()
            res.send(data)
        }
        getstudents()

    }
    static one(req,res){
        async function getstudent() {
            const student1 =  await students.find({ ID : req.params.ID})
            if(!student1) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>')
            res.send(student1)
        }
        getstudent()
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
