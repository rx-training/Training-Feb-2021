const router = require('express').Router();
const {getDept, addDept, updateDept, deleteDept} = require('../../controllers/deptController')
//routes

//get all departments
//GET http://localhost:3000/departments
router.get('/', getDept);

//get department
//GET http://localhost:3000/departments/:id
router.get('/:id', getDept);

//add department
//POST http://localhost:3000/departments
router.post('/', addDept);

//add department
//PUT http://localhost:3000/departments/:id
router.put('/:id', updateDept);

//add department
//DELETE http://localhost:3000/departments/:id
router.delete('/:id', deleteDept);

//exports
module.exports = router;

