console.log(__dirname);
console.log(__filename);

const data = require('./hello')
// console.log(data.name)
// console.log(data.greeting)
// console.log(data)
// console.log(data.SimpleMessage)
console.log(data.firstName + ' ' + data.lastName)


const {data1,Name,areaofRectangle,perimeterRectangle} = require('./rectangle.js')

data1("Hello Bhargav");

const args = process.argv.slice(2)
const n1 = parseInt(args[0])
const n2 = parseInt(args[1])
console.log('Area of Rectangle:' + ' ' + areaofRectangle(n1,n2))
console.log("Perimeter of Rectangle:" + ' ' + perimeterRectangle(n1,n2))

const Name1 = new Name('James', 'Bond');
console.log(Name1.fullName());

