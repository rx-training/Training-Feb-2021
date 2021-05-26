/* 1. Do mathematical operation like Addition, subtraction, multiplication, div.Use case statement.
Accept two numbers from the user from the command line.
Create Separate function for add, sub, multi and div
And store the result in one txt file. And display the result from file.*/

const fs = require("fs")

const args = process.argv.slice(2)
const n1 = parseInt(args[0])
const n2 = parseInt(args[1])
const select  = parseInt(args[2])
console.log(n1);
console.log(n2);
const add = (n1,n2) => {
  fs.writeFile("operation.txt",
               `Addition in ${n1} And ${n2} call ${n1 + n2}`,{ flag: "w+"},
               (err) => {
                 if(err){
                   console.log(err);
                   return;
                 }
                 console.log("Two Number Sum Is Completed")
               })
}
const sub = (n1,n2) => {
  fs.writeFile("operation.txt",
               `subtraction in ${n1} And ${n2} call ${n1 - n2}`,{ flag: "w+"},
               (err) => {
                 if(err){
                   console.log(err);
                   return;
                 }
                 console.log("Two Number subtraction Is Completed")
               })
}
const mul = (n1,n2) => {
  fs.writeFile("operation.txt",
               `multiplication in ${n1} And ${n2} call ${n1 * n2}`,{ flag: "w+"},
               (err) => {
                 if(err){
                   console.log(err);
                   return;
                 }
                 console.log("Two Number multiplication Is Completed")
               })
}
const div = (n1,n2) => {
  fs.writeFile("operation.txt",
               `divison in ${n1} And ${n2} call ${n1 / n2}`,{ flag: "w+"},
               (err) => {
                 if(err){
                   console.log(err);
                   return;
                 }
                 console.log("Two Number divison Is Completed")
               })
}

switch(select){
  case 1:
    add(n1,n2)
    break;
  case 2:
    sub(n1,n2)
    break;
  case 3:
    mul(n1,n2)
    break;
  case 4:
    div(n1,n2)
    break;
}

