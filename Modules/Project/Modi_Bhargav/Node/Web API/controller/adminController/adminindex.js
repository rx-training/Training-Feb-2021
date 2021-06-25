const express = require('express');
const router1 = express.Router();

const drivers = require("./driverDetails/driver")
const cars = require("./carData/cars")

router1.use('/driver',drivers)
router1.use('/car',cars)

module.exports = router1