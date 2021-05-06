const express = require('express')
const app = express()
process.exitCode = 1


app.get('/', (req, res) => {
  res.send('Hi!')
  process.exit(1)
})

app.listen(3000, () => console.log('Server ready'))