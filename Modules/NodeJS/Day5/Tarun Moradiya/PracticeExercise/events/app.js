//Create an Event Emitter Instance and Register a Couple of Callbacks

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

function c1() {
   console.log('an event occurred!');
}

function c2() {
   console.log('yet another event occurred!');
}

myEmitter.on('eventOne', c1); // Register for eventOne
myEmitter.on('eventOne', c2); // Register for eventOne

myEmitter.emit('eventOne')

//Registering for the Event to Be Fired Only One Time Using Once

myEmitter.once('eventOnce', () => console.log('eventOnce once fired'));  

myEmitter.emit('eventOnce');
myEmitter.emit('eventOnce');

//Registering for the Event With Callback Parameters

myEmitter.on('status', (code, msg)=> console.log(`Got ${code} and ${msg}`));

myEmitter.emit('status', 200, 'ok');

//Unregistering Events

myEmitter.off('eventOne', () => console.log('eventOne is off'));

myEmitter.emit('eventOne');  

//Getting Listener Count

console.log(myEmitter.listenerCount('eventOne'));

//Getting Raw Listeners

console.log(myEmitter.rawListeners('eventOne'));

//Async Example Demo

// class WithTime extends EventEmitter {
//     execute(asyncFunc, ...args) {
//       this.emit('begin');
//       console.time('execute');
//       this.on('data', (data)=> console.log('got data ', data));
//       asyncFunc(...args, (err, data) => {
//         if (err) {
//           return this.emit('error', err);
//         }
//         this.emit('data', data);
//         console.timeEnd('execute');
//         this.emit('end');
//       });
//     }
//   }

//   const withTime = new WithTime();

// withTime.on('begin', () => console.log('About to execute'));
// withTime.on('end', () => console.log('Done with execute'));

// const readFile = (url, cb) => {
//   fetch(url)
//     .then((resp) => resp.json()) // Transform the data into json
//     .then(function(data) {
//       cb(null, data);
//     });
// }

// withTime.execute(readFile, 'https://jsonplaceholder.typicode.com/posts/1');


/////////////////////////////////////////////////////////////////////////////////////////////////

// The Complete Boilerplate Code for the EventEmitter Class

// class EventEmitter {
//     listeners = {};  // key-value pair
  
//     addListener(eventName, fn) {}
//     on(eventName, fn) {}
  
//     removeListener(eventName, fn) {}
//     off(eventName, fn) {}
  
//     once(eventName, fn) {}
  
//     emit(eventName, ...args) { }
  
//     listenerCount(eventName) {}
  
//     rawListeners(eventName) {}
//   }

////////////////////////////////////////////////////////////////////////////////////////////////////

//The addListener() Method

// addListener(event, fn) {
//     this.listeners[event] = this.listeners[event] || [];
//     this.listeners[event].push(fn);
//     return this;
//   }

//   this.listeners[event] // will return array of events or undefined (first time registration)

// const eventEmitter = new EventEmitter();
// eventEmitter.addListener('test-event', 
//  ()=> { console.log ("test one") } 
// );

// this.listeners['test-event'] = [];  // empty array