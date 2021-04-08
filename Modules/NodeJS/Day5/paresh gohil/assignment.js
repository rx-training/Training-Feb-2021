/*University of Mumbai needs to set an online exam for their students. For that they need to set a timer for three hours. 
After 3 hours exams should be finished.
Note: Use promises and callbacks
Once Exam is started start event should be invoke and When we end the exam end event should be call*/

const fs =require("fs")
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

/*--------choose option---------*/
readline.question(`What's your answer?`, (s) => {
    if (s) {
        eventEmitter.on("start",load)
        eventEmitter.emit("start")
    }
    readline.close()
  })

/*---------load question paper and start time-------------*/
function load() { 
    fs.readFile("./examquestion.txt",(err,data) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(data.toString())

            var start = setTimeout(() => {
                console.log("\nexam is over")
            },30000)

            const readline = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            })
            
            /*-------------ask to end the paper---------------*/
            readline.question('what\'s your answer?', (e) => {
                if (e) { 
                    eventEmitter.off("start",load)
                    clearTimeout(start)
                    console.log("\nexam is over")
                        
                }
                readline.close()
            })
            
        }
    })
}