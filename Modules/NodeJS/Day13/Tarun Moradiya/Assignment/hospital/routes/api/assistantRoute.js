//import modules
const router = require('express').Router(); 

const {getAssitant, addAssistant, updateAssistant, deleteAssistant} = require('../../controllers/assistantController');

//routes

//get all assistants
//GET http://localhost:3000/assistants
router.get('/', getAssitant);

//get assistant
//GET http://localhost:3000/assistants/:id
router.get('/:id', getAssitant);

//add assistant
//POST http://localhost:3000/assistants
router.post('/', addAssistant);

//update assistant
//PUT http://localhost:3000/assistants
router.put('/:id', updateAssistant);

//delete assistant
//DELETE http://localhost:3000/assistants
router.delete('/:id', deleteAssistant);

//exports
module.exports = router;