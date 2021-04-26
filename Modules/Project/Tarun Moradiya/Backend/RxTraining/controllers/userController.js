// import modules
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const Joi = require('joi');

const {User, validate: validateUser} = require('../models/user')
const {Department} = require('../models/department')
const {Technology} = require('../models/technology')

//get user data
exports.getUser = async function (req, res) {
    const Tech = await Technology.find();
    const user = await User.findById(req.user._id);
    res.render('pages/users', { user, Tech });
}

//get users data
exports.getUsers = async function (req, res) {
    const users = await User.find({email: { $nin: req.user.email }}).populate('department');
    const dept = await Department.find();
    const Tech = await Technology.find();
    res.render('pages/users', { users, Tech, dept });
}

//add user
exports.addUser = async (req, res) => {
    const { error } = validateUser(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if(user) return res.status(400).send('user already registered');

    console.log(req.body)
    let department = await Department.findById(req.body.department);

    if (!department) return res.status(400).send('department not found');

    user = new User ({ name: req.body.name, 
        username: req.body.username, 
        email: req.body.email, 
        password: req.body.password, 
        isAdmin: req.body.isAdmin, 
        department: department});

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt)
  
    await user.save();

    res.redirect('back');

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

    //set cookie and send
    res.cookie('token', token, {
        expires: new Date(Date.now() + 360000),
        secure: false, // set to true if your using https
        httpOnly: true,
      }).redirect('/');

}

//logout
exports.logout = async function(req, res) {
    //delete cookie and redirect to login page
    res.clearCookie('token').redirect('/users/login');
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

