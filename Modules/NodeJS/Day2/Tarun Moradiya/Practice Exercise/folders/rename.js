const fs = require('fs')
const path = require('path');

//Rename a folder

//rename
fs.rename('test', 'newTest', err => {
    if (err) {
      console.error(err)
      return
    }
    //done
  })

//renameSync
try {
    fs.renameSync('test2', 'newTest2')
} catch (err) {
    console.error(err)
}
