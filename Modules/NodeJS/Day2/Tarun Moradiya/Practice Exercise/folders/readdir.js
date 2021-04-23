const fs = require('fs')
const path = require('path');


//Read the content of a directory


const folderPath = path.join(__dirname)

//readdirSync
let reader = fs.readdirSync(folderPath)

console.log(reader)

//readdir

fs.readdir(folderPath, (err, data) => {
    if(!err) {
        console.log(data)
    }
})
