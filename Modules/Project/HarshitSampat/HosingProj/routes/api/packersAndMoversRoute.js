// import require modules
const { getpackerAndMovers, addNewData_PackersANd_Mmovers } = require('../../Controllers/packersMovers');
const express = require('express');
const router = express.Router();


//get request 
router.get('/', getpackerAndMovers);

//post request 
router.post('/', addNewData_PackersANd_Mmovers)

module.exports = router