const fs = require('fs');
const express = require('express');
const { off } = require('process');
const router = express.Router();
router.use(express.json());
const Assignment1 = require('../Models/assignment');
const { findById } = require('../Models/assignment');
const { stringify } = require('querystring');




class Assignment {
    static async getAll(req, res) {
        try {
            const assignment = await Assignment1.find();
            res.json(assignment);
        }
        catch (err) {
            console.error("Error Occured");
        }
    }

    static async getAid(req, res) {
        try {
            const assignment = await Assignment1.find({ aid: req.params.aid });
            res.send(assignment);
        }
        catch (err) {
            console.error("Error Occurred");
        }




    }

    static async post(req, res) {
        try {
            const assignment = new Assignment1({
                empID: req.body.empID,
                aid: req.body.aid,
                status: req.body.status
            });
            const Assignment1 = await assignment.save();
            res.send(assignment1);
        }
        catch (err) {
            console.error("Error occured");
        }


    }

    static async putStatus(req, res) {
        try {
            const assignment1 = await Assignment1.updateOne({ aid: req.params.aid }, {
                $set: {
                    status: req.body.status
                }
            })


            res.json(assignment1);

        }
        catch (err) {
            console.error("Error Occured");
        }


    }

    static async removeAssignmnent(req, res) {
        try {
            const a1 = await Assignment1.deleteOne({ aid: req.params.aid })
            res.json(a1);
        }
        catch (err) {
            console.error("Error Occured");
        }

    }
}

module.exports = Assignment;