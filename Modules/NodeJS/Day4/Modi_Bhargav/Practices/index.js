const path = require('path');

var pathobj = path.parse(__filename);

console.log(pathobj);

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)

const fs = require('fs')

fs.readdir('./',(err,files) => {
  if (err) console.log('Error',err)
  if (files) console.log('Result:',files)
})

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged',(arg) => {
   console.log('Listener called1',arg)
});

emitter.emit('messageLogged',{id:1,url:'http://'})

// load file

// const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// Register a listner
logger.on('messageLogged',(arg) => {
  console.log('Listener called2',arg)
});

logger.log('message1')


