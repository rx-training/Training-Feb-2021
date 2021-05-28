// const EventEmitter = require('events')

// const emitter = new EventEmitter() 

// //Register an event
// emitter.on('messageLogged', function(){
//     console.log('Listner Called')
// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Logger = require('./files/logger2') //class

const logger = new Logger() //object

//Register an event
logger.on('messageLogged2', function(arg){
    console.log('Listner Called', arg)
})

logger.log('message')