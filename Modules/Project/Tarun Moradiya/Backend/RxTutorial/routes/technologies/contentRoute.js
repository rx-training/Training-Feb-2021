const router = require('express').Router();
const {getContents, addContent, updateContent, deleteContent} = require('../../controllers/contentController')
//routes

//get all technologies
//GET http://localhost:3000/technologies/:id/modules/:module/:id/contents
router.get('/', getContents);

//get technologie
//GET http://localhost:3000/technologies/:id/modules/:module/:id/contents/:id
router.get('/:id', getContents);

//add technologie
//POST http://localhost:3000/technologies/:id/modules/:module/:id/contents
router.post('/', addContent);

//add technologie
//PUT http://localhost:3000/technologies/:id/modules/:module/:id/contents/:id
router.put('/:id', updateContent);

//add technologie
//DELETE http://localhost:3000/technologies/:id/modules/:module/:id/contents/:id
router.delete('/:id', deleteContent);


//exports
module.exports = router;

