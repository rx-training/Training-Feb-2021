/* Example 1 — Create an Event Emitter Instance and Register a Couple of Callbacks. */

const EventEmitter = require('events');

const myEmitter = new EventEmitter();
function c1() {
  console.log('an event occurred!');
}

function c2() {
  console.log('yet another event occurred!');
}

myEmitter.on('eventOne', c1); // Register for eventOne
myEmitter.on('eventOne',c2); // Register for eventOne

myEmitter.emit('eventOne')

/*Example 2 — Registering for the Event to Be Fired Only One Time Using Once.*/
myEmitter.once('eventOne1', () => {
  console.log("only one time event occur")
}); // Register for eventOne
myEmitter.emit('eventOne1')
myEmitter.emit('eventOne1')


/*Example 3 — Registering for the Event With Callback Parameters.*/
myEmitter.on('status', (code, msg) => {
  console.log(`Got ${code} and ${msg}`)
});

myEmitter.emit('status', 200, 'ok');

// Example 4 — Unregistering Events
myEmitter.off('eventOne3', () => {
  console.log("No event occur")
});

myEmitter.emit('eventOne3')

// Example 5 — Getting Listener Count
console.log(myEmitter.listenerCount('eventOne'));

// Example 6 — Getting Raw Listeners
console.log(myEmitter.rawListeners('eventOne1'));

