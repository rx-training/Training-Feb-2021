const express = require('express');

//custom middleware create
const loggerMiddleware = (req,res,next =>{
    console.log(`Logged ${req.url} ${req.method}--${new Date()}`)
    next();
})

const app = express()       

//application level middleware 
app.use(loggerMiddleware);
//User Route
app.get('/users',(req,res)=>{
    res.json({
        'status':true
    })
})

//save route
app.post('/save',(req,res)=>{
    res.json({
         'status':true    
    })
})
app.listen(3000,(req,res)=>{
    console.log('Server running on port 3000')
})