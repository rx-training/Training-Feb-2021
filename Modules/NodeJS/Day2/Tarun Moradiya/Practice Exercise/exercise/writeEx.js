const fs = require('fs')
const path = require('path')

// Create one txt file name it as person.txt and write in that hello world

let content = 'Hello World!!!'
fs.writeFile(path.join(__dirname, 'person.txt'), content, (err) => {
    if(err) {
        console.error(err)
        return
    }
})