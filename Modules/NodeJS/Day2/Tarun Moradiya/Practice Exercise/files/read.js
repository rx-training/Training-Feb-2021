const fs = require('fs')

//readFile

fs.readFile('ex.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

//readFileSync


try {
  const data = fs.readFileSync('ex.txt', 'utf8')
  console.log(data)
} catch (err) {
  console.error(err)
}

