//6. Remove person.txt file.

const fs = require('fs');

fs.createWriteStream("person1.txt");

fs.copyFile("person.txt", "person1.txt", function (err) {
  if (err) throw err;
  console.log("Copy Data of File");
});

fs.unlink("person1.txt", function (e) {
  if (e) throw err;
  console.log("Delete File");
});