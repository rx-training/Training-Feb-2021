const express = require('express')

const fees = require('./fees.json')

const childRouter = express.Router({ mergeParams : true})

childRouter.get('/', (req,res) => {
    res.send(fees)
})

module.exports = childRouter