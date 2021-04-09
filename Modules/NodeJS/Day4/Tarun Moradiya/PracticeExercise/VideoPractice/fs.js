const fs = require('fs')

let files = fs.readdirSync('./')

console.log(files)

fs.readdir('./', function(err, data)  {
    if (err) console.log('Error: ' + err);
    else {
        console.log('Result: ' + data);
        console.log('Result: ' , data);
    }
})

fs.readdir('$', function(err, data)  {
    if (err) console.log('Error: ' + err);
    else {
        console.log('Result: ' + data);
        console.log('Result: ' , data);
    }
})