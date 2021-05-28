const morgan = require('morgan')
const helmet = require('helmet');
const express = require('express')
const app = express();
const logger = require('./logger')
/*
console.log(`NODE_ENV:${process.env.NODE_ENV}`);
console.log(`app:${app.get('env')}`);      
*/
app.use(express.json());  
app.use(express.urlencoded({extended:true}));
app.use(express.static('pubic'));
app.use(helmet());
if(app.get('env') === 'devlopement'){
    app.use(morgan( ':method :url :status :res[content-length] - :response-time ms'))
    console.log('Morgan enabled...')
}
//app.use(morgan( ':method :url :status :res[content-length] - :response-time ms'));
app.use(logger)

const courses = [
    {id:1,"name":'course1'},
    {id:2,"name":'course2'},
    {id:3,"name":'course3'}    
]

app.get('/',(req,res)=>{
    res.send("Hello Wor")
})

app.get('/api/courses',(req,res)=>{
    res.send(courses)
})

app.get('/api/courses/:id',(req,res)=>{
   const course = courses.find(c=>c.id === parseInt(req.params.id));
   if(!course) res.status(404).send('The Course with the given id was not available')
   
    res.send(course)
})
app.get('/api/posts/:year/:month',(req,res)=>{
    res.send(req.query)
});

app.get('/api/courses',(req,res)=>{
    res.send([1,2,3]);
}); 

app.post('/api/courses',(req,res)=>{
    const course = {
        id: courses.length+1,
        name:req.body.name 

    }
   courses.push(course);
   res.send(course);
})

app.put('/api/courses/:id',(req,res)=>{
    const course = courses.find(c=>c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The Course with the given id was not available')
   
    course.name=req.body.name;
    //return the update code
    res.send(course)
});

//delete method
app.delete('/api/courses/:id',(req,res)=>{
    const course = courses.find(c=>c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The Course with the given id was not available')
   
    //delete
    const index = courses.indexOf(course) 
    courses.splice(index,1);   
    res.send(course)
})

const port = process.env.PORT ||3000
app.listen(port,()=>
    console.log(`Listening on port ${port}`)
);/*
app.post()
app.put()
app.delete()*/