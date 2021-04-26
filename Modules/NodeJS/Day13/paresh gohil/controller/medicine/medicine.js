const express = require("express")
const app = express()
const router = express.Router()
const authentication = require("../authentication/authentication")
const {Medicine} = require("../../model/medicine")

app.use(express.json())

router.use("/", authentication)


//---------class-----------------
class medicines{
    static all(req,res){
        async function getall() {
            const medicine1 = await Medicine.find()
            res.send(medicine1)
        }
        getall()
    }

    static one(req,res){
        async function getone() {
            const medicine2 = await Medicine.find({"mid": req.params.medicineid})
            res.send(medicine2)
        }
        getone()
    }
}


//------------get------------
router.get("/",medicines.all)

router.get("/:medicineid",medicines.one)


//------------export router-----------
module.exports = router
