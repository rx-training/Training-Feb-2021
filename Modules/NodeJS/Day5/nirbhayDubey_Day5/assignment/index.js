const fs=require('fs');
const EventEmitter=require('events');
const emitter=new EventEmitter();

const time=1000*60*process.argv[2];

emitter.on('start',()=>{
    setTimeout(()=>{
        console.log('Exam Finished');
    },time);
});
emitter.on('start',()=>{
    fs.readFile('./questions.json','utf8',(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        let ques=JSON.parse(data);
        for (let i=0;i<ques.length;i++) {
            console.log(`\n${i+1}. ${ques[i].Que}\n\tA. ${ques[i].Options.Op1}\n\tB. ${ques[i].Options.Op2}\n\tC. ${ques[i].Options.Op3}\n\tD. ${ques[i].Options.Op4}`);   
        }
    });
});

emitter.emit('start');
