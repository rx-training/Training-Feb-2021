var express = require('express')
var router=express.Router()

var login=require('./students')
var feesrouter = require('./fees')
var resultrouter=require('./result')

router.use('/fees',feesrouter)
router.use('/result',resultrouter)
router.use('/login',login)

module.exports =router