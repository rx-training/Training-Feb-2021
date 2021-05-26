var express = require('express');
var router = express.Router();

const medicine = require('./medicineCRUD')

router.get('/', medicine.all)
router.post('/add',medicine.insert)
router.get('/:id',medicine.get)
router.delete('/:id/delete',medicine.delete)

module.exports = router