const os = require('os')

let totlaMem = os.totalmem()
let freeMem = os.freemem()

console.log('Toal Memory: ' + totlaMem)

//Template Strings
//ES6 / ES2015 : ECMAScript 6

console.log(`Free Memory: ${freeMem}`)