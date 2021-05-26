var express = require('express')

var router = express.Router();

const empdata = require('./Emp.json')
const empLogic = require ('./empCrud')
const ass = require('./Assignment/assignment')


router.get('/',empLogic.first)
router.get("/:id",empLogic.second)
router.put("/:id",empLogic.third)

router.use('/:id/child/assignments',ass)

module.exports = router