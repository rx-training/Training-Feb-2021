// import modules
const router = require('express').Router();

const Students = require('../../../models/students')

// routes

// get result
// GET http://localhost:3000/students/:id/result
router.get('/', Students.getResult);

// update result
// PUT http://localhost:3000/students/:id/result
router.put('/', Students.updateResult);

// exports 
module.exports = router;