const fs = require('fs')
const path = require('path')

fs.unlink(path.join(__dirname,'remove.txt'),err=>{
    if(err){
        console.error(err)
        return
    }else{
        console.log('File deleted!')
    }
})

