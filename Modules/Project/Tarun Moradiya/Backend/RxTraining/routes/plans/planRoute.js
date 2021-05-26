const router = require('express').Router();

const {getPlan, addPlan, updatePlan, deletePlan} = require('../../controllers/planController')
const admin = require('../../middlewares/admin');

//routes

//get all plans
//GET http://localhost:3000/plans
router.get('/', getPlan);

//get plan
//GET http://localhost:3000/plans/:id
router.get('/:id', getPlan);

//add plan
//POST http://localhost:3000/plans
router.post('/', admin, addPlan);

//add plan
//PUT http://localhost:3000/plans/:id
// router.put('/:id', admin, updatePlan);
router.post('/:id/update', admin, updatePlan);

//add plan
//DELETE http://localhost:3000/plans/:id
// router.delete('/:id', admin, deletePlan);
router.get('/:id/delete', admin, deletePlan);

//exports
module.exports = router;

