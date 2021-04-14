console.log('hello')

/*1. Create hello.js file and exports a value of constant variable greeting=”Greeting of the day!!!” and load the same in index.js*/
const h = require("./hello")
console.log(h);

/*2. Create Rectangle.js and compute AreaofRectangle and perimeter of Rectangle, and exports area and perimeter of rectangle*/
const data = require("./rectangle")
console.log(data.a)
console.log(data.p)

/*--------------------------------------------------------------------*/

console.log(__filename);

console.log(__dirname);

const buf1 = Buffer.alloc(10);
console.log(buf1);

setTimeout(function () {
    console.log("welcome");
},1000)