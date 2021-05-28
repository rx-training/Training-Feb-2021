const router = require('express').Router()
const {getresult,updateresult}=require('../../../controllers/student') 

//get al fees
router.get('/',getresult)

router.put('/',updateresult)

module.exports = router