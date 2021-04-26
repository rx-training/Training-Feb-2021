// 1. Create one txt file name it as person.txt and write in that hello world

const fs = require('fs');
fs.createWriteStream("person.txt");
 fs.writeFile('person.txt', 'Hello World! \n', function (err) {
   if (err) return console.log(err);
   console.log('Hello World !');
  });

 
  


    

  

