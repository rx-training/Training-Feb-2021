//import modules
const { Assistant, validateAssis: validate} = require('../models/assistants');

const _ = require('lodash');

//get all departments
exports.getAssitant = async (req, res) => {

    if(req.params.id) {

        //get doctor
        const assistant = await Assistant.findById(req.params.id);

        //if not found return
        if(!assistant) return res.status(401).send('Assistant with given id does not exist');

        //send response
        res.send(assistant);
    } else {

        //get all departments
        const assistants = await Assistant.find();

        //send response
        res.send(assistants);
    }
}

//add departments
exports.addAssistant = async (req, res) => {

    //validate user input
    const results = validate(req.body);

    //if error return
    if(results.error) return res.status(400).send(results.error);

    //create assistant
    const assistant = new Assistant(_.pick(req.body, ['name', 'email', 'department']));

    //save department
    await assistant.save();

    //send response
    res.send(assistant);
}

//update
exports.updateAssistant = async (req, res) => {

    //check if doctor exist
    const assistant = await Assistant.findById(req.params.id);

    if(!assistant) return res.status(401).send('assistant with this id does not exist');

    //update data
    if(req.body.name) assistant.name = req.body.name;
    if(req.body.email) assistant.email = req.body.email;
    if(req.body.department) assistant.department = req.body.department;

    //save data
    await assistant.save();

    //send response
    res.send(assistant);
}

//delete
exports.deleteAssistant = async (req, res) => {
    //remove if doctor exist
    const assistant = await Assistant.findByIdAndRemove(req.params.id);

    //if not return
    if(!assistant) return res.status(401).send('assitant with this id does not exist');

    //send response
    res.send(assistant);
}