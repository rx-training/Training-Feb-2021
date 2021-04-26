// import modules
const router = require('express').Router();

const studentsRoute = require('./students/studentRoute');
const employeesRoute = require('./employees/employeeRoute')
const userRoutes = require('./user/userRoute');

const authentication = require('../middlewares/authentication');

// routes

// home page
// GET http://localhost:3000
router.get('/', (req, res) => {
    res.send('<h1>Welcome</h1>')
})

// child routes

// http://localhost:3000/students
router.use('/students', authentication, studentsRoute);

// http://localhost:3000/employees
router.use('/employees', authentication, employeesRoute);

// http://localhost:3000/users
router.use('/users', userRoutes);

// export
module.exports = router;