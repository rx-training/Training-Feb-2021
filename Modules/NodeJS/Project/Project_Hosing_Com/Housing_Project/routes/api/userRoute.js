// import require modules
const {getResponse ,login} = require('../../Controllers/userController');
const express= require('express');
const router = express.Router();

//get request
router.get('/',getResponse)

//Post request
router.post('/addRequest',login)


//export modules
module.exports = router