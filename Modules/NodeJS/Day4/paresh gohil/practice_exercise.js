var path1 = require("path")
var obj = path1.parse(__filename);
console.log(obj)
console.log(path1.join('http:/ /'))

/*-----------------------------------------------------------------*/

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.write("hello world")
        res.end();
    }
    else if (req.url == "/api/courses") {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
}).listen(3000);

/*-------------------------------------------------------------*/
http.createServer((req, res) =>{
    console.log(req.url);
    res.end();
}).listen(3000,()=>{
    console.log("server started......")
})

console.log('Listening on port 3000......');

/*-------------------------------------------------------------*/
var file =  require("fs")
http.createServer((req, res) =>{
    console.log(req.url);
    if (req.url == "/") {
        console.log("Welcome to the Application")
        res.write("Welcome to the Application")
        res.end()
    }
    else if (req.url == "/students") {
        file.readFile("./student.json",(err,data) => {
            console.log(JSON.parse(data.toString()))
            res.write(data.toString())
            res.end()
        })
    }
}).listen(3000,()=>{
    console.log("server started......")
})

console.log('Listening on port 3000......');
