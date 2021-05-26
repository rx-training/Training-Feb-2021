//Clear the console
console.log('--------------------------------Clear the console--------------------------------')

console.clear()


//Counting elements
console.log('--------------------------------Counting elements--------------------------------')

const x = 1
const y = 2
const z = 3
console.count(
  'The value of x is ' + x + 
  ' and has been checked .. how many times?'
)
console.count(
  'The value of x is ' + x + 
  ' and has been checked .. how many times?'
)
console.count(
  'The value of y is ' + y + 
  ' and has been checked .. how many times?'
)

//---

const oranges = ['orange', 'orange']
const apples = ['just one apple']
oranges.forEach(fruit => {
  console.count(fruit)
})
apples.forEach(fruit => {
  console.count(fruit)
})

//Print the stack trace
console.log('--------------------------------Print the stack trace--------------------------------')

const function2 = () => console.trace()
const function1 = () => function2()
function1()

//Calculate the time spent
console.log('--------------------------------Calculate the time spent--------------------------------')

const doSomething = () => console.log('test')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //do something, and measure the time it takes
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()


//stdout - console.log and stderr - console.error

console.log('--------------------------------stdout and stderr--------------------------------')
console.error('This Is An Error')

//Color the output
console.log('--------------------------------Color the output--------------------------------')

const chalk = require('chalk')
console.log(chalk.yellow('hi!'))
console.log(chalk.green('Green Text'))
console.error(chalk.red('This Is Also An Error'))

//Create a progress bar
console.log(chalk.yellow('--------------------------------Color the output--------------------------------'))

const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)




