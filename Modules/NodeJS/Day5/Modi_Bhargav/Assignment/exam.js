const EventEmitter = require("events");
const fs = require('fs');
const eventEmitter = new EventEmitter();

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`Please Select Your Exam (Y/N)?`, name => {
  if (name == 'Y'){
    const onlineExam = async()=>{
      eventEmitter.on("start",  async() => {
          console.log("Exam start");
          let examStart1 = await examStart();
          console.log(examStart1);
          let examEnd2 = await examEnd();// data.EXAM
          console.log(examEnd2);
      });
      eventEmitter.emit("start")//, {EXAM :'Finished'});
   
  }
  const examStart = async()=>{
      let question = new Promise((resolve, reject) => {
              resolve(fs.readFile('./file.txt','utf8',(err,data) => {
                if(err){
                  console.log(err);
                  return;
                }
                console.log(data) 
                // return data;
              })); 
          return question;  
      });
  }
  const examEnd = async()=>{
      let endexam =  new Promise((resolve,reject) => {
          setTimeout(() => {
              resolve("\nYour Exam Finished");
          }, 10000);
      });
      return endexam;
  }
  onlineExam();
  }
  else{
    console.log('Your Exam Finished');
  } 
});