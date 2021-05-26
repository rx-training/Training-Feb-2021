const fs = require('fs');
const args = process.argv.slice(2)
a=Number(args[0]);
b=Number(args[1]);
fs.createWriteStream("result.txt");
function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
function mul(a,b)
{
    return a*b;
}
function div(a,b)
{
    return a/b;
} 

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Which Operation you want to perform ? \n add\n sub \n mul \n div \n', name => {

    switch (name) {
    case 'add':
        fs.writeFile('Result.txt','Addition : '+add(a,b), function (err) {
            if (err) return console.log(err);
            }); 
            
            fs.readFile('Result.txt', 'utf8', function(err, contents) {
            console.log(contents);
            })
        break;
    case 'sub':
        fs.writeFile('Result.txt','Substraction : '+sub(a,b), function (err) {
            if (err) return console.log(err);
            }); 
            
            fs.readFile('Result.txt', 'utf8', function(err, contents) {
            console.log(contents);
            })
        break;
    case 'mul':
        fs.writeFile('Result.txt','Multiplication : '+mul(a,b), function (err) {
            if (err) return console.log(err);
            }); 
            
            fs.readFile('Result.txt', 'utf8', function(err, contents) {
            console.log(contents);
            })
        break;    
    case 'div':
        fs.writeFile('Result.txt','Division : '+div(a,b), function (err) {
            if (err) return console.log(err);
            }); 
            
            fs.readFile('Result.txt', 'utf8', function(err, contents) {
            console.log(contents);
            })
        break;
    default : 
    console.log("Invalid Operation")
}
    readline.close();
  });

 