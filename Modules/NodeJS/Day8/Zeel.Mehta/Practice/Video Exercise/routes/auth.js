const jwt= require('jsonwebtoken');
const Joi=require('joi');
const express = require('./express');
const router = express.Router();
const 
const token = jwt.sign({ _id: user._id},'jwtPRivateKey');

res.send(token);
