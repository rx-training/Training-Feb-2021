const fs = require('fs')
const path = require('path')

//Remove person.txt file.

fs.unlink(path.join(__dirname, 'person.txt'), err => {
    if (err) {
        console.error(err)
        return
    } else {
        console.log('File Deleted')
    }
})