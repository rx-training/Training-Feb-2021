const fs=require('fs');

const files=fs.readdir('./',(err)=>
{
    if(err)
    {
        console.error(err.message);
    }
});
console.log(files);