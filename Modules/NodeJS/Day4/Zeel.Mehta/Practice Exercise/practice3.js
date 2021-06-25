var log = require('./practice2');

console.log(log);

log('message');


//var practice2 = require('./practice2');
//console.log(practice2);
//practice2.log('message');

const path=require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);  

//OS Module

const os=require('os');
var totalMemory=os.totalmem();
var freeMemory = os.freemem();
//console.log('Total Memory : '+totalMemory);

// Template String
// ES6 / ES2015 : ECMAScript 6

console.log(`Total Memeory : ${totalMemory}`);
console.log(`Free Memeory : ${freeMemory}`);


//File System Module

const fs =require('fs');
const EventEmitter = require('node:events');
//const files = fs.readdirSync('./');
//console.log(files);
fs.readdir('./', function(err,files){
    if(err) console.log("Error",err);
    else console.log("Result",files)
});


//Event Module

const EventEmitter = require('events');
const emitter = new EventEmitter();
    //Register a listener
emitter.on('messageLogged', function(arg){
    console.log('Listener called');
});
    //Raise an event
emitter.emit('messageLogged',{id:1, url: 'http://'});
