const fs = require('fs')
const path = require('path')

//Accept your name from command line. And append it to person.txt as “hello “+“name”.

let name = process.argv.slice(2)

fs.appendFile(path.join(__dirname, 'person.txt'), ` Hello ${name}`, err => {
    if (err) {
        console.error(err)
        return
    }
})