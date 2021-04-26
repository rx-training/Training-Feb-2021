
const args = process.argv.slice(2)
var a, b, d;
a = args[0];
b = args[1];
d = args[2];

var result1 = ""


function Add() {
    var c = parseInt(a) + parseInt(b);

    result1 = `\nThe addition of two number is: ${c}`;


}


function Sub() {
    var c = parseInt(a) - parseInt(b);
    result1 = `\nThe substraction of two number is: ${c}`;

}

function Mul() {
    var c = parseInt(a) * parseInt(b);
    result1 = `\nThe Multiplication of two number is: ${c}`;

}

function Div() {
    var c = parseInt(a) / parseInt(b);
    result1 = `\nThe Division of two number is: ${c}`;

}

switch (d) {
    case '0':
        Add();
        break;

    case '1':
        Sub();
        break;

    case '2':
        Mul();
        break;

    case '3':
        Div();
        break;

    default:
        console.log("Please choose a valid choice");
        break;
}

var fs = require('fs');
fs.writeFile('result1.txt', result1, (err) => {
    if (err) {
        console.log("Error ocuured during writing result into file");
    }

});

fs.readFile('result1.txt', (err, data) => {
    if (err) {
        console.log("Error occured in displaying result");
    }
    else {
        console.log(data.toString());
    }
})

