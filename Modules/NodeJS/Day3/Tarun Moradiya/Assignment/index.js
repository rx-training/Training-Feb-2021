const mobike = require('./mobike')

// let mobikeObj = new mobike(5555, 9988776655, 'Tarun Mordiya', 11)

let args = process.argv.slice(2)

let mobikeObj = new mobike(args[0], args[1], args[2], args[3])

console.log(mobikeObj)

console.log(mobikeObj.charge)