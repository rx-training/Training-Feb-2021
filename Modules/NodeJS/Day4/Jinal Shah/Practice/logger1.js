const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class logger1 extends EventEmitter{

    log(message) {
        //send an http request
        console.log(message);
    
        // raise an event
        this.emit('messageLogged',{ id: 1, url: 'http://'});
    }

}


module.exports = logger1 ;