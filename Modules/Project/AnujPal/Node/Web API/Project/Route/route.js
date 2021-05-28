require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const router = express.Router({ mergeParams: true })


const customerRouter = require("../Route/Customer/customer");
const accountRouter=require("../Route/Account/account")
const netBankingRouter=require("../Route/authentication/netbanking")
const adminRouter=require("../Route/Admin/admin");

router.use("/netBanking",netBankingRouter)
router.use("/customer", customerRouter)
router.use("/account",accountRouter)
router.use("/admin",adminRouter)

module.exports = router;

