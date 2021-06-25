const router = require('express').Router();
const {getContents, addContent, updateContent, deleteContent} = require('../../controllers/contentController')
const upload = require('../../middlewares/updoad');
const admin = require('../../middlewares/admin');

//routes

//get all technologies
//GET http://localhost:3000/technologies/:id/modules/:module/:id/contents
router.get('/', getContents);

//get technologie
//GET http://localhost:3000/technologies/:id/modules/:module/:id/contents/:id
router.get('/:id', getContents);

//add technologie
//POST http://localhost:3000/technologies/:id/modules/:module/:id/contents
router.post('/', admin, upload.single('content'), addContent);

//add technologie
//PUT http://localhost:3000/technologies/:id/modules/:module/:id/contents/:id
// router.put('/:id', updateContent);
router.post('/:id/update', admin, updateContent);

//add technologie
//DELETE http://localhost:3000/technologies/:id/modules/:module/:id/contents/:id
// router.delete('/:id', deleteContent);
router.get('/:id/delete', admin, deleteContent);


//exports
module.exports = router;

