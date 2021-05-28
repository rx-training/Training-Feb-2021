// import module
const router = require('express').Router();

const Students = require('../../../models/students')

// routes

// get fees
// GET http://localhost:3000/students/:id/fees
router.get('/', Students.getFees);

// update fees
// PUT http://localhost:3000/students/:id/fees
router.put('/', Students.updateFees);

// exports 
module.exports = router;