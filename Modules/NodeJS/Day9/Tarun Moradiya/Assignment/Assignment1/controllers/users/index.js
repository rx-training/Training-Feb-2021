// import modules
const router = require('express').Router();

const login = require('../../middlewares/login')

// routes

// users page
// GET http://localhost:3000/users
router.get('/', (req, res) => {
    res.send('<h1>Users</h1>');
});

// user login 
// POST http://localhost:3000/users/login
router.post('/login', login);

// exports
module.exports = router;