const fs = require('fs')
const path = require('path')

// Write your address in one txt file and find out how many consonants are there.

fs.writeFile(path.join(__dirname, 'address.txt'), '25-Om Residency, Raiya Road, Rajkot', err => {
    if (err) {
        console.error(err)
    }
})

fs.readFile(path.join(__dirname, 'address.txt'), 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    } else {
        let count = 0

        count = data.match(/[b-df-hj-np-tv-z]/gi).length
        console.log(`The number of Consonants in the file is: ${count}`)
    }
})