
// https://www.codeproject.com/Articles/1277373/Code-Your-Own-Event-Emitter-in-Node-js-A-Step-by-s


//------------------ 1. Create an Event Emitter Instance and Register a Couple of Callbacks

const EventEmitter = require("events");
const myEmitter = new EventEmitter();

function c1() {
   console.log('an event occurred!');
}

function c2() {
    setTimeout(() => {
        console.log('yet another event occurred!');

    }, 5000);
   //console.log('yet another event occurred!');
}

myEmitter.on('eventOne', c1); // Register for eventOne
myEmitter.on('eventOne', c2); // Register for eventOne

myEmitter.emit('eventOne');


//------------ 2.Registering for the Event to Be Fired Only One Time Using Once


myEmitter.once('eventOnce', () => console.log('eventOnce once fired'));
myEmitter.emit('eventOnce');


//------------ 3.Registering for the Event With Callback Parameters

myEmitter.on('status', (code, msg)=> console.log(`Got ${code} and ${msg}`));
myEmitter.emit('status', 200, 'ok');


//------------ 4.Unregistering Events

myEmitter.off('eventOne', c1);
myEmitter.emit('eventOne');  // noop


//------------ 5.Getting Listener Count

console.log(myEmitter.listenerCount('eventOne'));


//------------ 6.Getting Raw Listeners

console.log(myEmitter.rawListeners('eventOne'));