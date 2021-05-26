const EventEmitter = require('events')

//const emitter = new EventEmitter() //this will not work because it is defferent object then the one is in extentEvent.js where our event is registered  

url = 'http://mylogger.io/log';

// function log(message) {
//     //Send an http request
//     console.log(message);

//     //Raise an event
//     emitter.emit('messageLogged')
// }

// module.exports = log;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class logger extends EventEmitter {
    log(message) {
        //Send an http request
        console.log(message);
    
        //Raise an event
        this.emit('messageLogged2',{id: 1, url: 'http://'})
    }
}

module.exports = logger



