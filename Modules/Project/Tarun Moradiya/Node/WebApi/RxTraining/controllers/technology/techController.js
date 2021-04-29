const router = require('express').Router();

const TechnologyDomain = require('../../domains/techDomain');
const moduleController = require('./moduleController');
const admin = require('../../middlewares/admin');


class TechnologyController {
    //To get technologies
    static async get(req, res) {
      const technologyDomain = new TechnologyDomain();
      technologyDomain.getTechnologies(req, res);
    }
    //To insert technology
    static async insertTechnology(req, res) {
      const technologyDomain = new TechnologyDomain();
      technologyDomain.insertTechnology(req, res);
    }
    //To update plan
    static async updateTechnology(req, res) {
        const technologyDomain = new TechnologyDomain();
        technologyDomain.updateTechnology(req, res);
    }
    //To delete plan
    static async deleteTechnology(req, res) {
        const technologyDomain = new TechnologyDomain();
        technologyDomain.deleteTechnology(req, res);
    }
  }

//routes

//get all technologies
//GET http://localhost:3000/technologies
router.get('/', TechnologyController.get);

//get technologie
//GET http://localhost:3000/technologies/:id
router.get('/:id', TechnologyController.get);

//add technologie
//POST http://localhost:3000/technologies
router.post('/', admin, TechnologyController.insertTechnology);

//add technologie
//PUT http://localhost:3000/technologies/:id
// router.put('/:id', updateTech);
router.post('/:id/update', admin, TechnologyController.updateTechnology);

//add technologie
//DELETE http://localhost:3000/technologies/:id
// router.delete('/:id', deleteTech);
router.get('/:id/delete', admin, TechnologyController.deleteTechnology);

//child routes 
router.use('/:id/modules', (req, res, next) => {
    req.techId = req.params.id;
    next();
}, moduleController);

//exports
module.exports = router;

