
const EventEmitter = require('events');
const emitter = new EventEmitter();

//register a listener

   /*  emitter.on('messageLogged',function(){
        console.log('listener called');
    }); */

   /*  emitter.on('messageLogged',function(arg){
        console.log('listener called',arg);
    }); */

    emitter.on('messageLogged',(arg) => {
        console.log('listener called',arg);
    });

// raise an event
    //emitter.emit('messageLogged');

    emitter.emit('messageLogged',{ id: 1, url: 'http://'});