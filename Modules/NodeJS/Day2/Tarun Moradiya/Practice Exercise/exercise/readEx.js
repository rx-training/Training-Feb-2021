const fs = require('fs')
const path = require('path')

// Create two txt files, write some dummy text. Read two file content and print it in the console. use async and await.

//writing files
let contentOne = 'This is Textfile one'
let contentTwo = 'This is Textfile Two'

//async
fs.writeFile(path.join(__dirname, 'textFile1.txt'), contentOne, err => {
    if(err) {
        console.error(err)
        return
    }
})

//sync
try {
    fs.writeFileSync(path.join(__dirname, 'textFile2.txt'), contentTwo)
} catch(err) {
    console.error(err)
}

//reading files

//async
fs.readFile(path.join(__dirname, 'textFile1.txt'), 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    } else {
        console.log(data)
    }
})

//sync

try{
    let data = fs.readFileSync(path.join(__dirname, 'textFile2.txt'), 'utf8')
    console.log(data)
} catch(err) {
    console.error(err)
}


