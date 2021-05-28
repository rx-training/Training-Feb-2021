// more args
const fs = require('fs')
const EventEmitter = require('events')
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
  const parameters = args.join(',');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event3'));

myEmitter.emit('event3', 1, 2, 3, 4, 5);

// emitter.eventNames() method
const myEE = new EventEmitter();
function fee() {
    console.log("delete")
}
myEE.on('foo', fee);
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

myEE.removeListener('foo',fee);

console.log(myEE.eventNames());

myEmitter.on("Someonerequested",function(data)
{
  fs.readFile('./file.txt','utf8',(err,some) =>
  {
    if(err){
      console.log(err)
      return;
    }
    console.log(some);
  });
  console.log("Request has been made :" + data);
});

myEmitter.emit("Someonerequested","Hello all");
