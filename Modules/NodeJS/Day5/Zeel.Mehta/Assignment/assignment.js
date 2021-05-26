const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
var file=require('fs');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter s for Start and e for End  : ', ans => {
  console.log(ans) 
  if(ans=='s' || ans=='S')
  {
    fun(ans);
  }
  else
  {
    console.log("Exam Finished")
  }      
 readline.close();
});



const fun = async()=>{
  eventEmitter.on("start",  async(data) => {
      console.log("console started");

  let ordercake=await f1();
  console.log(ordercake);
  let order=await f2();
  console.log(order);
    
  });

  eventEmitter.emit("start" ,{venue :'Kasindra'});

}
const f1= async()=>{
  let ordercake = new Promise((resolve, reject) => {
      setTimeout(() => {
        file.readFile("./question.json",(err,data)=>{    
        resolve(
            
             //var value=data.toString();
             //console.log(value);
            // res.end();
         
         "read" +data.toString()
                )  })
      }, 100);
  });
  return ordercake;
}
const f2= async()=>{
  let order = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve( "Exam Finished" )
      }, 5000);
  });
  return order;
}

