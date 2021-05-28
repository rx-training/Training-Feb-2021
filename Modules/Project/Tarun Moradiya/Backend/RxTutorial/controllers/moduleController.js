const {Technology, validateModule: validate} = require('../models/technologies');

async function checkCtype(contentType, tech) {

    //if not in db return
    if(!tech) return res.status(404).send('Technology with given id not found!!!');

    //get which modules 
    let modules;
    if(contentType == 'ppts') modules = await tech.ppts;
    else if(contentType == 'videos') modules = await tech.videos;
    else if(contentType == 'supports') modules = await tech.supports;
    else return(new Error('give proper param'));

    return await modules;
}

//get 
exports.getModules = async function (req, res) {

    //get data with id
    let tech = await Technology.findById(req.techId);

    //check module
    let modules = await checkCtype(req.params.cType, tech);

    const id = req.params.id;

    //check if id given
    if(id) {
      
        //get data with id
        const module = await modules.id(id);

        //if not in db return
        if(!module) return res.status(404).send('Module with given id not found!!!');
        
        //response
        res.send(module); 
    } else {

        //response
        res.send(modules);
    }
}

//add 
exports.addModule = async function (req, res) {

    //get data with id
    let tech = await Technology.findById(req.techId);

    //check module
    let modules = await checkCtype(req.params.cType, tech);

    //validate user input
    const { error } = await validate(req.body);
    
    //if error return
    if(error) return res.status(400).send(error.details[0].message);

    //create
    modules.push({
        topic: req.body.topic
    })

    //save to db
    tech = await tech.save();

    //response
    res.send(tech);
}

//update 
exports.updateModule = async function (req, res) {

    //get data with id
    let tech = await Technology.findById(req.techId);

    //check module
    let modules = await checkCtype(req.params.cType, tech);

    //validate user input
    const { error } = await validate(req.body);
    
    //if error return
    if(error) return res.status(400).send(error.details[0].message);

    //get data with id
    module = await modules.id(req.params.id);

    //if not in db return
    if(!module) return res.status(404).send('Module with given id not found!!!');
 
    //update
    module.topic = req.body.topic;

    //save
    tech = await tech.save()
 
    //response
    res.send(tech);
 }

 //delete
 exports.deleteModule = async function (req, res) {

    //get data with id
    let tech = await Technology.findById(req.techId);

    //check module
    let modules = await checkCtype(req.params.cType, tech);

    //get data with id
    module = await modules.id(req.params.id);

    //if not in db return
    if(!module) return res.status(404).send('Module with given id not found!!!');

    module.remove();

    tech = await tech.save()
    //response
    res.send(tech);
 }