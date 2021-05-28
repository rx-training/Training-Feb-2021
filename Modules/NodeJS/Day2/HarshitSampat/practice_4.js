const fs= require('fs')

function readFile(fileName){
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,'utf8',function(error,data){
            if (error) return reject(error);
            console.log(data)
            resolve();
        });
    });
}
async function run(){
    console.log(await readFile('./f1p4.txt'));
    console.log(await readFile('./f2p4.txt'));
}
run();
console.log('Waiting for files!!')