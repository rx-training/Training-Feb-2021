require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const router = express.Router()
const verifyToken = require("../Middleware/verifyToken")
const user = require("../Model/netbanking")
const User = mongoose.model('users1', user)
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
const ensureToken = require("../Middleware/ensureToken")


router.get("/", verifyToken, ensureToken, (req, res) => {
    res.json("Welecome to my API");
});

router.post("/insertAccount",ver)

router.get("/login", jsonParser, async (req, res) => {
    const token = jwt.sign({ user }, process.env.SECRET)
    res.json({ token: token })
})

router.post("/user", jsonParser, (req, res) => {
    const user = new User({
        userId: req.body.userId,
        pass: req.body.pass
    })
    const a1 = user.save();
    res.json(user)
})



module.exports = router;
