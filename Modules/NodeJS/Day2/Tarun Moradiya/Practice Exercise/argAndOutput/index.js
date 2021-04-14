//Arguments can be standalone or have a key and a value.
// node index.js joe
// node index.js joe john
// node index.js name=joe

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
  })

const args = process.argv.slice(2)
console.log(args)

//minimist liberary to deal with keyed arguments 

const args2 = require('minimist')(process.argv.slice(2))
console.log(args2['name']) //joe
console.log(args2)

//node app.js --name=joe