const express = require('express');
const router = express.Router();

const Stu = require("./students/students")

router.use('/student',Stu)

module.exports = router

