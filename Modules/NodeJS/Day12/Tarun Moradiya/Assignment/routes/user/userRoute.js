// import modules
const router = require('express').Router();

const {login} = require('../../controllers/userController');
const User = require('../../models/user');
const auth = require('../../middlewares/auth');

// routes

// users page
// GET http://localhost:3000/users
router.get('/me', auth, );

//user Registration
//POST http://localhost:3000/users
router.post('/', (req, res) => {

})

// user login 
// POST http://localhost:3000/users/login
router.post('/login', login);

// exports
module.exports = router;