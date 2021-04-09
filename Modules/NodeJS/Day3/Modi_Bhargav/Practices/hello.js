/* 1. Create hello.js file and exports a value of constant variable greeting=”Greeting of the day!!!” and load the same in index.js.*/

const greeting = "Greeting of the day!!!";
const name = "bhargav";

module.exports = {greeting,name}

// or 

module.exports = "Greeting of the day!!!";

// or

exports.SimpleMessage = 'Hello world';

//or

module.exports.SimpleMessage = 'Hello world';

// or

module.exports = {
  firstName: 'James',
  lastName: 'Bond'
}

