const router = require('express').Router();
const {getDept, addDept, updateDept, deleteDept} = require('../../controllers/deptController')
const admin = require('../../middlewares/admin');
//routes

//get all departments
//GET http://localhost:3000/departments
router.get('/', getDept);

//get department
//GET http://localhost:3000/departments/:id
router.get('/:id', getDept);

//add department
//POST http://localhost:3000/departments
router.post('/', admin, addDept);

//add department
//PUT http://localhost:3000/departments/:id
// router.put('/:id', admin, updateDept);
router.post('/:id/update', admin, updateDept);

//add department
//DELETE http://localhost:3000/departments/:id
// router.delete('/:id', admin, deleteDept);
router.get('/:id/delete', admin, deleteDept);

//exports
module.exports = router;

