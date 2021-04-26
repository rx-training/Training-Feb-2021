//Example 1 — Create an Event Emitter Instance and Register a Couple of Callbacks

const EventEmitter = require('events')
const myEmitter = new EventEmitter();

function c1() {
   console.log('Eventone : an event occurred!');
}

function c2() {
   console.log('Eventone : yet another event occurred!');
}

myEmitter.on('eventOne', c1); // Register for eventOne
myEmitter.on('eventOne', c2); // Register for eventOne
myEmitter.emit('eventOne');

//Example 2 — Registering for the Event to Be Fired Only One Time Using Once
myEmitter.once('eventOnce', () => console.log('Eventonce : eventOnce once fired')); // Register for eventOnce
myEmitter.emit('eventOnce');

//Example 3 — Registering for the Event With Callback Parameters
myEmitter.on('status', (code, msg)=> console.log(`Status : Got ${code} and ${msg}`)); // Register for status
myEmitter.emit('status', 200, 'ok');

//Example 4 — Unregistering Events
myEmitter.off('eventOne', c2);
myEmitter.emit('eventOne');  // noop

//Example 5 — Getting Listener Count
console.log(myEmitter.listenerCount('eventOne'));
myEmitter.on('eventOne', c2);
console.log(myEmitter.listenerCount('eventOne'));

//Example 6 — Getting Raw Listeners
console.log(myEmitter.rawListeners('eventOne'));

