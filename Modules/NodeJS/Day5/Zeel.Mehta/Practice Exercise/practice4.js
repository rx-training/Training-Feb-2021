const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
 
const fun = async()=>{
    eventEmitter.on("start",  async(data) => {
        console.log("started");
        let ordercake1 = await f1();
        console.log(ordercake1);
        let demo1 = await f2(data.venue , ordercake1.Success);
        console.log(demo1);
    });
    eventEmitter.emit("start" ,{venue :'Kasindra'});
 
}
const f1= async()=>{
    let ordercake = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( {"Success":"True" ,"OrderCake":"Done"});
 
        }, 3000);
    });
    return ordercake;
}
 
const f2 = async(data , Success)=>{
    let arrangeCelebrate =  new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Celebration Dance , Cut the Cake ,Snacks ,Movie :" + data + " :" + Success);
        }, 3000);
    });
    return arrangeCelebrate;
}

fun();