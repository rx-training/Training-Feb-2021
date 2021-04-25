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
    user = await User.findById(req.user._id).select('-Password');
    res.send(_.pick(user, [ '_id', 'name', 'email', 'isAdmin' ]));
}

//add user
exports.addUser = async (req, res) => {
    const { error } = validateUser(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if(user) return res.status(400).send('user already registered');

    let department = await Department.findOne({ name: req.body.department });
    let deptId = department._id

    if (!department) return res.status(400).send('department not found');

    user = new User ({ name: req.body.name, 
        username: req.body.username, 
        email: req.body.email, 
        password: req.body.password, 
        isAdmin: req.body.isAdmin, 
        department: deptId});

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt)
  
    await user.save();

    res.redirect('/users/login');

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
    global.token = user.getAuthToken();
    console.log(user, token)

    
    res.header('x-auth-token', global.token).redirect('/');

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

