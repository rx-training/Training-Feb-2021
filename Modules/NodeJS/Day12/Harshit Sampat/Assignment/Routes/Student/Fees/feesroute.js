const router = require('express').Router()

const {getFees,updatefees} = require('../../../controllers/student')

//get fees
router.get('/',getFees)

//update fees
router.put('/',updatefees)

//exports router

module.exports = router

