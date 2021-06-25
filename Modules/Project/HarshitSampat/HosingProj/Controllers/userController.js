var express = require('express');
var router = express.Router();
const{User} = require('../Models/userModel')
const _ = require('lodash')
const bcrypt = require('bcrypt')
//const  {token} = require('morgan')


var jwt =require('jsonwebtoken')

/* GET users listing. */
exports.getResponse = async function(req, res, next) {
  res.send('Welcome please login');
};

exports.login = async function(req,res,next){
  let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User alredy registerd')

    user = new User(_.pick(req.body, ['name', 'email', 'password']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt)

    await user.save()

    
    const token = user.generateAuthToken();
    res.header('x-auth-token',token).send(_.pick(user, ['_id', 'name', 'email']));

};



