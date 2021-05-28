const express = require('express')
const router = express.Router()

const{getAllAssistants,addNewassistant,updateAssistant,deleteAssistant} = require('../controllers/assistant')


//get assisatant
router.get('/',getAllAssistants)

//get assistant by id
router.get('/:id',getAllAssistants)


//addnew assistant
router.post('/',addNewassistant)

//update Assistant
router.put('/:id',updateAssistant)

//delete assistant
router.delete('/:id',deleteAssistant)

module.exports = router