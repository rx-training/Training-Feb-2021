
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
readline.question(`Do you want to start the exam ? `, reply => {

    if(reply === 'yes'){
        console.log(`Exam started..`)

        const fun = async()=>{
            eventEmitter.on("start",  async() => {
                let question = await f1();
                console.log(question);
                let demo1 = await f2();
                console.log(demo1);
            });
            eventEmitter.emit("start");
         
        }
        const f1= async()=>{
            let question = new Promise((resolve, reject) => {

                resolve("Question 1. Explain Directives In Angular \nQuestion 2. Explain String Interpolation \nQuestion 3. Explain Data Binding")
        
            });
            return question;
        }
         
        const f2 = async()=>{
            let arrangeCelebrate =  new Promise((resolve,reject) => {
                //console.log("Celebration ");
                setTimeout(() => {
                    resolve("Times Up.. Exam Over...");
                }, 10000);
            });
            return arrangeCelebrate;
        }
        fun();

    }
    else{
        console.log(`not started..`)
    }
    readline.close()
})