//7. Create one folder files and move person.txt in that file.

const fs = require('fs');
const path = require('path');
fs.mkdir("Files", function (err) {
    if (err) throw err;
    console.log("Folder Created")

});


fs.rename('person.txt', './Files/person.txt', (err) => {
  if (err) throw err;
  console.log('Rename complete!');
});