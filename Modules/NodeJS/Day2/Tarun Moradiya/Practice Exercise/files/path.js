const path = require('path')

const notes = '/users/joe/notes.txt'

console.log(path.dirname(notes)) // /users/joe
console.log(path.basename(notes)) // notes.txt
console.log(path.extname(notes)) // .txt

console.log(path.basename(notes, path.extname(notes))) //notes

//Working with paths

//join two or more parts of a path
const name = 'joe'
console.log(path.join('/', 'users', name, 'notes.txt')) //'/users/joe/notes.txt'

//to get absolute path
console.log(path.resolve('joe.txt')) //'/Users/joe/joe.txt' if run from my home folder

console.log(path.resolve('tmp', 'joe.txt')) //'/Users/joe/tmp/joe.txt' if run from my home folder

console.log(path.resolve('/etc', 'joe.txt')) //'/etc/joe.txt'

//try and calculate the actual path, when it contains relative specifiers like . or .., or double slashes
console.log(path.normalize('/users/joe/..//test.txt')) //'/users/test.txt'