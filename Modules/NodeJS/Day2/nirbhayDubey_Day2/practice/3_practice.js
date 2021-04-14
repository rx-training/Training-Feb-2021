const fs=require('fs');

const name=`\nhello ${process.argv[2]}`;

fs.writeFile('./person.txt',name,{flag:'a+'},(err)=>{
    if(err){
        console.log(err);
        return;
    }
});

fs.readFile('./person.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});