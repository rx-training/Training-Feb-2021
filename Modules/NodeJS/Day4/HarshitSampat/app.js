/* Path module from video */ 
/*const path = require('path')
var pathobj=path.parse(__dirname)
console.log(pathobj)8*/

/* Os Module video */ 

/*const os = require('os')
var totalmemory = os.totalmem()
var freememory =os.freemem()

console.log('Total memory: '+totalmemory)
console.log('Free memory: '+freememory)

console.log('It is through ecma script')

console.log(`toalmemory : ${totalmemory}`)
console.log(`freememory:${freememory}`)*/

/* Fs module Video */
/*const fs = require('fs');

//const files = fs.readdirSync('./');
//console.log(files);
fs.readdir('../',function(err,files){
    if(err) console.log('Error',err);
    else console.log('result',files)
})*/

/*Event Module video*/ 

const http = require('http')
const server =http.createServer((req,res)=>{
    if (req.url ==='/'){
        res.write('Hello World')
        res.end();
    }
    if(req.url==='/api/courses'){
        res.write(JSON.stringify([1,2,3]))
        res.end();
    }
});

server.listen(3000)

console.log('Listening port 3000..');
