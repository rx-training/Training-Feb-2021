const EventEmitter = require('events')

const inquirer = require('inquirer')

const emitter = new EventEmitter()

const users = require('./data/users.json')
const questions = require('./data/questions.json')

//set promt for exam

var Examprompt = inquirer.createPromptModule();

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
            `a: ${element.distractor1}`, `b: ${element.distractor2}`, `c: ${element.distractor3}`, `d: ${element.correct_answer}`
        ]
    })
})


// console.log(users[0].name)

//--------on load user login function 

function load() {
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
                console.log('You are now logged in!!!')
    
                inquirer.prompt(
                    {
                        type: 'confirm',
                        name: 'confirm',
                        message: 'Do You want to start the exam righ now? : '
                    }
                ).then(
                    answers => {
                        if(answers['confirm'] == true){
                            console.log('Exam Started...')
    
                            emitter.emit('startExam')
                        } else {
                            console.log('Exam Teminated.')
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

//start exam function

function startExam() {
    let timer = setTimeout(() => {
        emitter.emit('timesUp')
    }, 1000 * 5)

    // console.log(myQeustions)

    Examprompt(
        myQeustions
    ).then(
        answers => {
            emitter.emit('endExam', answers)
        } 
    ).catch(err => {
        console.error('Something went wrong')
    })
}

//end exam function

function endExam(answers) {
    console.log(answers['Que1'])
}

//timesup

function timesUp() {
    Examprompt.then(
        answers => {
            emitter.emit('endExam', answers)
        } 
    )
}