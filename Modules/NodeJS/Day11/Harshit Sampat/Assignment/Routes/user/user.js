const router = require('express').Router()
const {getResponse,login} = require('../../controllers/user')

//get method for user
router.get('/',getResponse)

//post metod to generate token
router.post('/',login)


module.exports = router