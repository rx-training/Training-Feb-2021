const {Technology, validateModule: validate} = require('../models/technology');
const fs = require('fs');
const path = require('path');

async function checkCtype(contentType, tech) {

    //if not in db return
    if(!tech) return res.status(404).send('Technology with given id not found!!!');

    //get which modules 
    let modules, urlPath;
    if(contentType == 'ppts') {
        modules = await tech.ppts;
        urlPath = 'pages/ppts';
    } else if(contentType == 'videos') {
        modules = await tech.videos;
        urlPath = 'pages/videos';
    } else if(contentType == 'supports') {
        modules = await tech.supports;
        urlPath = 'pages/supports';
    } else return(new Error('give proper param'));

    return await {modules, urlPath };
}

//get 
exports.getModules = async function (req, res) {

    //get data with id
    let tech = await Technology.findById(req.techId);

    const Tech = await Technology.find();

    //check module
    let {modules, urlPath} = await checkCtype(req.params.cType, tech);

    const id = req.params.id;

    //check if id given
    if(id) {

      res.send(req.params.id)
        //get data with id
        const module = await modules.id(id);

        //if not in db return
        if(!module) return res.status(404).send('Module with given id not found!!!');
        
        //response
        res.header('x-auth-token', global.token).render(urlPath, {module, Tech}); 
    } else {

        //response
        res.header('x-auth-token', global.token).render(urlPath, {modules, Tech, techName: await tech.name, techId : await tech._id}); 
    }
}

//add 
exports.addModule = async function (req, res) {

    // console.log(req.files);

    console.log(req.url)
    //get data with id
    let tech = await Technology.findById(req.techId);

    //check module
    let {modules, urlPath} = await checkCtype(req.params.cType, tech);

    //validate user input
    const { error } = await validate(req.body);
    
    //if error return
    if(error) return res.status(400).send(error.details[0].message);

    let arr = [];

    for(let i = 0; i < req.files.length; i++) {
        arr.push({
            contentName: req.files[i].originalname,
            contentUrl: path.join(req.files[i].destination, req.files[i].filename),
        })
    }

    //create
    modules.push({
        topic: req.body.topic,
        contents: arr
    })

    //save to db
    tech = await tech.save();

    //response
    res.redirect('back');
}

//update 
exports.updateModule = async function (req, res) {

    //get data with id
    let tech = await Technology.findById(req.techId);

    //check module
    let {modules} = await checkCtype(req.params.cType, tech);

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
    res.redirect('back');
 }

 //delete
 exports.deleteModule = async function (req, res) {

    //get data with id
    let tech = await Technology.findById(req.techId);

    //check module
    let {modules} = await checkCtype(req.params.cType, tech);

    //get data with id
    module = await modules.id(req.params.id);

    await module.contents.forEach(element => {
        fs.unlink(element.contentUrl, (err) => {
            if (err) {
              console.error(err)
              return
            }});
    });

    //if not in db return
    if(!module) return res.status(404).send('Module with given id not found!!!');

    module.remove();

    tech = await tech.save();

    //response
    res.redirect('back');
 }