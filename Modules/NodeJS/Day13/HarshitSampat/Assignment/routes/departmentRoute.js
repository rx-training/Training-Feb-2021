//import modules
const express = require('express')
const router = express.Router()
const {getDepartments,addDepartments} = require('../controllers/department')

//get all department
router.get('/',getDepartments)

//get deaprtment with id
router.get('/:id',getDepartments)

//add new Department
router.post('/',addDepartments)


module.exports = router 