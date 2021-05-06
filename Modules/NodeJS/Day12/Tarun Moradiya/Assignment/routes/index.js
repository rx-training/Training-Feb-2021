// import modules
const router = require('express').Router();

const studentsRoute = require('./students/studentRoute');
const employeesRoute = require('./employees/employeeRoute')
const userRoutes = require('./user/userRoute');

const auth = require('../middlewares/auth');

// routes

// home page
// GET http://localhost:3000
router.get('/', (req, res) => {
    res.send('<h1>Welcome</h1>')
})

// child routes

// http://localhost:3000/students
router.use('/students', auth, studentsRoute);

// http://localhost:3000/employees
router.use('/employees', auth, employeesRoute);

// http://localhost:3000/users
router.use('/users', userRoutes);

// export
module.exports = router;