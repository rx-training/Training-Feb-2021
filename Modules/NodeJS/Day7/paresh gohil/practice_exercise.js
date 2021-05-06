const express = require("express");
const app = express();
const log = require("./practice/logger")
const bodyParser = require('body-parser')


/*built in middleware*/
app.use(express.json());

app.use(express.urlencoded({ extended : true}))

app.use(express.static("public"))

/*custom middleware*/
app.use(log);

app.use(function (req,res,next) {
    console.log("Authentication ...");
    next();
})

/*third party middleware*/
app.use(bodyParser.json())

const course = [
    {"id": 1 , "CName": "JS"},
    {"id": 2 , "CName": "HTML"},
    {"id": 3 , "CName": "CSS"}
]

app.listen(3000,(err) => {
    console.log(err)
})

app.get("/course", (req,res) => {
    res.send(course);
})

app.post("/course", (req,res) => {
    const courses = {
        "id" : course.length + 1,
        "CName" : req.body
    }
    course.push(courses)
    res.send(courses);
})

/*-------------------------------------------------------------------------------*/
/*router middleware*/

const router = express.Router()
router.use((req,res,next)=>{
    console.log("Time:",new Date())
    next()
})
router.get("/user/:id",(req,res,next)=>{
    console.log('Request URL:', req.originalUrl)
    next()
},(req,res,next)=>{
    console.log('Request Type:', req.method)
    next()
},(req,res)=>{
    res.json({
        status:true,
        id:req.params.id
    })
})
app.use('/',router)

app.listen(3001,(req,res)=>{
    console.log('server running on 3000')
})
