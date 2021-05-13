// import require modules
const {getrent ,addRent,deleterequest} = require('../../Controllers/rentController');
const express= require('express');
const router = express.Router();

//get request
router.get('/',getrent)

//Post request
router.post('/addRequest',addRent)

//delete request
router.delete('/',deleterequest)

//export modules
module.exports = router