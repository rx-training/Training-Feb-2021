// import modules
const router = require('express').Router();

const {login, getUser, addUser} = require('../../controllers/userController');
const User = require('../../models/user');
const auth = require('../../middlewares/auth');

// routes

// users page
// GET http://localhost:3000/users
router.get('/me', auth, getUser);

//user Registration
//POST http://localhost:3000/users
router.post('/', addUser)

// user login 
// POST http://localhost:3000/users/login
router.post('/login', login);

// exports
module.exports = router;