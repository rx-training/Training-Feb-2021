const fs = require('fs')
const path = require('path')

//Append hello India in person.txt.

let content = ' Hello India'

fs.appendFile(path.join(__dirname,'person.txt'), content, err => {
    if (err) {
        console.error(err)
        return
    }
})