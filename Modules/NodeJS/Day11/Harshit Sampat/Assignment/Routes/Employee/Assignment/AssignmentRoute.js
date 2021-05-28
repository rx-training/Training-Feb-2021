const router = require('express').Router()

const {getAllAssignment,addNewAssignment,updateAssignment,deleteAssignment} = require('../../../controllers/emp')


//route to get all assignment
router.get('/',getAllAssignment)
    
//route to create new assignments
router.post('/',addNewAssignment)

//update assignment
router.put('/:id',updateAssignment)

//delete Assignement
router.delete('/:id',deleteAssignment)

module.exports = router


