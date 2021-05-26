const {urlencoded}=require('express');
const express = require('express');
const app = express();
const router = express.Router();
var employees = require("../Parent/employee.json");
router.use(express.json());
router.use(urlencoded({extended:false}));
const fs = require('fs');
const childRouter = require('../Parent/child/assignment');
const employee = require("../../domain/empClass");
const verifyToken=require("../../Authorization/verifyToken");

// const { urlencoded } = require('body-parser');

router.get('/',verifyToken, employee.employeelist); 
router.get('/token',employee.getToken);
router.get('/:id',verifyToken, employee.employeeByID);
router.post('/',verifyToken, employee.emppost);
router.delete('/:id',verifyToken, employee.empdelete);
router.put('/:id',verifyToken, employee.empput);


router.use("/:id/child/assignment", childRouter)

module.exports = router;