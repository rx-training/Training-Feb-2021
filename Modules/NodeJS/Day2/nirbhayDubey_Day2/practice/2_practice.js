const fs=require('fs');

const msg="\nhello India";

fs.writeFile('./person.txt',msg,{flag:'a'},err=>{
    if(err){
        console.log(err);
        return;
    }
})