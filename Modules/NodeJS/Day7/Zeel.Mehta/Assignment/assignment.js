let http=require('http');
let express=require('express');
const router=express.Router();
let log=require('./middleware/log');
let fs=require('fs');
let app=express();
app.use(express.json());
app.use(log);
let assignment=require("./controllers/emp");

// const {json} =require('body-parser');
app.use("/emp",assignment);

// catch 404
app.use(function(req, res, next){
    next(createError(404));
});

// error handling
app.use(function (err, req, res, next) {
    res.locals.message=err.message;
    res.locals.error=req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
  });


http.createServer(app).listen(3000,function()
{
    console.log("Application started at port number 3000")
})

module.exports=app;


