// function hello() {
//   process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`)
//   })
//   console.log("Hello World" + ' ' +process.argv.slic(2))
// }
// hello()

// console.log('My %s has %d years', 'cat', 2)

/*const oranges = ['orange', 'orange','banana']
const apples = ['just one apple','orange']
oranges.forEach(fruit => {
  console.count(fruit)
})
apples.forEach(fruit => {
  console.count(fruit)
})*/

const doSomething = () => {
  for(i = 0; i<10; i++){
    console.log("Hello Bhargav")
  }
}
const measureDoingSomething = () => {
  console.time('doSomething()')
  //do something, and measure the time it takes
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()
console.error("This is a error")
const chalk = require('chalk')
console.log(chalk.yellow('welcome to Node!'))

const fs = require('fs')
fs.readFile('./person.txt', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data.toString())
})