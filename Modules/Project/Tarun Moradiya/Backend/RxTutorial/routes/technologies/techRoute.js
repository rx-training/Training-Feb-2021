const router = require('express').Router();

const {getTech, addTech, updateTech, deleteTech} = require('../../controllers/techController')
const moduleRouter = require('./moduleRoute');

//routes

//get all technologies
//GET http://localhost:3000/technologies
router.get('/', getTech);

//get technologie
//GET http://localhost:3000/technologies/:id
router.get('/:id', getTech);

//add technologie
//POST http://localhost:3000/technologies
router.post('/', addTech);

//add technologie
//PUT http://localhost:3000/technologies/:id
router.put('/:id', updateTech);

//add technologie
//DELETE http://localhost:3000/technologies/:id
router.delete('/:id', deleteTech);

//child routes 
router.use('/:id/modules', (req, res, next) => {
    req.techId = req.params.id;
    next();
}, moduleRouter);

//exports
module.exports = router;

