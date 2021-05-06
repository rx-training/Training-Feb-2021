/*const EventEmitter = require('events');
const myEmitter = new EventEmitter();

function c1(){
    console.log('an event occured!');
}

function c2(){
    console.log('yet another event occured!');
}

myEmitter.on('eventone',c1)  
myEmitter.on('eventone',c2)

myEmitter.emit('eventone')

//----------------------------------ExmpleTwo

myEmitter.once('eventOnce',()=>console.log('event once fired'))
myEmitter.emit('eventOnce');    
myEmitter.emit('eventOnce');

// -------------------------Registering for the event with callback parameters

myEmitter.on('status',(code,msg)=>console.log(`Got ${code} and ${msg}`));
myEmitter.emit('status','200','ok');

//----------------------------Example 5 geeting listener count
console.log(myEmitter.listenerCount('eventone'));

//---------------Getting Raw Listeners
console.log(myEmitter.rawListeners('eventone'))

//Async Example Demo

/*class withTime extends EventEmitter{
    execute(asyncFunc,...args){
        this.emit('begin');
        console.time('execute');
        this.on('data',(data)=>console.log('got data',data));
        asyncFunc(...args,(err,data)=>{
            if(err){
                return this.emit('error',err);
            }
            this.emit('data',data);
            console.timeEnd('execute');
            this.emit('end');
        });
    }
}

const withTime1 =new  withTime();
withTime1.on('begin',()=>console.log('About to execute'));
withTime1.on('end',()=>console.log('Done with execute'));

const readFile=(url,cb)=>{
    fetch(url)
    .then((resp)=>resp.json()) //Transform data into json
    .then(function(data){
        cb(null,data);
    });
}
withTime1.execute(readFile,'https://jsonplaceholder.typicode.com/posts/1')*/

// Example 2->Adapted and thanks to Sameer Buna
/*class WithTime extends EventEmitter {
    execute(asyncFunc, ...args) {
      this.emit('begin');
      console.time('execute');
      this.on('data', (data)=> console.log('got data ', data));
      asyncFunc(...args, (err, data) => {
        if (err) {
          return this.emit('error', err);
        }
        this.emit('data', data);
        console.timeEnd('execute');
        this.emit('end');
      });
    }
  }
  const withTime = new WithTime();

withTime.on('begin', () => console.log('About to execute'));
withTime.on('end', () => console.log('Done with execute'));

const readFile = (url, cb) => {
  fetch(url)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
      cb(null, data);
    });
}

withTime.execute(readFile, 'https://jsonplaceholder.typicode.com/posts/1');
*/

class EventEmitter{
    listeners = {};//key-value pair
    addListener(eventName,fn){
        this.listeners[event] = this.listeners[event]||[];
        this.listeners[event].push(fn);
        return this
    }
    on(eventName,fn){
        return this.addListener(event,fn)
    }
    removeListener(eventName,fn){
        let lis = this.listeners[event];
        if(!lis) return this;
        for(let i=lis.length;i>0;i--){
            if(lis[i]===fn){
                lis.splice(i,1);
                break;
            }
        }
        return this;
    }
    off(eventName,fn){
        return this.removeListener(event,fn);
    }

    once(eventName,fn){
        timeStamp.listeners[event] = this.listeners[eventName]||[];
        const onceWrapper = () =>{fn();
        this.off(evevntName,onceWrapper);   
        } 
        this.listeners[eventName].push(onceWrapper);
        return this
    }
    emit(eventName,...args){
        let fns = this.listeners[eventName];
        if(!fns) return false;
        fns.forEach((f)=>{
            f(...args);
        });
        return true;
    }
    listenerCount(eventName){
        let fns = this.listeners[eventName]||[];
        return fns.length;
    }
    rawListeners(eventName){
        return this.listeners[eventName];
    }
}