const express = require("express")
const app = express()
const router = express.Router()
const authentication = require("../authentication/authentication")
const {Patient} = require("../../model/patients")


app.use(express.json())

router.use("/", authentication)

//-----------class------------------
class patients{
    static all(req,res){
        async function getall() {
            const patients1 = await Patient.find()
            res.send(patients1)
        }
        getall()
    }

    static one(req,res){
        async function getone() {
            const patients2 = await Patient.find({"pid": req.params.patientid})
            res.send(patients2)
        }
        getone()
    }

    static report(req,res){
        async function patientreport() {
            const patients3 = await Patient.find({"pid": req.params.patientid}).populate("doctor assistant medicine","-_id -__v")
//            const patients4 = await Doctor.find({"_id": patients3[0].doctor})
//            const patients5 = await Assistant.find({"_id": patients3[0].assistant})
//            const patients6 = await Medicine.find({"_id": patients3[0].medicine})
            res.send(patients3)
        }
        patientreport()
    }

    static medicine(req,res){
        async function medicinereport() {
            const patients3 = await Patient.find({"pid": req.params.patientid}).populate("medicine","-_id -__v")
            res.send(patients3)
        }
        medicinereport()
    }
}


//----------------get ----------------
router.get("/",patients.all)

router.get("/:patientid",patients.one)

router.get("/:patientid/report",patients.report)

router.get("/:patientid/medicine",patients.medicine)

//--------------exports router----------------------
module.exports = router
