var express = require('express');

const patientLogic = require('./patientCRUD')

var router = express.Router();

router.get('/', patientLogic.all)
router.get("/:id",patientLogic.getbyid)
router.get("/:id/doctor",patientLogic.doctor)
router.get("/:id/medicine",patientLogic.medicine)


module.exports = router