//import modules
const router = require('express').Router();

const empRouter = require('./employees/employeesRoute');

//routes

//homepage
//GET http://localhost:3000
router.get('/', (req, res) => res.send('Welcome!!!'));

//child routes

//GET http://localhost:3000/employees
router.use('/employees', empRouter);

//exports
module.exports = router;