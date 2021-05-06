var express = require('express')

var router = express.Router();

const stud = require('./students.json')
const result = require('./result/result')
const fees = require('./fees/fees')

router.get('/',(req,res) => {
    res.send(stud)
})

router.use('/result',result)
router.use('/fees',fees)

module.exports = router