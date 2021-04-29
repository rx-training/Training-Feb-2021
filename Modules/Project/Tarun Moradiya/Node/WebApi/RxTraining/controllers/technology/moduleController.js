// const router = require('express').Router({mergeParams: true});
const router = require('express').Router();
const ModuleDomain = require('../../domains/moduleDomain');
const contentController = require('./contentController');
const upload = require('../../middlewares/updoad')
const admin = require('../../middlewares/admin');


class TechnologyModule {
    //To get modules
    static async get(req, res) {
      const moduleDomain = new ModuleDomain();
      moduleDomain.getModules(req, res);
    }
    //To insert module
    static async insertModule(req, res) {
        const moduleDomain = new ModuleDomain();
        moduleDomain.insertModule(req, res);
    }
    //To update module
    static async updateModule(req, res) {
        const moduleDomain = new ModuleDomain();
        moduleDomain.updateModule(req, res);
    }
    //To delete module
    static async deleteModule(req, res) {
        const moduleDomain = new ModuleDomain();
        moduleDomain.deleteModule(req, res);
    }
  }


//routes

//get all technologies
//GET http://localhost:3000/technologies/:id/modules/:module
router.get('/:cType', TechnologyModule.get);

//get technologie
//GET http://localhost:3000/technologies/:id/modules/:module/:id
router.get('/:cType/:id', TechnologyModule.get);

//add technologie
//POST http://localhost:3000/technologies/:id/modules/:module
router.post('/:cType', admin, upload.array('contents'), TechnologyModule.insertModule);

//add technologie
//PUT http://localhost:3000/technologies/:id/modules/:module/:id
// router.put('/:cType/:id', updateModule);
router.post('/:cType/:id/update', admin, TechnologyModule.updateModule);

//add technologie
//DELETE http://localhost:3000/technologies/:id/modules/:module/:id
// router.delete('/:cType/:id', deleteModule);
router.get('/:cType/:id/delete', admin, TechnologyModule.deleteModule);

//child routes 

// http://localhost:3000/technologies/:id/modules/:module/:id
router.use('/:cType/:id/contents', (req, res, next) => {
    req.cType = req.params.cType;
    req.moduleId = req.params.id;
    next();
}, contentController);

//exports
module.exports = router;

