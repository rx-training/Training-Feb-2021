const { models } = require('mongoose');
const {Technology, validateContent: validate} = require('../models/technologies');

async function checkCtype(contentType, moduleId, tech) {

    //if not in db return
    if(!tech) return res.status(404).send('Technology with given id not found!!!');

    //get which modules 
    let modules;
    if(contentType == 'ppts') modules = await tech.ppts;
    else if(contentType == 'videos') modules = await tech.videos;
    else if(contentType == 'supports') modules = await tech.supports;
    else return(new Error('give proper param'));

    let module = await modules.id(moduleId)

    //if not in db return
    if(!module) return res.status(404).send('Module with given id not found!!!');

    return await module;
}

//get 
exports.getContents = async function (req, res) {

    //get data with id
    let tech = await Technology.findById(req.techId);

    //check module
    let module = await checkCtype(req.cType, req.moduleId, tech);

    const id = req.params.id;

    //check if id given
    if(id) {
      
        //get data with id
        const content = await module.contents.id(id);

        //if not in db return
        if(!content) return res.status(404).send('Content with given id not found!!!');
        
        //response
        res.send(content); 
    } else {
        //get all contents 
        const contents = await module.contents
        //response
        res.send(contents);
    }
}

//add 
exports.addContent = async function (req, res) {

    //get data with id
    let tech = await Technology.findById(req.techId);

    //check module
    let module = await checkCtype(req.cType, req.moduleId, tech);

    //validate user input
    const { error } = await validate(req.body);
    
    //if error return
    if(error) return res.status(400).send(error.details[0].message);

    //create
    module.contents.push({
        contentName: req.body.contentName,
        contentUrl: req.body.contentUrl,
        description: req.body.description
    })

    //save to db
    tech = await tech.save();

    //response
    res.send(tech);
}

//update 
exports.updateContent = async function (req, res) {

    //get data with id
    let tech = await Technology.findById(req.techId);

    //check module
    let module = await checkCtype(req.cType, req.moduleId, tech);

    //validate user input
    const { error } = await validate(req.body);
    
    //if error return
    if(error) return res.status(400).send(error.details[0].message);

    //get data with id
    content = await module.contents.id(req.params.id);

    //if not in db return
    if(!content) return res.status(404).send('Content with given id not found!!!');
 
    //update
    content.contentName = req.body.contentName;
    content.contentUrl = req.body.contentUrl;
    content.description = req.body.description;

    //save
    tech = await tech.save()
 
    //response
    res.send(tech);
 }

 //delete
 exports.deleteContent= async function (req, res) {

    //get data with id
    let tech = await Technology.findById(req.techId);

    //check module
    let module = await checkCtype(req.cType, req.moduleId, tech);

    //get data with id
    content = await module.contents.id(req.params.id);

    //if not in db return
    if(!content) return res.status(404).send('Content with given id not found!!!');

    content.remove();

    tech = await tech.save()
    //response
    res.send(tech);
 }