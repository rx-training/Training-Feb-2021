//npm run serve

var message = '';
console.log(global.message)  //undefined

/* var sayHello = function () {
    console.log("Hello!!!")
}
window.sayHello(); */

console.log(module);

const log = require ('./logger')
//console.log(logger);     
//logger.log('message')
log('message')


//----------------------------------------------

const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

//-----------------------------------------------

const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('total memory : '+ totalMemory);
console.log(`free memory : ${freeMemory}`);

//-----------------------------------------------

const fs = require('fs');
//const { readdirSync } = require('node:fs');
const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./',function(err,files){
    if(err) console.log('error');
    else console.log('result',files);
});

fs.readdir('$',function(err,files){
    if(err) console.log('error');
    else console.log('result',files);
}); 

//----------------------------------------------
