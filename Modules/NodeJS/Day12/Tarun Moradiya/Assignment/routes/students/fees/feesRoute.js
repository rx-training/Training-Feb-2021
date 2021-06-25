// import module
const router = require('express').Router();
const {getFees, updateFees} = require('../../../controllers/studentController');

// routes

// get fees
// GET http://localhost:3000/students/:id/fees
router.get('/', getFees);

// update fees
// PUT http://localhost:3000/students/:id/fees
router.put('/', updateFees);

// exports 
module.exports = router;