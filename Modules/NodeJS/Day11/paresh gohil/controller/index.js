const express = require("express");
const employees = require("./employee/employee")
const students = require("./student/student")
const router = express.Router();

/*router middleware*/
router.use("/emps" , employees);

router.use("/students" , students);

module.exports = router