const fs=require('fs');

fs.unlink('./person.txt',(err)=>{
    if(err){
        console.log(err);
        return;
    }
});