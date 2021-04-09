const fs = require('fs')

//stat

fs.stat('ex.txt', (err, stats) => {
    if (err) {
      console.error(err)
      return
    }
    //we have access to the file stats in `stats`
  })
  
  //statSync
  try {
    const stats = fs.statSync('ex.txt')
  } catch (err) {
    console.error(err)
  }
  

/*
What kind of information can we extract using the stats?
if the file is a directory or a file, using stats.isFile() and stats.isDirectory()
if the file is a symbolic link using stats.isSymbolicLink()
the file size in bytes using stats.size.
*/

fs.stat('ex.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(stats.isFile()) //true
  console.log(stats.isDirectory()) //false
  console.log(stats.isSymbolicLink()) //false
  console.log(stats.size) //1024000 //= 1MB
})