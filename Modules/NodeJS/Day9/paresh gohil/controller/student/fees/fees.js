const express = require("express");
const app = express();
const students = require("../../../student.json")
const router = express.Router({mergeParams : true});
const authenticateToken = require("../../authentication/authentication")

app.use(express.json());

class feess {
    
    static gets(req,res){
        const student1 = students.find(c => c.ID === parseInt(req.params.ID))
        if(!student1) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>')
        res.send(student1.Fees)
    }
}

router.get("/", authenticateToken , feess.gets)

module.exports = router;
