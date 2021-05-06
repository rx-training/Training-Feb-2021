//import modules
const router = require('express').Router(); 

const {getReports, getMedicines, getSummary} = require('../../../controllers/reportController');

//routes

//get medicine list
//GET http://localhost:3000/patients/:patientId/reports/medicines
router.get('/medicines', getMedicines);

//get summary report of doctor and patient
//GET http://localhost:3000/patients/:patientId/reports/summary
router.get('/summary', getSummary);

//get all reports 
//GET http://localhost:3000/patients/:id/reports
router.get('/', getReports);

//get report of perticular doctor
//GET http://localhost:3000/patients/:patientId/reports/:id
router.get('/:id', getReports);




//exports
module.exports = router;