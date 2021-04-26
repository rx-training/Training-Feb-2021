//import modules
const router = require('express').Router(); 

const {login, getUser, getUsers, addUser, logout} = require('../../controllers/userController');
const auth = require('../../middlewares/auth');
const admin = require('../../middlewares/admin');

// routes

// users page
// GET http://localhost:3000/users
router.get('/', [auth, admin], getUsers);

// user profile page
// GET http://localhost:3000/users
router.get('/me', auth, getUser);

//user Registration
//POST http://localhost:3000/users
router.post('/', addUser)

// user login page
// GET http://localhost:3000/users/login
router.get('/login', (req, res) => res.render('pages/login'));

// user logout
// GET http://localhost:3000/users/login
router.get('/logout', logout);

// user login 
// POST http://localhost:3000/users/login
router.post('/login', login);

//exports
module.exports = router;