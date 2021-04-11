const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const fs = require('fs');
var readline = require('readline').createInterface({
    input : process.stdin,
    output :process.stdout
})

 
/*const readLine =require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
readLine.question(`what's your name?`,Name=>{
    console.log(`Hi ${Name}!`)
    readLine.close()
})*/

readline.question(`Are you ready to Start? press S `,(s,S)=>{
    if(s||S){
        eventEmitter.on('start',examLoad)
        eventEmitter.emit('start')
    }
    readline.close()
})

function examLoad(){
    fs.readFile('./questions.txt',(err,data)=>{
        if(err){
            console.log("Something Went wrong",err)
        }
        else{
            console.log(data.toString())
        }
        var startexam = setTimeout(()=>{
            console.log("\nTime Over!")
        },30000)

        var readline = require('readline').createInterface({
            input : process.stdin,
            output :process.stdout
         
        
    })

    readline.question(`Want to Fininsh? Press e`,(e,E)=>{
        if(e||E){
            eventEmitter.off('start',examLoad)
            clearTimeout('start')
            console.log('\n Thanks for submit')
    }
    readline.close
})

    }
    )}
