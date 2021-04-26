const express = require('express')
const router = express.Router();
const doctorRouter = require("../Router/Doctor/doctor")
const patientRouter = require("../Router/Patient/patient")
const departmentRouter = require("../Router/Department/department");
const healthassistant = require("../Router/HealthAssistant/healthAssistant")


router.use("/Doctor", doctorRouter)
router.use("/Patient", patientRouter)
router.use("/Department", departmentRouter)
router.use("/HA", healthassistant)


module.exports = router