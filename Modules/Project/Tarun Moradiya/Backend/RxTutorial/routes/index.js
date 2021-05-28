const router = require('express').Router();

const deptRouter = require('./deparments/deptRoute');
const techRouter = require('./technologies/techRoute');

//routes

//homepage
//http://localhost:3000
router.get('/', (req, res) => {
    res.send('Welcome!!!');
});

//child routes

//http://localhost:3000/departments
router.use('/departments', deptRouter);

//http://localhost:3000/technologies
router.use('/technologies', techRouter);

//exports
module.exports = router;