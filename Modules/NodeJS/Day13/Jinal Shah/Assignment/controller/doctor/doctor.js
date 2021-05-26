var express = require('express');
var router = express.Router();

const drcrud = require('./doctorCRUD')

router.get('/', drcrud.all)
router.get('/:id',drcrud.getbyid)
router.post('/add',drcrud.insert)
router.delete('/:id/delete',drcrud.delete)
router.put('/:id',drcrud.update)

router.get('/:id/patientReport',drcrud.patientData)

module.exports = router