const express = require('express');
const router = express.Router();

const Emp = require("./employees/employee")
const Stu = require("./students/student")

router.use('/employee',Emp)
router.use('/student',Stu)

module.exports = router

