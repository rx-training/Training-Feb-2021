
const fs = require('fs')
const path = require('path');

//rmdir
fs.rmdir('newTest2', (err) => {
    if(!err) {
        console.log('folder deleted')
    }
})

//rmdirSync

fs.rmdirSync('newTest2')


//Remove 

const fsExt = require('fs-extra')

const folder = 'newTest'

fsExt.remove(folder, err => {
  console.error(err)
})

//with promise
fsExt.remove(folder)
  .then(() => {
    //done
  })
  .catch(err => {
    console.error(err)
  })


//   with async
  async function removeFolder(folder) {
    try {
      await fsExt.remove(folder)
      //done
    } catch (err) {
      console.error(err)
    }
  }
  
  const folder2 = 'newTest2'
  removeFolder(folder2)