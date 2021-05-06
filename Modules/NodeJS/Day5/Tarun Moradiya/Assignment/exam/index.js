const EventEmitter = require('events')

const inquirer = require('inquirer')

const emitter = new EventEmitter()

const users = require('./data/users.json')
const questions = require('./data/questions.json')
const { async } = require('rxjs')
const { count } = require('console')

//set promt for exam

var Examprompt = inquirer.createPromptModule();

//global score

// var score = 0

//set max emmiters

// emitter.setMaxListeners(Infinity)

//register events 

emitter.on('load', load)

emitter.on('startExam', startExam)

emitter.on('timesUp', timesUp)

emitter.on('endExam', endExam)

//load event

emitter.emit('load')


//create quetions from json file

let myQeustions = []

questions.forEach((element, index , arr) => {
    myQeustions.push({
        type: 'checkbox',
        name: `que${index+1}`,
        message: `${index+1}: ${element.question}`,
        choices: [
            element.distractor1, element.distractor2, element.distractor3, element.correct_answer
        ]
    })
})


// console.log(users[0].name)

//--------on load user login function 

function load() {
    emitter.removeListener('load', () => {console.log('removed load')})
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'username',
                message: 'Enter your UserName: '
            },
            {
                type: 'password',
                name: 'password',
                message: 'Enter Your Password: '
            }
        ]
        ).then(answers => {
            // console.log(answers['username'], answers['password'])
    
            let check = users.find(element => {
                return(element.name == answers.username && element.password == answers.password)
            })
    
            // console.log('value of check: ', check)
    
            if (check) {
                console.log('\nYou are now logged in!!!')
    
                inquirer.prompt(
                    {
                        type: 'confirm',
                        name: 'confirm',
                        message: '\nDo You want to start the exam righ now? : '
                    }
                ).then(
                    answers => {
                        if(answers['confirm'] == true){
                            console.log('\nExam Started...')
    
                            emitter.emit('startExam')
                        } else {
                            console.log('\nExam Teminated.')
                        }
                    }
                )
            } else {
                console.log('Username or Password Incorrect')
            }
        }).catch(err => {
        console.error('Something went wrong')
    })
}

// //ask que

// async function ask(que) {
//     return inquirer.prompt(
//         que
//     ).then(
//         answers => {
//            console.log(answers)
//         } 
//     ).catch(err => {
//         console.error('Something went wrong')
//     })

    // const readline = require('readline').createInterface({
    //     input: process.stdin,
    //     output: process.stdout
    //   })
      
    //   readline.question(`${que.message}\n${que.choices}`
    //       , ans => {
    //     console.log(`ans: ${ans}`)
    //     if(ans[0] == 'd') {
    //         score++
    //     }
    //     readline.close()
    //   })

    //   return readline
// }

//start exam function

async function startExam() {

    // let minute = 60
    let hours = 3

    console.log(`You have ${hours} hours to comlpete exam.`)

    let timer = setTimeout(() => {
        emitter.emit('timesUp')
    }, 1000 * 60 * 60 * hours)

    // myQeustions.forEach(async (element, index, arr) => {
    //     let ans = await ask(element)
    //     console.log(ans)
    // }) 

    let exprompt = await Examprompt(
        myQeustions
    )

    // console.log(myQeustions)
    clearTimeout(timer)
    emitter.emit('endExam', exprompt)
}
    

//end exam function

function endExam(exprompt) {
    console.log('\nexam ended!!')

    exprompt.then(
        answers => {
            console.log(answers)
        } 
    ).catch(err => {
        console.error('\nSomething went wrong')
    })

    // console.log(score)
    emitter.removeAllListeners('exit')
}

//timesup

function timesUp() {
    console.log('\n\ntime is over!!!')
    emitter.emit('endExam', Examprompt)
}