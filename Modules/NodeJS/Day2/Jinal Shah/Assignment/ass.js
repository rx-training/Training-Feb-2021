const info = require('fs')

const args = process.argv.slice(2)
console.log(args) 
var n1 = parseInt( args[0])
var n2 = parseInt( args[1])
var opt = args[2]
//console.log(n1)
//console.log(n2)
//console.log(opt)

switch (opt){
    case '+' : add(n1,n2)
            break;
    case '-' : sub(n1,n2)
            break;
    case '*' : mul(n1,n2)
            break;
    case '/' : div(n1,n2)
            break;
    default : console.log('default')
    break; 
}

function add(n1,n2)
{
    var sum = "Number 1 = " + n1 + ", Number 2 = " + n2 + "\n" + "sum = " + (n1+n2) + "\n"
    console.log(n1+n2 );
    info.writeFile('./res.txt', sum, { flag: 'a+' }, err => {})
}
function sub(n1,n2)
{
    var sub = "Number 1 = " + n1 + ", Number 2 = " + n2 + "\n" + "substration = " + (n1-n2) + "\n"
    info.writeFile('./res.txt', sub, { flag: 'a+' }, err => {})
}
function mul(n1,n2)
{
    var mul = "Number 1 = " + n1 + ", Number 2 = " + n2 + "\n" + "multiplication = " + (n1*n2) + "\n"
    info.writeFile('./res.txt', mul, { flag: 'a+' }, err => {})
}
function div(n1,n2)
{
    var div = "Number 1 = " + n1 + ", Number 2 = " + n2 + "\n" + "division = " + (n1/n2) + "\n"
    info.writeFile('./res.txt', div, { flag: 'a+' }, err => {})
}