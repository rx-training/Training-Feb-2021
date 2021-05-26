//import modules
const router = require('express').Router();

const userRoute = require('./userRoute');
const assistantRoute = require('./api/assistantRoute');
const dipartmentRoute = require('./api/dipartmentRoute');
const doctorRoute = require('./api/doctor/doctorRoute');
const patientRoute = require('./api/patient/patientRoute');

const auth = require('../middlewares/auth');

//routes

//homepage
//GET http://localhost:3000
router.get('/', (req, res) => {
    res.send('Welcome!!!');
});

//child routes

//http://localhost:3000/users
router.use('/users', userRoute);

//http://localhost:3000/users
router.use('/patients', patientRoute);

//http://localhost:3000/users
router.use('/doctors', auth, doctorRoute);

//http://localhost:3000/users
router.use('/assistants', auth, assistantRoute);

//http://localhost:3000/users
router.use('/departments', dipartmentRoute);

//exports
module.exports = router;