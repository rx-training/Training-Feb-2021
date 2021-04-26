require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const router = express.Router({ mergeParams: true })
const verifyToken = require("../Middleware/verifyToken")
const user = require("../Model/netbanking")
const User = mongoose.model('users1', user)
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
const ensureToken = require("../Middleware/ensureToken")
const account = require("../Model/account")
const Account = mongoose.model('Accounts', account)
const customer = require("../Model/customer");
const Customer = mongoose.model('customers', customer)


router.get("/", verifyToken, ensureToken, (req, res) => {
    res.json("Welecome to my API");
});



router.get("/login", jsonParser, async (req, res) => {
    let count = 0;
    const users = await User
        .find()

    for (const iterator of users) {
        if (iterator.userId == req.body.userId && iterator.pass == req.body.pass) {
            const token = jwt.sign({ user }, process.env.SECRET)
            await res.json({ token: token });
            count = 1;
        }

    }
    if (count == 0) {
        res.json("Invalid userid or Password !!!!!!!!!!!");
    }




})

router.post("/user", jsonParser, (req, res) => {
    const user = new User({
        userId: req.body.userId,
        pass: req.body.pass
    })
    const a1 = user.save();
    res.json(user)
})

router.post("/insertAccount", verifyToken, ensureToken, jsonParser, async (req, res) => {
    try {

        const account = new Account({
            accountNo: req.body.accountNo,
            accountHolderName: req.body.accountHolderName,
            CIF: req.body.CIF,
            branchCode: req.body.branchCode,
            balance: req.body.balance
        })
        const a1 = account.save();
        res.json(a1);
    }


    catch (e) {
        res.json(e.message);
    }
})

// A route to watch all the info of customers.

router.get("/info", verifyToken, ensureToken, async (req, res) => {
    const customers = await Customer
        .find()
        .populate('account')
    res.json(customers);
})

// A route to watch balance of  selected customer

router.get("/balance/:custId", verifyToken, ensureToken, async (req, res) => {
    const customers = await Customer
        .find({ custId: req.params.custId })
        .populate('account', 'balance accountHolderName -_id')
        .select('custId -_id')
    res.json(customers);
})

router.get("/deposit/:accountNo/:amount", verifyToken, ensureToken, async (req, res) => {

    const account = await Account
        .updateOne({ accountNo: req.params.accountNo }, {
            
            $inc: {
                balance:req.params.amount
            }
        })
    res.json(account)
})

router.get("/withdrawl/:accountNo/:amount", verifyToken, ensureToken, async (req, res) => {

    const account = await Account
        .updateOne({ accountNo: req.params.accountNo }, {
            
            $inc: {
                balance: -req.params.amount
            }
        })
    res.json(account)
})

module.exports = router;
