// const router = require('express').Router({mergeParams: true});
const router = require('express').Router();

const deptRouter = require('./deparments/deptRoute');
const techRouter = require('./technologies/techRoute');
const planRouter = require('./plans/planRoute');
const userRouter = require('./users/userRoute');

const auth = require('../middlewares/auth')

//routes

//homepage
//http://localhost:3000
router.get('/', async (req, res) => res.redirect('/technologies'));

//child routes

//http://localhost:3000/departments
router.use('/departments', auth, deptRouter);

//http://localhost:3000/technologies
router.use('/technologies', auth, techRouter);

//http://localhost:3000/plans
router.use('/plans', auth, planRouter);

//http://localhost:3000/users
router.use('/users', userRouter);

//exports
module.exports = router;