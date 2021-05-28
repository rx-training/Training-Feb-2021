const loginRouter=require('./login');
const resultRouter=require('./api/result');
const feesRouter=require('./api/fees');
const express=require('express');
const router=express.Router();

router.use('/users',loginRouter);
router.use('/api/result',resultRouter);
router.use('/api/fees',feesRouter);

router.get('/',(req,res)=>{
    res.send("Welcome to student result task please. /login");
});

module.exports=router;