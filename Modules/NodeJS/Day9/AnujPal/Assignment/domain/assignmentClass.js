const fs = require('fs');
const assignments = require("../controller/Parent/child/assignment.json");
const express = require('express');
const { off } = require('process');
const router = express.Router();
router.use(express.json());



class Assignment {
    static getAll(req, res) {
        res.send(assignments[req.params.id].assignments);
    }

    static getAid(req, res) {
      
        res.send(assignments[req.params.id].assignments[req.params.aid]);


       
    }

    static putStatus(req, res) {
        let assignments = require("../controller/Parent/child/assignment.json");

        assignments[req.params.id].assignments[req.params.aid].status = req.body.status;
        res.send(assignments[req.params.id].assignments[req.params.aid]);


        fs.writeFile("./controller/Parent/child/assignment.json", JSON.stringify(assignments), (err) => {
            if (err) {
                throw new Error('Can not update file')
            }
            else {
                console.log("!saved");
            }


        });
    }
}

module.exports = Assignment;