const employees=require('./employee/employees');
const assignment=require('./assignment/assignments');
const express = require('express');
const router = express.Router();

router.use((req,res,next)=>{
    console.log(`Invoked ${req.url} at ${new Date()}`);
    next();
});
router.use('/emps',employees);
router.use('/assignments',assignment);

router.get('/',(req,res)=>{
    res.send("Employees and assignment task");
});

module.exports=router;