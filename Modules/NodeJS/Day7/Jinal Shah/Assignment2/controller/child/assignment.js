const express = require('express');
const router = require('../employee');
const logic = require('./AssCrud')
const empdata = require('../../Emp.json')

const childRouter = express.Router({ mergeParams : true})
childRouter.use(express.json())


childRouter.get("/",logic.first)
childRouter.get("/:aid",logic.second)
childRouter.put("/:aid",logic.third)


module.exports = childRouter