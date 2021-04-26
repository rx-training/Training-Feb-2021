// function main() {
//   setTimeout(() => console.log('1'), 0);
//   setImmediate(() => console.log('2'));
// }
// main();

// function main1() {
//   setTimeout(() => console.log('4'), 50);
//   process.nextTick(() => console.log('5'));
//   setImmediate(() => console.log('6'));
//   process.nextTick(() => console.log('7'));
// }
// main1();

// function main2() {
//   setTimeout(() => console.log('1'), 1000);
//   process.nextTick(() => console.log('2'));
//   setImmediate(() => console.log('3'));
//   process.nextTick(() => setTimeout(() => {
//     console.log('4');
//   }, 1000));
// }
// main2();

const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {
  console.log('started')
})
eventEmitter.emit('start')

eventEmitter.on('start1', number => {
  console.log(`started ${number}`)
})

eventEmitter.emit('start1', 23)

eventEmitter.on('start2', (start, end) => {
  console.log(`started from ${start} to ${end}`)
})

eventEmitter.emit('start2', 1, 100)

// const myEmitter = new MyEmitter();
eventEmitter.on('event', function(a, b) {
  console.log(a, b, this, this === eventEmitter);
});
eventEmitter.emit('event', 'a', 'b');

// on method to one more call emit
let m = 0;
eventEmitter.on('event1', () => {
  console.log(++m);
});
eventEmitter.emit('event1');
// Prints: 1
eventEmitter.emit('event1');
// Prints: 2
eventEmitter.emit('event1');
// Prints: 3

// once method to only one calling and more ignore
let z = 0;
eventEmitter.once('event2', () => {
  console.log(++z);
});
eventEmitter.emit('event2');
// Prints: 1
eventEmitter.emit('event2');
// Prints: 2

// more args
const myEmitter = new EventEmitter();
// First listener
myEmitter.on('event3', () => {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event3',(arg1, arg2) => {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event3', (...args) => {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event3'));

myEmitter.emit('event3', 1, 2, 3, 4, 5);

// emitter.eventNames() method
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());


// emitter.removeListener(eventName, listener)
myEE.removeListener('connection');
