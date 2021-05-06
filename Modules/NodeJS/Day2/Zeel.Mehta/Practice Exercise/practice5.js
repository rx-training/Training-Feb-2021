//5. Write your address in one txt file and find out how many consonants are there.
    
    const fs = require('fs');
    fs.writeFile('demo1.txt', 'E/401, Divyajivan Heights, \n Kudasan, Gandhinagar', function (err) {
    if (err) return console.log(err);
    console.log('Hello1');
    }); 
    
    fs.readFile('demo1.txt', 'utf8', function(err, contents) {
    console.log(contents);
  
    var abc=countVowels(contents);
     function countVowels(contents) {
    return contents.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
    }
    console.log("Consonants : "+abc); 
    })