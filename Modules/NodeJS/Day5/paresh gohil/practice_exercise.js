/*-------------------------------------------------------------*/

const os = require("os")
console.log(os.cpus())
console.log(os.homedir())
console.log(os.hostname())
console.log(os.platform())
console.log(os.type())

/*-------------------------------------------------------------*/

function main() {
    setTimeout(() => console.log('1'), 0);
    setImmediate(() => console.log('2'));
}
  
main();

/*-------------------------------------------------------------*/

function main1() {
    setTimeout(() => console.log('1'), 1000);
    setImmediate(() => console.log('2'));
}
  
main1();

/*--------------------------------------------------------------*/

const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {
    console.log('started')
  })

eventEmitter.emit('start')

/*---------------------------------------------------------------*/

eventEmitter.on('start', (start, end) => {
    console.log(`started from ${start} to ${end}`)
  })
  
eventEmitter.emit('start', 1, 100)


console.log(eventEmitter.listenerCount('start'))
console.log(eventEmitter.getMaxListeners())
console.log(eventEmitter.eventNames())

/*------------------------------------------------------------*/

console.log(eventEmitter.removeAllListeners)

/*-----------------------------------------------------------*/
const myEmitter = new EventEmitter();

function c1() {
   console.log('an event occurred!');
}

function c2() {
   console.log('yet another event occurred!');
}

myEmitter.on('eventOne', c1); // Register for eventOne
myEmitter.on('eventOne', c2); // Register for eventOne

myEmitter.emit('eventOne');

/*---------------------------------------------------------*/


class MyEmitter extends EventEmitter {
  // Add any custom methods here
}

const myEmitter1 = new MyEmitter();
myEmitter1.on('event', () => {
  console.log('an event occurred!');
});
myEmitter1.emit('event');

/*------------------------------------------------------*/

 
const fun = async()=>{
    eventEmitter.on("start",  async(data) => {
        console.log("started");
        let ordercake1 = await f1();
        console.log(ordercake1);
        let demo1 = await f2(data.venue , ordercake1.Success);
        console.log(demo1);
        // ordercake.then((value)=>{
        //     console.log(value);
        // });
        // arrangeCelebrate.then((value) =>{
        //     console.log(value);
        // });
    });
    eventEmitter.emit("start" ,{venue :'Ahmedabad'});
 
}
const f1= async()=>{
    let ordercake = new Promise((resolve, reject) => {
        setTimeout(() => {
            //console.log('Order Cake!');
            resolve( {"Success":"True" ,"OrderCake":"Done"});
 
        }, 5000);
    });
    return ordercake;
}
 
const f2 = async(data , Success)=>{
    let arrangeCelebrate =  new Promise((resolve,reject) => {
        //console.log("Celebration ");
        setTimeout(() => {
            resolve("Celebration Dance , Cut the Cake ,Snacks ,Movie :" + data + " :" + Success);
        }, 10000);
    });
    return arrangeCelebrate;
}
fun();