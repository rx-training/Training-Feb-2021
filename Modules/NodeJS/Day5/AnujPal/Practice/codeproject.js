            //  1) 

const EventEmitter = require('events');
const myEmitter = new EventEmitter();
     function c1() {
         console.log('an event occurred!');
    
      function c2() {
         console.log('yet another event occurred!');
    
      myEmitter.on('eventOne',c1);  
      myEmitter.on('eventOne',c2);  
      myEmitter.emit('eventOne');



            //  2)

     myEmitter.once('eventAtOnce', () => {
         console.log("event at once");
     }  
     myEmitter.emit('eventAtOnce');
     myEmitter.emit('eventAtOnce');


            //  3)

    myEmitter.on('status', (code, msg)=> console.log(`Got ${code} and ${msg}`));
    myEmitter.emit('status', 200, 'ok');


            //  4)

     myEmitter.off('status', (code, msg)=> console.log(`Got ${code} and ${msg}`));
     myEmitter.emit('status', 200, 'ok');

            //  5)

    /console.log(myEmitter.listenerCount('eventOne'));

            //  6)


    console.log(myEmitter.rawListeners('eventOne'));