const EventEmitter = require('events');
const eventEmitter = new EventEmitter()

eventEmitter.on('start',number=>{
    console.log(`Start ${number}`)
});
eventEmitter.emit('start',23)

eventEmitter.on('Start1',(start, end)=>{
    console.log(`Start from ${start} to ${end}`)
});
eventEmitter.emit('Start1',1,100);

class myEmitter extends EventEmitter{}
 const myEmitter1 = new myEmitter();
 myEmitter1.on('event',(a,b)=>{
    console.log(`an Event occured! ${a} to ${b}`);
 });
 myEmitter1.emit('event',100,200)

const myEmitter2 = new myEmitter();
myEmitter2.on('event2',(a,b)=>{
    setImmediate(()=>{
        console.log('This is done asynchoronusly');
    });
});
myEmitter2.emit('event2','a','b')

/*   Handeling events only once   */ 
const myEmitter3 =new myEmitter();
let m=0;
myEmitter3.once('event3',()=>{
    console.log(++m)
})
myEmitter3.emit('event3')
myEmitter3.emit('event3')