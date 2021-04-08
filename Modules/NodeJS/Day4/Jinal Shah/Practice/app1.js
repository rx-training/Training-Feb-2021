const EventEmitter = require('events');

const logger1 = require('./logger1')
const logger11 = new logger1();

//register a listener
logger11.on('messageLogged',(arg) => {
    console.log('listener called',arg);
});


logger11.log('message');