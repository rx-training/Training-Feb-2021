const greeting = require('./hello')
const {areaOfRectangle, perimiterOfRectangle} = require('./rectangle')

console.log(greeting)

let a = 4
let b = 5

console.log(`The Area Of Ractangle is ${areaOfRectangle(a, b)}`)
console.log(`The Perimeter Of Ractangle is ${perimiterOfRectangle(a, b)}`)
