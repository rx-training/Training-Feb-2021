const fs = require('fs');

const msg = "hello world";

fs.writeFile('./person.txt',msg,err=>{
    if(err){
        console.log(err)
        return;
    }
});