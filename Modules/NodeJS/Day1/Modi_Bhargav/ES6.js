var  x = 10;
// Here x is 10
{  
  // const z = 10;
  let y = 2;
  console.log(y)
  // Here x is 2
}
console.log(x)
// Here x is 10

// const z = (x, y) => x * y;
const z = (x, y) => { return x * y };
console.log(z(5,5));

/*The for/of statement loops through the values of an iterable object.*/
let cars = ["BMW", "Volvo", "Mini"];
// let text = "";
for (let x of cars) {
  // text += x 
  console.log(x)
}

let language = "JavaScript";
// let text1 = "";
for (let y of language) {
  // text1 += x;
  console.log(y)
}

// Promises
let myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function(){ myResolve("My Name Bhargav !!"); }, 3000);
});
myPromise.then(function(value) {
  console.log(value);
});

// functions
function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
console.log(myFunction(5));

//arguments declare
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
let a = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(a)

// array to find
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

console.log(first)

function myFunction(value, index, array) {
  return value > 18;
}

//array find index
var numbers = [4, 9, 16, 25, 29];
var second = numbers.findIndex(myFunction);

console.log(second);

function myFunction(value, index, array) {
  return value > 18;
}

// math method
//Math.cbrt(x) returns the cube root of x
console.log(Math.cbrt(8))

//isInteger
console.log(Number.isInteger(10) + " " + Number.isInteger(10.5));

//isSafeInteger
console.log(Number.isSafeInteger(10) + " " + Number.isSafeInteger(12345678901234567890));

//not a number 
console.log(isNaN("Hello") + " " + isNaN("10"));


