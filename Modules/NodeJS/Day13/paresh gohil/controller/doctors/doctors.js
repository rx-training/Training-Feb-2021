const express = require("express")
const app = express()
const router = express.Router()
const authentication = require("../authentication/authentication")
const {Doctor} = require("../../model/doctors")

app.use(express.json())

router.use("/", authentication)


//----------class----------------
class doctors{
    static all(req,res){
        async function getall() {
            const doctors1 = await Doctor.find()
            res.send(doctors1)
        }
        getall()
    }

    static one(req,res){
        async function getone() {
            const doctors1 = await Doctor.find({"Did": req.params.doctorid})
            res.send(doctors1)
        }
        getone()
    }

    static posts(req,res){
        async function doctorpost() {
            const doctors1 = req.body
            const doctors2 = new Doctor(doctors1)
            const result = await doctors2.save() 
            res.send(result)
        }
        doctorpost()
    }

    static puts(req,res){
        async function doctorput() {
            const doctors3 = Doctor.find({"Did": req.params.doctorid})
            const doctors4 = await Doctor.updateOne(doctors3,req.body)
            res.send(doctors4)
        }
        doctorput()
    }

    static deletes(req,res){
        async function doctordelete() {
            const doctor5 = Doctor.find({"Did": req.params.doctorid})
            const doctor6 = await Doctor.deleteOne(doctor5)
            res.send(doctor6)
        }
        doctordelete()
    }
}


//------------get,post,put and delete-------------------
router.get("/",doctors.all)

router.get("/:doctorid",doctors.one)

router.post("/", doctors.posts)

router.put("/:doctorid",doctors.puts)

router.delete("/:doctorid",doctors.deletes)


//---------------router---------------
module.exports = router
