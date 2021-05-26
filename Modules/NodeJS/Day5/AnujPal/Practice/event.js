const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');


myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2,arg3) {
  console.log(`event with parameters ${arg1}, ${arg2},${arg3} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);


myEmitter.on('foo', () => {});
myEmitter.on('bar', () => {});
const sym = Symbol('symbol');
console.log(sym);
myEmitter.on(sym, () => {});
console.log(myEmitter.eventNames());
console.log(myEmitter.getMaxListeners());
console.log(myEmitter.listenerCount('foo'));


myEmitter.on('foo', () => console.log('a'));
myEmitter.prependListener('foo', () => console.log('b'));
myEmitter.emit('foo');