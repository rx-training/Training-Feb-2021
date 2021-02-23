// var order = "Bhargav";
// order = 20;
// var order;
// var a = 100;
// var a = "modi";
// var a = true;
// var a;   ---> undefined


// var order = {
//     a = 25,    -----> is called object
//     b = true
// }

// var a = [9001,9002,9003];   ----> Object

// var a = null;  ---> object
// console.log(typeof a);


// function number(a){
//     console.log(a);
// }
// number(5);


// function string(a){
//     console.log("enter a number:" + a);
// }
// string(5);

//   functions

// function calculator(a,b){
//     console.log("multiply:" + (a*b));
//     }
// calculator(5,2);

// function calculator(a,b){
//     return a * b;
//     }
// var a =  calculator(10,2);
// console.log(a);

// a =  calculator(20,2);
// console.log(a);
 
// var a = function(){
//     console.log();
// }
// console.log(typeof a);

// var a = function(){
//     console.log("there is a fun");
// }
// a();

                                //   if else
// var a = 5;
// var b = false;
// if (a >= 50)
//      b = true;
// console.log(b);


// var a = 99.99;
// var b;
// if (a >= 100){
//     b = true;
// }
// else{
//     b = false;
// }
// console.log(b);


// var a = "modi";
// var b;
// if (a == "modis")
//     b = "Not Done"
// else if (a == "modik")
//     b = "not done"
// else 
//     b = "modi"
// console.log(b);


// var a = "modi";
// var b;

// switch (a) {
//     case "modi":
//         b = "Right";
//         break;
//     case "modis":
//         b = "Faklse";
//         break
//     default:
//         b = "True";
//         break
// }
// console.log(b);

                            //  while method
// var a = 3;
// var b = 0;
// while(b < a){
//     console.log("item:" + b);
//     b++;
// }

// var a = 3;
// var b = 0;
// while(b < a)
//     console.log("item:" + b++);

// var a = 3;
// var b = 0;
// do {
//     console.log("item:" + b);
//     b++;
// } while(b<a);

                            //   for loop
// var a = 5;
// for (var i=0; i<a; i++)
//    console.log(i)

// var a = 5;
// var i = 1;
// for (; i<= a; i++)
//    console.log(i)

// var a = 5;
// for (var i = 0; i<=a; i++){
//     console.log(i)
//     if (i == 2)
//     break;
// }

// var a = 5;
// for (var i = 0; i<=a; i++){
//     if (i == 2)
//     continue;
//     console.log(i)
// }

// var a = {
//     name : "modi",
//     er : 10,
//     price : 15
// }
// for (var b in a)
//      console.log(b + ":" + a[b]);


                            // string
// console.log("hello" + "world");

// console.log("this is d\'ata and ro\'w is jump")

// var a = "modi";
// console.log(a.length);

// var a = "   bhargav   ";
// console.log('[' + a.trim() + ']');

// var a = "Bhargav";
// console.log(a.toLowerCase())
// var a = "Bhargav";
// console.log(a.toUpperCase())



                                //    gloal scope
// var document = "Heros";
// function update(){
//     document = "data is loaded";
// }
// update();
// console.log(document);