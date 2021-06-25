const stFeesRouter=require('./student/fees');
const stResultRouter=require('./student/result');
const employeeRouter=require('./employee/employees');
const loginRouter=require('./public/login');
const express=require('express');
const router=express.Router();

router.use('/login',loginRouter);
router.use('/student/result',stResultRouter);
router.use('/student/fees',stFeesRouter);
router.use('/emps',employeeRouter);

router.get('/',(req,res)=>{
    res.send(` Welcome to Day9 task of node.js \n Please /login to view all the routes.`);
});

module.exports=router;

