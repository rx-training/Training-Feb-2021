//import modules
const express = require('express')
const router = express.Router()

const {getPatient,addNewpaitent,updatePaitent,deletepaitent} = require('../../controllers/patient')
const reportRoute = require('./reportRoute')

//get paitent 
router.get('/',getPatient)

//get paitent by id
router.get('/:id',getPatient)

//add new paitent
router.post('/',addNewpaitent)

//update new paitent
router.put('/:id',updatePaitent)

//delte Paitent
router.delete('/:id',deletepaitent)

//child route
router.use(':id/reports',(req,res,next)=>{
    req.paitentId = req.params.id;
    next();

},reportRoute);

//exports router
module.exports = router