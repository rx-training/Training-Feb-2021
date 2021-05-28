const fs=require('fs');
const path=require('path');

fs.mkdir(path.join(__dirname,'myFolder'),(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Folder Created")
    fs.copyFile('./person.txt','./myFolder/person.txt',(err2)=>{
        if(err2){
            console.log(err2);
            return;
        }
        console.log("File Copied");
    });
});

