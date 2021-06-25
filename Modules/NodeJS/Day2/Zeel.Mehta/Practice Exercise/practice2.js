//2. Append hello India in person.txt.

const fs = require('fs');
fs.appendFile('person.txt', 'Hello India! \n', function (err) {
    if (err) return console.log(err);
    console.log('Hello India !');
  }); 