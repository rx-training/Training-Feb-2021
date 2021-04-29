const {Technology, validateModule: validate} = require('../models/technology');
const fs = require('fs');
const path = require('path');

const AwsHelper = require('../helpers/aswHelper');

const awsHelper = new AwsHelper();

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




class ModuleDomain {
    //To get plans
    async getModules(req, res) {
  
    try {
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
            res.render(urlPath, {module, Tech}); 
        } else {

            //response
            res.render(urlPath, {modules, Tech, techName: await tech.name, techId : await tech._id}); 
        }
      } catch (error) {
        res.send(error);
      }
    }
    
      //To insert module
      async insertModule(req, res) {
    
        try {
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

            awsHelper.uploadFiles(req.files, `${tech.name}/${req.body.topic}`)
              .then(async (arr) => {
                //create
                modules.push({
                  topic: req.body.topic,
                  contents: arr
                })

                //save to db
                tech = await tech.save();
              })
            

            //response
            res.redirect('back');
        } catch (error) {
          res.send(error);
        }
      }
    
      //To update module
      async updateModule(req, res) {
    
        try {
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
        } catch (error) {
          res.send(error);
        }
      }
    
      
    
      //To delete module
      async deleteModule(req, res) {
    
        try {
          //get data with id
            let tech = await Technology.findById(req.techId);

            //check module
            let {modules} = await checkCtype(req.params.cType, tech);

            //get data with id
            module = await modules.id(req.params.id);

            let data;

            module.contents.forEach(async (element) => {
              
              data = await awsHelper.delelteFile(element.contentUrl);
              console.log(element.contentUrl);
            });

            //if not in db return
            if(!module) return res.status(404).send('Module with given id not found!!!');

            module.remove();

            tech = await tech.save();

            //response
            res.redirect('back');
        } catch (error) {
          res.send(error);
        }
      }
    
  }
  
module.exports = ModuleDomain;

