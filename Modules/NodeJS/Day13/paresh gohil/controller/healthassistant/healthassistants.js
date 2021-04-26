const express = require("express")
const app = express()
const router = express.Router()
const authentication = require("../authentication/authentication")
const {Assistant} = require("../../model/healthassistant")

app.use(express.json())

router.use("/", authentication)


//--------------class----------------
class assistants{
    static all(req,res){
        async function getall() {
            const Assistants1 = await Assistant.find()
            res.send(Assistants1)
        }
        getall()
    }

    static one(req,res){
        async function getone() {
            const Assistants2 = await Assistant.find({"Aid": req.params.assistantid})
            res.send(Assistants2)
        }
        getone()
    }
}


//-----------get-------------
router.get("/",assistants.all)

router.get("/:assistantid",assistants.one)


//--------export router---------------
module.exports = router