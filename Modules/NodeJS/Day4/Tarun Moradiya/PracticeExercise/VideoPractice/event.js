const EventEmitter = require('events') //class

const emitter = new EventEmitter() //object

//Register an event
emitter.on('messageLogged', function(){
    console.log('Listner Called')
})

// emitter.addListener or emitter.on both aare same


//Raise an event
emitter.emit('messageLogged')

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

emitter.on('messageLogged2', function(arg){
    console.log('Listner Called', arg)
})

emitter.emit('messageLogged2', 1, 'url')//bad practice for event arguments

emitter.emit('messageLogged2', {id: 1, url: 'http://'})//good practice for event arguments


//emit: Making a noise , produce - signaling


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const log = require('./files/logger')

emitter.on('logging', (args) => {
    log(args)
})

emitter.emit('logging', 'message')




