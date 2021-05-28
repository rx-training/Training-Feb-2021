const mongoose = require("mongoose")
const express = require('express')
const netBankingRouter = express.Router();
const netbanking = require("../../Model/netbanking");
const NetBanking = mongoose.model('NetBanking', netbanking)
const user = require("../../Model/netbanking")
const verifyToken = require("../../Middleware/verifyToken");
const ensureToken = require("../../Middleware/ensureToken");
const jwt = require("jsonwebtoken")
var cryptr = require("cryptr"),
    cryptr = new cryptr("Anuj")
var nodemailer = require('nodemailer');
const transporter1 = require("../../email/email");

class demoNetBanking {
    static async login(req, res) {
        let count = 0;
        const users = await NetBanking
            .find()

        for (const iterator of users) {
            var userId = cryptr.decrypt(iterator.userId)
            var pass = cryptr.decrypt(iterator.pass);
            if (userId == req.body.userId && pass == req.body.pass) {
                const token = jwt.sign({ iterator }, process.env.SECRET)
                await res.json({ token: token });
                count = 1;


                transporter1.transporter.sendMail(transporter1.mailOptionsLogin, function (error, info) {
                    if (error) {
                        console.log(error.message);
                    } else {
                        console.log('Email sent: ' + info.response);


                    }
                });

            }



        }
        if (count == 0) {
            res.json("Invalid userid or Password !!!!!!!!!!!");
        }

    }

    static async signup(req, res) {

        var userId = cryptr.encrypt(req.body.userId)
        var pass = cryptr.encrypt(req.body.pass);
        const user = new NetBanking({
            userId: userId,
            pass: pass,
            role: req.body.role
        })
        const a1 = user.save();
        transporter1.transporter.sendMail(transporter1.mailOptionsSignUp, function (error, info) {
            if (error) {
                console.log(error.message);
            } else {
                console.log('Email sent: ' + info.response);


            }
        });
        res.json(user);
    }
}






// API for login the system
netBankingRouter.get("/login", verifyToken, ensureToken, demoNetBanking.login)

// API for signup the Sysyem
netBankingRouter.post("/signup", verifyToken, ensureToken, demoNetBanking.signup)


module.exports = netBankingRouter
