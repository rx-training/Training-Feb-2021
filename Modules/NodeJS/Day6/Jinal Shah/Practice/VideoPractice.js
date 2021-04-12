let http = require('http');
let express = require('express');

let app =express();
//app.use(express.json())

var bodyParser = require('body-parser')
app.use(bodyParser.json())
var urlencodedParser = bodyParser.urlencoded({ extended : false})

let person = require('./person.json')

http.createServer(app).listen(3000,function(){
    console.log("Application started at port no 3000")
})

app.get("/",(req,res) => {
    //res.send("welcome");
    console.log(person)
    res.json({"data":person});
    res.end();
})


/* app.post("/",urlencodedParser,(req,res) => {

    console.log(req.url)
    console.log(req.body)
  
}) */

app.post("/persons",(req,res) => {

    var object = req.body;

    person.push(object);
    console.log(object)
    res.send(person)
    console.log(req.body)
  
})

