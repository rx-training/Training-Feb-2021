#!/usr/bin/env node
// ^ Hashbang comments

console.log("Hello world");

//----------------------------------------------------------------------
//Destructuring

var foo = ['one', 'two', 'three'];

// without destructuring
var one   = foo[0];
var two   = foo[1];
var three = foo[2];

// with destructuring
var [one, two, three] = foo;

//--------------------------------------------------------------------------

//in

// Arrays
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees;        // returns true
3 in trees;        // returns true
6 in trees;        // returns false
'bay' in trees;    // returns false (you must specify the index number,
                   // not the value at that index)
'length' in trees; // returns true (length is an Array property)

// built-in objects
'PI' in Math;          // returns true
var myString = new String('coral');
'length' in myString;  // returns true

// Custom objects
var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
'make' in mycar;  // returns true
'model' in mycar; // returns true

//--------------------------------------------------------------------------

/*
super([arguments]); // calls the parent constructor.
super.functionOnParent([arguments]);
*/

//--------------------------------------------------------------------------

// rest parameter 

function multiply(multiplier, ...theArgs) {
    return theArgs.map(x => multiplier * x);
  }
  
  var arr = multiply(2, 1, 2, 3);
  console.log(arr); // [2, 4, 6]

//--------------------------------------------------------------------------

// Traditional Function
function bob (a){
    return a + 100;
  }
  
  // Arrow Function
  let bob = a => a + 100;

// ----------------------
// Arrow Example
// ----------------------

// A simplistic object with its very own "this".
var obj = {
    num: 100
}

// Setting "num" on window to show how it gets picked up.
window.num = 2020; // yikes!

// Arrow Function
var add = (a, b, c) => this.num + a + b + c;

// call
console.log(add.call(obj, 1, 2, 3)) // result 2026

// apply
const arr = [1, 2, 3]
console.log(add.apply(obj, arr)) // result 2026

// bind
const bound = add.bind(obj)
console.log(bound(1, 2, 3)) // result 2026

//-----------------------------------------------------------------------------

// Whole-script strict mode syntax
'use strict';
var v = "Hi! I'm a strict mode script!";

//Strict mode for functions

function strict() {
    // Function-level strict mode syntax
    'use strict';
    function nested() { return 'And so am I!'; }
    return "Hi!  I'm a strict mode function!  " + nested();
  }
  function notStrict() { return "I'm not strict."; }

//Strict mode for modules

  function strict() {
    // because this is a module, I'm strict by default
}
export default strict;

//------------------------------------------------------------------------------------------------

//Synchronous JavaScript

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  alert('You clicked me!');

  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);
});

//Asynchronous JavaScript

let response = fetch('myImage.png'); // fetch is asynchronous
let blob = response.blob();
// display your image blob in the UI somehow

//Async callbacks

btn.addEventListener('click', () => {
    alert('You clicked me!');
  
    let pElem = document.createElement('p');
    pElem.textContent = 'This is a newly-added paragraph.';
    document.body.appendChild(pElem);
  });

  //Promises

  fetch('products.json').then(function(response) {
    return response.json();
  }).then(function(json) {
    products = json;
    initialize();
  }).catch(function(err) {
    console.log('Fetch problem: ' + err.message);
  });

  //async and await 

  function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();

  //closer

  function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var add5 = makeAdder(5);
  var add10 = makeAdder(10);
  
  console.log(add5(2));  // 7
  console.log(add10(2)); // 12

  //--------------------------------------------------------------------------

  //Event loop

  while (queue.waitForMessage()) {
    queue.processNextMessage()
  }