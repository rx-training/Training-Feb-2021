const express = require('express');
const empdata = require('../Emp.json')
const ass = require('./child/assignment')
const empLogic = require ('./empCrud')

const router = express.Router({ mergeParams : true})
router.use(express.json())


router.get('/',empLogic.first)
router.get("/:id",empLogic.second)
router.put("/:id",empLogic.third)

router.use('/:id/child/assignments',ass)

module.exports = router