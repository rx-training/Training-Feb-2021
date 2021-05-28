const express=require('express');
const app=express();

// app.use(express.json()); //req.body

// const courses = [
//     {id:1, name:'course1'},
//     {id:2, name:'course2'},
//     {id:3, name:'course3'}
// ];
// app.get('/',(req,res) =>
// {
//     res.send('Hello World');
// });
// app.get('/api/courses',(req,res) =>{
//     res.send(courses);
// });
// app.listen(3002);

// custome middleware create
const LoggerMiddleware = (req,res,next) => {
    console.log(`Logged ${req.url} ${req.method} -- ${new Date()}`)
    next();
}

// application level middleware
app.use(LoggerMiddleware);
// users route
app.get('/users',(req,res) => {
    res.json({
        'status':true
    })
})

// save route
app.post('/save',(req,res) => {
    res.json({
        'status':true
    })
})
app.listen(3002,(req,res) => {
    console.log(`server running on port 3002`)
})