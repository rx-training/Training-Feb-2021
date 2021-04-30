const express = require('express');
const router2 = express.Router();

const customers = require("./customersData/customer")
const trips = require("./tripDetails/trips")

router2.use('/customer',customers)
router2.use('/trip',trips)

module.exports = router2