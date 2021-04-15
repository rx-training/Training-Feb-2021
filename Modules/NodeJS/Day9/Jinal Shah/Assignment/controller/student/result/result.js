const express = require('express')

const result = require('./result.json')

const childRouter = express.Router({ mergeParams : true})

childRouter.get('/', (req,res) => {
    res.send(result)
})

module.exports = childRouter