const express = require('express');
const app = express();
const childRouter = express.Router({ mergeParams: true });
const fs = require('fs');
const demo=require('../../../domain/assignmentClass');
const verifyToken=require("../../../Authorization/verifyToken");

// A route to get all the assignments assigned to a particular employee

childRouter.get("/",verifyToken, demo.getAll);


//  A route to get particular assignments assigned to a particular employee.

childRouter.get("/:aid",verifyToken, demo.getAid);

//  A put request to modufy the status of the assignment

childRouter.put("/:aid",verifyToken, demo.putStatus);
module.exports = childRouter;