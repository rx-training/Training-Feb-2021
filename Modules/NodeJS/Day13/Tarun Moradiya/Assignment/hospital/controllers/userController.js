// import modules
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const Joi = require('joi');

const {User, validateUser} = require('../models/user')

//get user data
exports.getUser = async function (req, res) {
    user = await User.findById(req.user._id).select('-Password');
    res.send(_.pick(user, [ '_id', 'name', 'email', 'isAdmin' ]));
}

//add user
exports.addUser = async (req, res) => {
    const { error } = validateUser(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if(user) return res.status(400).send('user already registered');

    user = new User (_.pick(req.body, [ 'name', 'email', 'password' ,'isAdmin']));

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt)
  
    await user.save();

    res.send(_.pick(user, [ '_id', 'name', 'email' ]));

};

// login
exports.login = async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if(!user) return res.status(400).send('Invalid email or password');

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) return res.status(400).send('Invalid email or password');

    // generate token
    const token = user.getAuthToken();
    console.log(user, token)
    
    res.header('x-auth-token', token).send(_.pick(user, [ '_id', 'name', 'email' ]));

}

async function validate(user) {
    try {
        const schema = Joi.object({
            email: Joi.string().min(5).max(255).required().email(),
            password:Joi.string().min(2).max(255).required(),
          });
        
          return await schema.validate(user);
    } catch(err) {
        console.error(err);
    }
  }

