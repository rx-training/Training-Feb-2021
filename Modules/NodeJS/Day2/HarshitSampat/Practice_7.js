const fs = require('fs')
const path = require('path')

fs.mkdir(path.join(__dirname,'MoveFile'),err=>{
    if (err)
    console.error(err)
    return
})

let oldpath = path.join(__dirname,'person.txt')
let newpath = path.join(__dirname,'MoveFile','person.txt')

fs.rename(oldpath,newpath,err =>{
    if(err){
        console.error(err)
        return
    }
})