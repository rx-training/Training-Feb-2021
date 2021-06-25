const mongoose = require("mongoose");
const express = require("express");
const adminRouter = express();
const netbanking = require("../../Model/netbanking");
const NetBanking = mongoose.model('netbankings', netbanking)
const user = require("../../Model/netbanking")
var cryptr = require("cryptr"),
    cryptr = new cryptr("Anuj")
const jwt = require("jsonwebtoken")

class demoAdmin {
    static async getAllUser(req, res) {
        if (count1 !== 1) {
            res.json("You do not have accessto this page");
            console.log(count1)
        }
        else {
            const users = await NetBanking
                .find()
            res.json(users)
            console.log(count1)

        }
    }

    static async DeleteUser(req, res) {
        if (count1 === 0) {
            res.json("You do not have accessto this page");
        }
        else {
            const user = await NetBanking
                .findByIdAndDelete({ _id: req.params.id })
            res.json(user);
        }
    }
}

// API for see all the users registered
adminRouter.get("/users", adminLogin, demoAdmin.getAllUser)

// API for delete a particular customer
adminRouter.delete("/delete/:id", adminLogin, demoAdmin.DeleteUser)

module.exports = adminRouter;


async function adminLogin(req, res, next) {
    var count = 0
    const users = await NetBanking
        .find()

    for (const iterator of users) {
        var userId = cryptr.decrypt(iterator.userId)
        var pass = cryptr.decrypt(iterator.pass);
        var role = iterator.role
        if (userId === req.body.userId && pass === req.body.pass && role === 'admin') {
            count = 1;
        }
    }
    count1 = count
    console.log(count1)

    next()
}