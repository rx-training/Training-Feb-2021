// import modules
const router = require('express').Router();

const {getResult, updateResult} = require('../../../controllers/studentController');

// routes

// get result
// GET http://localhost:3000/students/:id/result
router.get('/', getResult);

// update result
// PUT http://localhost:3000/students/:id/result
router.put('/', updateResult);

// exports 
module.exports = router;