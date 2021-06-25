const fs = require('fs')

//async
fs.open('ex.txt', 'r', (err, fd) => {
  //fd is our file descriptor
})


//sync
try {
  const fd = fs.openSync('ex.txt', 'r')
} catch (err) {
  console.error(err)
}

/*
Notice the r we used as the second parameter to the fs.open() call.

That flag means we open the file for reading.

Other flags you'll commonly use are

r+ open the file for reading and writing
w+ open the file for reading and writing, positioning the stream at the beginning of the file. The file is created if not existing
a open the file for writing, positioning the stream at the end of the file. The file is created if not existing
a+ open the file for reading and writing, positioning the stream at the end of the file. The file is created if not existing
*/







