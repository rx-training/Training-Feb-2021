const fs = require('fs')

const content = 'Some content!'

//writeFile

fs.writeFile('ex2.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})


//writeFileSync

const content2 = 'Some more content!'

try {
  const data = fs.writeFileSync('ex2.txt', content2)
  //file written successfully
} catch (err) {
  console.error(err)
}

/*
fs.writeFile('/Users/joe/test.txt', content, { flag: 'a+' }, err => {})

r+ open the file for reading and writing
w+ open the file for reading and writing, positioning the stream at the beginning of the file. The file is created if not existing
a open the file for writing, positioning the stream at the end of the file. The file is created if not existing
a+ open the file for reading and writing, positioning the stream at the end of the file. The file is created if not existing
*/

const content3 = ' Third content!'

fs.appendFile('ex2.txt', content3, err => {
  if (err) {
    console.error(err)
    return
  }
  //done!
})