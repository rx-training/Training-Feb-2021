//import modules
const express = require('express')
const router = express.Router()

const {getAllPaitent ,getmedicine,getSummary} = require('../../controllers/report')

//get all paitent
router.get('/',getAllPaitent)

//get medicines
router.get('/medicine',getmedicine)

//get Summary
router.get('/summary',getSummary)

module.exports= router

