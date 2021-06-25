const fs = require('fs');
const express = require('express');
const { off } = require('process');
const router = express.Router();
router.use(express.json());
const Assignment1 = require('../Models/assignment');
const { findById, findOneAndUpdate } = require('../Models/assignment');
const { stringify } = require('querystring');




class Assignment {
    static async getAll(req, res) {
        try {
            const assignment = await Assignment1.find();
            res.json(assignment);
        }
        catch (err) {
            res.json(err.message);
        }
    }

    static async getAid(req, res) {
        try {
            const assignment = await Assignment1.find({ aid: req.params.aid });
           
            if (assignment.length==0)   throw new Error('Assignment Not Found');
            else res.json(assignment);
        }
        catch (err) {
            res.json(err.message);
        }


    }

    static async post(req, res) {
        try {
            const assignment = new Assignment1({
                empID: req.body.empID,
                aid: req.body.aid,
                status: req.body.status
            });
            const assignment1 = await assignment.save();
            res.send(assignment1);
        }
        catch (err) {
            res.json(err.message);
        }


    }

    static async putStatus(req, res) {

        try {
            const assignment1 = await Assignment1.updateOne({ aid: req.params.aid }, {
                $set: {
                    status: req.body.status
                }
            })
            res.json(assignment1)
        }
        catch (err) {
            res.json(err.message);
        }

    }

    static async removeAssignmnent(req, res) {
        try {

            const a1 = await Assignment1.deleteOne({ aid: req.params.aid })
            console.log(a1);
            if (a1.deletedCount==0)   throw new Error('Assignment Not Deleted');
            else
            {
            res.json("Assignment Deleted");
            }
        }
        catch (err) {
            res.json(err.message);
        }

    }
}

module.exports = Assignment;