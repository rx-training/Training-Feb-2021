const express = require('express');
const app = express();
const router = express.Router();
var assignments = require("./assignment.json");
router.use(express.json());
const fs = require('fs');

class assignment {
    static assignmentGet(req, res) {
        res.send(assignments);
    }
    static assignmentGetById(req, res) {
        // console.log(assignments.asign);
        // res.send("hii");
        const assignment = assignments.find(c => c.empID === parseInt(req.params.id))
        console.log(assignment);
        if (!assignment) return res.status(404).send("Not Found !!!");
        res.send(assignment.assignments);
    }
    static assignmentput(req, res) {
        const assignment = assignments.find(c => c.empID === parseInt(req.params.id))
        if (!assignment) return res.status(404).send("Not Found !!!");

        const index = (req.params.id) - 1;
        assignment.assignments.splice(index, 1);
        res.send(assignment);

        fs.writeFile("./assignment.json", JSON.stringify(assignment), (err) => {
            if (!err) console.log("Data updated succesfully");
            else console.log("Some error occured");
        })
    }
}
router.get("/", assignment.assignmentGet)
router.get("/:id", assignment.assignmentGetById)
router.put("/:id", assignment.assignmentput)
module.exports = router;