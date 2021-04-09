/* 1. Create one txt file name it as person.txt and
       write in that hello world*/

const { constants } = require('buffer')
const fs = require('fs')
fs.writeFile('data/person.txt','hello Modi', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('add the data')
})

/* 2. Append hello India in person.txt.*/

const fs1 = require('fs')
fs1.writeFile('data/person.txt', '\n hello india', { flag: 'a+' }, (err,data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('add data in append method')
})

/* 3. Accept your name from command line. And 
      append it to person.txt as “hello “+ “name”.*/

      const fs3 = require('fs')
      const content = "Hello" + ' ' + process.argv.slice(2)
      fs3.writeFile('data/person.txt', '\n'+ content, { flag: 'a+' }, (err,data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log('argument to data in append method')
    })

/*4. Create two txt files, write some dummy text. Read two file content and print it in the console. use async and await.*/

async function readFiles(folder,folder1) {
  try {
    await fs.readFile(folder,'utf8',(err,data) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(data)
    })
    await fs.readFileSync(folder1,'utf8',(err,data) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(data)
    })
    //done
  } catch (err) {
    console.error(err)
  }
}
const folder = 'data/person.txt'
const folder1 = 'data/person1.txt'
readFiles(folder,folder1)

/* 5. Write your address in one txt file and find out how many consonants are there.*/

const fs5 = require("fs")

fs5.readFile('data/address.txt','utf8',(err,data) => {
  if(err){
    console.error(err)
        return
  }
  // console.log(data)
  function constants(data){
    let re =  /[bcdfghjklmnpqrstvwxys]/gi;
    console.log('Total constants in:' + data.match(re).length)
  }
  constants(data)
})


/* 6. Remove person.txt file.*/
/*const fs6 = require('fs-extra')

fs6.remove('person.txt', (err,data) => {
  if(err){
  console.error(err)
  }
  console.log("remove file")
}) */

/* 7. Create one folder files and move person.txt in that 
      file.*/

    /*const fs7 = require('fs')

    const oldPath = 'person.txt'
    const newPath = 'data/person.txt'

fs7.rename(oldPath, newPath, (err,data) =>  {
  if(err){
    console.error(err)
    }
    console.log("File is Move in New Folder")
  }) */




