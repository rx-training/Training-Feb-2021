const fs = require('fs')
const path = require('path')

//Create one folder files and move person.txt in that file.

fs.mkdir(path.join(__dirname, 'files'), err => {
    if (err) {
        console.error(err)
        return
    }
})

let oldPath = path.join(__dirname, 'person.txt')
let newPath = path.join(__dirname, 'files', 'person.txt')

fs.rename(oldPath, newPath, err => {
    if (err) {
        console.error(err)
        return
    }
})