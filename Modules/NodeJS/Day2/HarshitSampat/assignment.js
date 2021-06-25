const fs=require('fs');

const args = process.argv.slice(2)
console.log(args)
var a= parseInt(args[0]);
var b=parseInt(args[1]);
var choice =args[2]


 function add(a,b){
     var add = "Sum of "+a +" and "+b+ " is "+(a+b)+"\n"
     console.log(a+b)
     fs.writeFile('./result.txt',add,{flag:'a+'},err=>{})
 }

 function sub(a,b){
     var sub ="Subtraction of "+a+" and"+b+ " is "+(a-b)+"\n"
     
     console.log(a-b)
     fs.writeFile('./result.txt',sub,{flag:'a+ '},err=>{})
 
 }

 function mul(a,b){
    var mul ="Multiplication of "+a+" and"+b+ " is "+(a*b)+"\n"
     
    console.log(a*b)
    fs.writeFile('./result.txt',mul,{flag:'a+ '},err=>{})

 }
 function div(a,b){
    var div ="Division of "+a+" and"+b+ " is "+(a/b)+"\n"
     
    console.log(a/b)
    fs.writeFile('./result.txt',sub,{flag:'a+ '},err=>{})

 }


switch(choice){
    case add:
        add(a,b);
        break;
    case sub:
        sub(a,b);
        break;
    case mul:
        mul(a,b);
        break;
    case div:
        div(a,b)
        break;
    default:
        console.log("Sorry Something went wrong")
        break;
}
  
