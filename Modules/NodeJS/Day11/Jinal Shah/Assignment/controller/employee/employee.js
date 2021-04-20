var express = require('express')

var router = express.Router();

const empLogic = require ('./empCrud')
const ass = require('./Assignment/assignment')


router.get('/',empLogic.all)
router.post('/',empLogic.insert)
router.get("/:id",empLogic.get)
router.put("/:id",empLogic.update)
router.delete('/:id',empLogic.delete)

router.use('/:id/child/assignments',ass)

module.exports = router