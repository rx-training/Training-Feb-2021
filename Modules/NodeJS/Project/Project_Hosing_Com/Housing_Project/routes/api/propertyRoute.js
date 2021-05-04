// import require modules
const {getProperty ,addNewProperty} = require('../../Controllers/property');
const express= require('express');
const router = express.Router();

//get payment
router.get('/',getProperty)

//add new payment deails
router.post('/addRequest',addNewProperty)


//export modules
module.exports = router