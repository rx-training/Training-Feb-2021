const express = require('express')
const customer=require('./Controllers/customer')
//const seller = require('./Controllers/seller')
const app = express();

/*app.use((req,res,next)=>{
    console.log('Time',Date.now())
    next();
})

app.use('/user/:id',(req,res,next)=>{
    console.log('Request type:',req.method)
    next();
})

app.get('/',(req,res)=>{
    console.log('Hey welcome MR Sampat!')
})


// This is using array 
function logOriginalurl(req,res,next){
    console.log('Request url:',req.originalUrl)
    next();
}

function logMethod(req,res,next){
    console.log('Request type:',req.method)
    next();
}

var LogStuff = [logOriginalurl,logMethod]
app.get('/user/name/:id',LogStuff,(req,res,next)=>{
    res.send('User Info')
})*/
app.listen(3000)


// Roter Level MIddleware
var router = express.Router()

 router.use('/customer',customer)
 router.use('/seller')