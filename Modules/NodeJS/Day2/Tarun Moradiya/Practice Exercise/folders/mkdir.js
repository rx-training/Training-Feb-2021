const fs = require('fs')
const path = require('path');

//Create a new folder

const folderName = 'test2'

//mkdir
fs.mkdir(path.join(__dirname, folderName), err => {})

//mkdirSync
try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
  }
} catch (err) {
  console.error(err)
}
