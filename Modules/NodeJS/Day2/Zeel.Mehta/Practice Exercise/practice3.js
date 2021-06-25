//3. Accept your name from command line. And append it to person.txt as “hello “+“name”.

const fs = require('fs');
const args = process.argv.slice(2)
  console.log(args);

  fs.appendFile('person.txt', 'Hello ' + args, function (err) {
    if (err) return console.log(err);
    console.log('Hello !');
  }); 